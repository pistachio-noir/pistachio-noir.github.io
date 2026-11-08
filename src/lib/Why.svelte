<script>
  import Feat from './Feat.svelte';
</script>

<section class="why" aria-labelledby="why-h">
  <h2 id="why-h">So, why isn't it public yet?</h2>
  <div class="feats">
    <Feat title="It's not done">Still a work in progress. PDC is mid-build and the rest keeps learning new tricks.</Feat>
    <Feat title="It's a made-to-measure suit">This isn't off-the-rack stuff. It's cut to fit one desktop, so the shell plugs into Cider and CLion, not Spotify and VS Code. Sorry, not sorry.</Feat>
    <Feat title="Public builds will happen">Eventually. When? God knows. :)</Feat>
  </div>
</section>

<style>
  .why { max-width: 1400px; margin-inline: auto; padding: 56px var(--gutter) 0; }
  h2 {
    max-width: 14ch; margin-bottom: 48px;
    font-weight: 800; font-size: clamp(38px, 6.4vw, 92px); line-height: .96; letter-spacing: -.04em;
    color: var(--text-bright); text-wrap: balance;
  }
</style>
