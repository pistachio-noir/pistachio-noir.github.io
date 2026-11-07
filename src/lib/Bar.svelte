<script>
  // The shell's floating bar is the navigation: one dot per workspace, the focused one in pistachio.
  let { sections } = $props();

  let current = $state(0);
  let now = $state(new Date());
  const time = $derived(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
  const day = $derived(now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }));

  function sync() {
    const y = innerHeight / 2;
    let i = 0;
    sections.forEach((s, k) => {
      if (document.getElementById(s.id).getBoundingClientRect().top <= y) i = k;
    });
    current = i;
  }

  $effect(() => {
    sync();
    const t = setInterval(() => (now = new Date()), 15000);
    return () => clearInterval(t);
  });
</script>

<svelte:window onscroll={sync} onresize={sync} />

<nav class="bar" aria-label="Sections">
  <ul class="dots">
    {#each sections as s, i (s.id)}
      <li>
        <a href="#{s.id}" title={s.name} aria-current={i === current ? 'true' : undefined}>
          <i></i><span class="sr">{s.name}</span>
        </a>
      </li>
    {/each}
  </ul>
  <p class="where" aria-hidden="true">{#key current}<span class="swap">{sections[current].name}</span>{/key}</p>
  <p class="when"><time datetime={now.toISOString()}>{time}</time><span>{day}</span></p>
</nav>

<style>
  .bar {
    --bar-w: min(640px, calc(100vw - 32px));
    position: fixed; z-index: 10; left: 50%; bottom: 16px; translate: -50% 0;
    width: var(--bar-w); height: 56px; overflow: hidden;
    display: flex; align-items: center; padding: 0 8px 0 4px;
    background: var(--bg-alt); border: 1px solid var(--overlay2); border-radius: 28px;
    box-shadow: 0 18px 44px rgba(0, 0, 0, .6);
    /* Like the shell at startup: the bar grows out of its handle. */
    animation: grow .7s ease-out .4s backwards;
  }
  .bar > * { animation: fade .3s ease-out 1s backwards; }
  .dots { display: flex; align-items: center; }
  .dots a { display: flex; align-items: center; justify-content: center; min-width: 44px; height: 44px; border-radius: 22px; }
  .dots i { display: block; width: 8px; height: 8px; border-radius: 4px; background: var(--muted); transition: width .2s ease-out, background .2s ease-out; }
  .dots a:hover i { background: var(--subtext); }
  .dots a[aria-current='true'] i { width: 28px; background: var(--pistachio); }
  .where { flex: 1; min-width: 0; margin: 0 12px; font-weight: 700; font-size: 13px; color: var(--text-bright); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .when {
    display: flex; flex-direction: column; justify-content: center; height: 40px; padding: 0 16px; margin-left: auto;
    border-radius: 20px; background: var(--overlay); font-variant-numeric: tabular-nums; line-height: 1.15;
  }
  .when time { font-weight: 800; font-size: 13px; color: var(--text-bright); }
  .when span { font-weight: 600; font-size: 11px; color: var(--subtext); white-space: nowrap; }

  .swap { display: block; overflow: hidden; text-overflow: ellipsis; animation: swap .25s ease-out; }
  @keyframes grow { from { width: 72px; height: 6px; } }
  @keyframes swap { from { opacity: 0; translate: 0 6px; } }

  @media (max-width: 560px) {
    .where, .when span { display: none; }
    .when { height: 36px; }
  }
  /* six dots plus a clock do not fit under about 420px */
  @media (max-width: 420px) {
    .when { display: none; }
  }
</style>
