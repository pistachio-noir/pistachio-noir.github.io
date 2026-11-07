<script>
  import Feat from './Feat.svelte';
  import { reveal } from './reveal.js';

  const layers = [
    { name: 'wallpaper', hex: '#0D0F09' },
    { name: 'bg', hex: '#15170F' },
    { name: 'bgAlt', hex: '#1D2016' },
    { name: 'overlay', hex: '#2A2F1F' },
    { name: 'overlay2', hex: '#39412A' },
  ];
  const text = [
    { name: 'textBright', hex: '#F6F8EF', v: '--text-bright' },
    { name: 'text', hex: '#E5E9D8', v: '--text' },
    { name: 'subtext', hex: '#A3B08F', v: '--subtext' },
    { name: 'muted', hex: '#626F51', v: '--muted' },
  ];
  const accents = [
    { name: 'pistachio', hex: '#9FD88A', v: '--pistachio' },
    { name: 'pistachio deep', hex: '#7BB864', v: '--pistachio-deep' },
    { name: 'terracotta', hex: '#DB8267', v: '--terracotta' },
    { name: 'gold', hex: '#E0B15E', v: '--gold' },
    { name: 'clay', hex: '#D9975A', v: '--clay' },
    { name: 'teal', hex: '#7FC9A8', v: '--teal' },
    { name: 'sage blue', hex: '#7DA3B3', v: '--sage-blue' },
    { name: 'lavender', hex: '#AC8ED0', v: '--lavender' },
  ];

  // The quick settings mock-up: tiles toggle, one launcher row is picked.
  const tiles = $state([
    { name: 'Ethernet', on: true, paths: ['m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z', 'M6 8v1M10 8v1M14 8v1M18 8v1'] },
    { name: 'Bluetooth', on: true, paths: ['m7 7 10 10-5 5V2l5 5L7 17'] },
    { name: 'Do not disturb', on: false, paths: ['M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7M10.3 21a1.94 1.94 0 0 0 3.4 0M2 2l20 20'] },
    { name: 'Night light', on: false, paths: ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'] },
  ]);
  const results = [
    { name: 'Pistachio FM', kind: 'App' },
    { name: 'Pistachio Text', kind: 'App' },
    { name: 'Pistachio Shell settings', kind: 'System' },
  ];
  let picked = $state(0);

  let copied = $state('');
  async function copy(hex) {
    try {
      await navigator.clipboard.writeText(hex);
      copied = `Copied ${hex}`;
    } catch {
      copied = `${hex} (copy it by hand)`;
    }
  }
</script>

{#snippet layer(i)}
  <div class="layer l{i}" style:--i={i}>
    <button class="tag" onclick={() => copy(layers[i].hex)}>{layers[i].name} <code>{layers[i].hex}</code></button>
    {#if i < layers.length - 1}{@render layer(i + 1)}{/if}
  </div>
{/snippet}

{#snippet swatches(list)}
  <div class="sw-grid">
    {#each list as c (c.hex)}
      <button class="sw" onclick={() => copy(c.hex)}>
        <i style:background="var({c.v})"></i>
        <span><b>{c.name}</b><code>{c.hex}</code></span>
      </button>
    {/each}
  </div>
{/snippet}

<section class="panel" id="palette" aria-labelledby="palette-h">
  <h2 id="palette-h">Layers of <span class="nb">green-black</span>, with one soft accent</h2>
  <p class="lede">Pistachio Noir is a dark palette and the rules for using it. Surfaces climb from a near-black wallpaper to a lifted olive in small steps, so depth comes from tone instead of shadow. One colour, pistachio, is kept for whatever is active.</p>

  <div class="noir-grid">
    <div>
      <h3>Five surfaces, darkest to lightest</h3>
      <p>Each layer sits one step above the one beneath it. Select any name to copy its hex.</p>
      <div class="layers" use:reveal>{@render layer(0)}</div>
    </div>

    <div>
      <h3>Pistachio means active</h3>
      <p>The green marks where you are or what is on: the current workspace, a switch that is on, the row you picked, the text cursor. It never fills a heading, a border or a background.</p>
      <div class="qs">
        <div class="tiles">
          {#each tiles as t (t.name)}
            <button class="tile" role="switch" aria-checked={t.on} onclick={() => (t.on = !t.on)}>
              <span class="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">{#each t.paths as d}<path {d} />{/each}</svg>
              </span>
              <span><b>{t.name}</b><small>{t.on ? 'On' : 'Off'}</small></span>
            </button>
          {/each}
        </div>
        <div class="rows" role="group" aria-label="Launcher results">
          {#each results as r, i (r.name)}
            <button class="row" aria-pressed={picked === i} onclick={() => (picked = i)}>{r.name} <small>{r.kind}</small></button>
          {/each}
        </div>
      </div>
      <p class="qs-note">A mock-up of the shell's quick settings and launcher. Try the switches and the rows.</p>
    </div>
  </div>

  <div class="swatch-groups">
    <div>
      <h3>Text</h3>
      <p class="sub">Three steps of readable text. Muted is for decoration only, such as the inactive dots in the bar. It is too dim for words.</p>
      {@render swatches(text)}
    </div>
    <div>
      <h3>Accents</h3>
      <p class="sub">Pistachio is the only one that marks state. The rest colour code, status and icons, and stay out of the way.</p>
      {@render swatches(accents)}
      <p class="copied" role="status">{copied}</p>
    </div>
  </div>

  <div class="feats rules">
    <Feat title="Soft shapes">Panels have a 28 px corner radius, cards and inputs 20, and buttons are pills. There are no square corners.</Feat>
    <Feat title="Tone, not shadow">Borders and separators use the overlay tones, never the accent. The only gradient is a fade at the foot of a scrolling list.</Feat>
    <Feat title="Two typefaces">Manrope for the interface, in weights 500 to 800. JetBrains Mono only for code, paths and keys.</Feat>
  </div>

  <p class="also">Noir also colours Neovim, the foot terminal, rofi, Waybar, Vimium hints and the SDDM login screen.</p>
</section>

<style>
  .nb { white-space: nowrap; }
  .noir-grid { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: clamp(32px, 5vw, 80px); margin-top: 64px; align-items: start; }
  .noir-grid h3 { font-size: clamp(24px, 2.4vw, 32px); letter-spacing: -.02em; }
  .noir-grid > div > p { margin: 12px 0 24px; max-width: 32rem; color: var(--subtext); }
  .noir-grid > div > .qs-note { margin: 14px 0 0; font-size: 13px; line-height: 1.5; }

  /* each layer is one tonal step above the one it sits in */
  .layer { padding: 8px; transition: opacity .6s ease-out calc(var(--i) * 140ms), translate .6s ease-out calc(var(--i) * 140ms); }
  .layers:not([data-seen]) .layer { opacity: 0; translate: 0 14px; }
  .l0 { background: var(--wallpaper); border: 1px solid var(--overlay); border-radius: 28px; }
  .l1 { background: var(--bg); border-radius: 24px; }
  .l2 { background: var(--bg-alt); border-radius: 20px; }
  .l3 { background: var(--overlay); border-radius: 16px; }
  .l4 { background: var(--overlay2); border-radius: 12px; padding: 0; }
  .tag {
    display: flex; align-items: baseline; gap: 12px; width: 100%; min-height: 44px; padding: 14px 12px 0;
    background: none; border: 0; border-radius: 12px; text-align: left; cursor: pointer;
    font-weight: 700; font-size: 14px; line-height: 1; color: var(--text);
  }
  .tag code { font-size: 12px; font-weight: 500; color: var(--subtext); }
  .l4 .tag { min-height: 72px; padding-top: 0; align-items: center; }
  .tag:hover { color: var(--text-bright); }

  .qs { background: var(--bg-alt); border: 1px solid var(--overlay2); border-radius: var(--panel-r); padding: 20px; }
  .tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .tile {
    display: flex; align-items: center; gap: 12px; min-height: 64px; padding: 12px;
    border: 0; border-radius: var(--card-r); background: var(--overlay); text-align: left; cursor: pointer;
  }
  .ic {
    flex: none; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;
    background: var(--overlay2); color: var(--subtext);
    transition: background .12s ease-out, color .12s ease-out;
  }
  .tile[aria-checked='true'] .ic { background: var(--pistachio); color: var(--bg); }
  .ic svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .tile b { display: block; font-size: 13px; font-weight: 700; line-height: 1.3; color: var(--text-bright); }
  .tile small { display: block; font-size: 12px; line-height: 1.3; color: var(--subtext); }
  .rows { display: grid; gap: 8px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--overlay2); }
  .row {
    display: flex; justify-content: space-between; align-items: center; min-height: 44px; padding: 0 16px;
    border: 0; border-radius: var(--card-r); background: var(--overlay); color: var(--text);
    font-weight: 700; font-size: 13px; cursor: pointer; text-align: left;
    transition: background .12s ease-out;
  }
  .row small { font-size: 12px; font-weight: 500; color: var(--subtext); }
  .row:hover { background: var(--overlay2); }
  .row[aria-pressed='true'] { background: var(--pistachio); color: var(--bg); }
  .row[aria-pressed='true'] small { color: var(--bg); }

  .swatch-groups { margin-top: 72px; display: grid; gap: 40px; }
  .sub { margin-top: 4px; color: var(--subtext); font-size: 15px; max-width: 40rem; }
  .sw-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(168px, 1fr)); gap: 8px 16px; margin-top: 16px; }
  .sw {
    display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 6px 12px 6px 6px;
    background: none; border: 0; border-radius: 28px; text-align: left; cursor: pointer;
    transition: background .12s ease-out;
  }
  .sw:hover { background: var(--bg-alt); }
  .sw i { flex: none; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--overlay2); }
  .sw b { display: block; font-size: 14px; font-weight: 700; line-height: 1.3; color: var(--text-bright); }
  .sw code { display: block; font-size: 12px; line-height: 1.3; color: var(--subtext); }
  .copied { min-height: 1.5em; margin-top: 12px; font-size: 14px; color: var(--subtext); }

  .rules { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-top: 72px; }
  .also { margin-top: 56px; color: var(--subtext); max-width: 46rem; }

  @media (max-width: 900px) {
    .noir-grid { grid-template-columns: minmax(0, 1fr); }
  }
</style>
