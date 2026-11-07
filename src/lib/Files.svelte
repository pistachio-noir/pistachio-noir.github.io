<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
</script>

<section class="panel" id="fm" aria-labelledby="fm-h">
  <div class="split">
    <div class="copy">
      <AppHead icon="icon-fm.svg" id="fm-h" title="Pistachio FM">
        A file manager for the same desktop. The screens are QML, and everything that touches files is C++ on Qt 6.
      </AppHead>
      <div class="list">
        <Feat title="Tabs and split view">F3 splits a tab into two panes. Drag a tab onto the side of the files to put its folder beside the one you are in.</Feat>
        <Feat title="Open with, remembered">Pick the app from a card. “Always use for” makes it the desktop's default for that type, so <code>xdg-open</code> follows it too.</Feat>
        <Feat title="Undo for file work">Ctrl+Z reverses the latest paste, drop, rename, new folder, move to trash, compress or extract, up to ten steps back.</Feat>
        <Feat title="Plays well with other apps">Copy and paste share the clipboard with Nautilus and Dolphin. Bookmarks live in the GTK bookmarks file. Drag files to and from other windows.</Feat>
        <Feat title="Type to search">Start typing in a folder to filter it. <kbd>Ctrl L</kbd> types a path. Everything has a key, and <kbd>F1</kbd> lists them.</Feat>
      </div>
    </div>
    <div class="stack">
      <Shot
        src="fm-split.webp" w={1920} h={1200}
        alt="Pistachio FM with two tabs and the window split into two panes. The Notes folder is on the left, Documents on the right, and a folder is highlighted in pistachio green."
        caption="Two panes, side by side. The green marks the selection."
      />
      <Shot
        src="fm-open-with.webp" w={1920} h={1200}
        alt="An Open with card over the file manager, listing apps for a Markdown file, with a switch to always use the chosen app for this type."
        caption="The Open with card, with its switch for making the choice the default."
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
