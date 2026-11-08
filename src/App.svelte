<script>
  import Hero from './lib/Hero.svelte';
  import Palette from './lib/Palette.svelte';
  import Shell from './lib/Shell.svelte';
  import Files from './lib/Files.svelte';
  import Editor from './lib/Editor.svelte';
  import Notes from './lib/Notes.svelte';
  import DevCentre from './lib/DevCentre.svelte';
  import Why from './lib/Why.svelte';
  import Footer from './lib/Footer.svelte';
  import Bar from './lib/Bar.svelte';

  // One workspace per dot in the bar; the first covers the hero and the palette.
  const sections = [
    { id: 'top', name: 'Pistachio Noir' },
    { id: 'shell', name: 'Pistachio Shell' },
    { id: 'fm', name: 'Pistachio FM' },
    { id: 'text', name: 'Pistachio Text' },
    { id: 'notes', name: 'Pistachio Notes' },
    { id: 'pdc', name: 'Pistachio Dev Centre' },
  ];
</script>

<main>
  <div id="top">
    <Hero />
    <Palette />
  </div>
  <Shell />
  <Files />
  <Editor />
  <Notes />
  <DevCentre />
</main>
<Why />
<Footer />
<Bar {sections} />

<style>
  main { max-width: 1400px; margin-inline: auto; padding-inline: var(--gutter); }
</style>
