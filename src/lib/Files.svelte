<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
</script>

<section class="panel" id="fm" aria-labelledby="fm-h">
  <div class="split">
    <div class="copy">
      <AppHead icon="icon-fm.svg" id="fm-h" title="Pistachio FM">
        A file manager for the same desktop. The screens are QML, and everything that actually touches your files is C++ on Qt 6.
      </AppHead>
      <div class="list">
        <Feat title="Tabs and split view">Hit F3 and a tab splits into two panes. Or drag a tab onto the side of the files and its folder lands next to the one you're in.</Feat>
        <Feat title="Open with, remembered">Pick the app from a card. “Always use for” makes it the desktop's default for that file type, and <code>xdg-open</code> falls in line.</Feat>
        <Feat title="Undo for file work">Ctrl+Z takes back your last paste, drop, rename, new folder, trashing, compress or extract. Up to ten steps, so you can panic a little.</Feat>
        <Feat title="Plays well with other apps">Copy and paste share the clipboard with Nautilus and Dolphin, bookmarks live in the GTK bookmarks file, and you can drag files in and out of other windows. It gets along with everyone.</Feat>
        <Feat title="Type to search">Just start typing in a folder to filter it. <kbd>Ctrl L</kbd> lets you type a path. Everything has a key, and <kbd>F1</kbd> lists the lot in case you forget.</Feat>
      </div>
    </div>
    <div class="stack">
      <Shot
        src="fm-split.webp" w={1920} h={1200}
        alt="Pistachio FM with two tabs and the window split into two panes. The Notes folder is on the left, Documents on the right, and a folder is highlighted in pistachio green."
        caption="Two panes, side by side. The green bit is whatever's selected."
      />
      <Shot
        src="fm-open-with.webp" w={1920} h={1200}
        alt="An Open with card over the file manager, listing apps for a Markdown file, with a switch to always use the chosen app for this type."
        caption="The Open with card. The switch at the bottom makes your pick the default."
      />
    </div>
  </div>
</section>

<style>
  /* On a phone: heading, then the pictures, then the details. */
  @media (max-width: 900px) {
    .copy { display: contents; }
    .stack { order: 1; }
    .copy .list { order: 2; }
  }
</style>
