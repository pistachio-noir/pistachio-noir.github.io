<script>
  import { img } from './base.js';
</script>

<header class="hero">
  <img class="mark" src={img('favicon.svg')} alt="" width="56" height="56">
  <h1 class="wordmark"><span class="line"><span>Pistachio</span></span> <span class="line"><span>Noir</span></span></h1>
  <div class="side">
    <p class="lede">A green-black desktop, drawn once and used everywhere. One colour scheme, and four apps built in it.</p>
    <p class="actions">
      <a class="btn primary" href="#shell">Meet the apps</a>
      <a class="btn" href="#palette">See the palette</a>
    </p>
  </div>
</header>

<style>
  .hero {
    min-height: 94svh;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: auto 1fr auto auto;
    column-gap: 24px;
    padding: clamp(24px, 5vh, 48px) 0 clamp(104px, 15vh, 148px);
  }
  .mark { grid-column: 1 / -1; width: 56px; height: 56px; }
  .wordmark {
    grid-column: 1 / -1;
    grid-row: 3;
    font-weight: 800;
    font-size: clamp(60px, 20.5vw, 300px);
    line-height: .86;
    letter-spacing: -.05em;
    color: var(--text-bright);
  }
  /* each line rises out of its own mask; the padding leaves room for ascenders inside it */
  .line { display: block; overflow: hidden; padding-top: .1em; margin-top: -.1em; }
  .line > span { display: block; animation: rise 1s ease-out .1s backwards; }
  .line + .line > span { animation-delay: .24s; }
  .mark { animation: fade .6s ease-out backwards; }
  .side { animation: lift .8s ease-out .65s backwards; }
  @keyframes rise { from { translate: 0 105%; } }
  @keyframes lift { from { opacity: 0; translate: 0 16px; } }
  .side { grid-column: 1 / -1; grid-row: 4; max-width: 32rem; margin-top: 32px; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }

  /* Wide screens: the intro sits beside the short word "Noir". */
  @media (min-width: 1200px) {
    .wordmark { font-size: clamp(60px, 17vw, 300px); }
    .side { grid-column: 8 / -1; grid-row: 3; align-self: end; margin: 0 0 .6vw; }
  }
</style>
