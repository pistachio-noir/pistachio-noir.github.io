<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
  import { img } from './base.js';
  import { reveal } from './reveal.js';
</script>

<section class="panel" id="notes" aria-labelledby="notes-h">
  <AppHead icon="icon-notes.svg" id="notes-h" title="Pistachio Notes">
    Markdown notes kept as plain files. Pick a folder, and its subfolders become chapters.
  </AppHead>

  <div class="demo" use:reveal>
    <Shot
      src="notes-split.webp" w={2000} h={1152}
      alt="Pistachio Notes in Split view. A sidebar lists notes and chapters, the Markdown of a note called Nightly backups is on the left, and its preview on the right shows a heading, a quote, a table, two checkboxes and a code block."
    />
    <img
      class="menu" src={img('notes-menu.webp')} width="468" height="621" loading="lazy"
      alt="A right-click menu on a checkbox, listing Open, Done, Yes / works, No / doesn't work, Don't know, Talk it through first and Later."
    >
  </div>
  <p class="caption">Split view: the note's Markdown on the left, the preview on the right. Right-click a checkbox and the legend opens. The notes in it are made up.</p>

  <div class="feats">
    <Feat title="Plain files, your folder">Your notes are <code>.md</code> files in one folder you pick, and nothing else is written there. Subfolders are chapters, sorted by name with numbers counted as numbers, so a <code>01</code> prefix sets the order.</Feat>
    <Feat title="Edit, split or preview">The preview draws tables, task boxes, code blocks and quotes as you type, and in Split view it follows your cursor. Double-click anything in it to fix it on the spot.</Feat>
    <Feat title="Checkboxes with a legend">Left-click ticks a box. Right-click opens your own legend: <code>[+]</code> yes, <code>[-]</code> no, <code>[?]</code> don't know, <code>[+?]</code> talk it through first, <code>[+-]</code> later.</Feat>
    <Feat title="Saves itself, safely">Notes save two seconds after you stop typing, through a temporary file that then replaces the note. If another app changes the open note, a banner offers Reload or Keep mine.</Feat>
    <Feat title="Links, images and PDF">A link to another note opens it in the app. Images load from the note's folder, never from the web. <kbd>Ctrl Shift E</kbd> writes an A4 PDF next to the note, on white rather than Noir.</Feat>
    <Feat title="Vim motions, if you want them">Off until you switch them on in Settings. Esc enters Normal mode, with <code>h j k l w b e 0 $ gg G</code> to move, <code>i a I A o O</code> to type, and <code>x dd u</code> and <kbd>Ctrl R</kbd>. The status bar says NORMAL or INSERT, and line numbers count from your cursor.</Feat>
  </div>

  <p class="fact">Built on Qt 6 and QML. Markdown is parsed by md4c, and code blocks are coloured by KDE's KSyntaxHighlighting.</p>
</section>

<style>
  .demo { position: relative; margin-top: 56px; }
  /* the legend menu opens over the note a moment after the screenshot settles, as it does on a right-click */
  .menu {
    position: absolute; left: 68.4%; top: 55.9%; width: 17.7%; height: auto;
    border: 1px solid var(--overlay2); border-radius: 12px; box-shadow: 0 18px 44px rgba(0, 0, 0, .6);
    transform-origin: 0 0;
    transition: opacity .25s ease-out 1s, scale .25s ease-out 1s;
  }
  .demo:not([data-seen]) .menu { opacity: 0; scale: .9; }
  .caption { margin-top: 14px; font-size: 14px; line-height: 1.5; color: var(--subtext); max-width: 44rem; }
  .feats { margin-top: 64px; }
  .fact { margin-top: 56px; font-size: 14px; color: var(--subtext); }

  @media (max-width: 700px) {
    .menu { display: none; }
  }
</style>
