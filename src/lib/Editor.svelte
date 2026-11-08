<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';

  const keys = [
    ['Ctrl O', 'Open a file'],
    ['Ctrl S', 'Save (or Save as, for a new file)'],
    ['Ctrl F', 'Find in the file'],
    ['Ctrl G', 'Jump to a line'],
    ['Ctrl wheel', 'Zoom the text'],
  ];
</script>

<section class="panel" id="text" aria-labelledby="text-h">
  <div class="split flip">
    <div class="windows">
      <Shot
        src="text-main.webp" w={1824} h={1104}
        alt="Pistachio Text showing a Rust file with line numbers and syntax colours. The current line is highlighted, and Open and Save buttons sit at the top."
      />
      <Shot
        class="over"
        src="text-find.webp" w={1824} h={1104}
        alt="The same editor with a find bar open above the code, searching for LINES, with a pistachio text cursor."
      />
    </div>
    <div class="copy">
      <AppHead icon="icon-text.svg" id="text-h" title="Pistachio Text">
        A small text and code editor. One file at a time, line numbers, and syntax colours for every language KDE's KSyntaxHighlighting knows about. No tabs, no drama.
      </AppHead>
      <div class="list">
        <div class="feat">
          <h3>Keys</h3>
          <dl>
            {#each keys as [k, does]}
              <dt><kbd>{k}</kbd></dt>
              <dd>{does}</dd>
            {/each}
          </dl>
        </div>
        <Feat title="Open and Save as match the shell">Both are the editor's own cards, not some boring stock dialog. Type to filter the files, or type a path starting with <code>/</code> or <code>~</code> and hit Enter.</Feat>
        <Feat title="It keeps what you wrote">Enter keeps the line's indent, and Tab types the file's own indent. Line endings stay as they were. Anything that isn't UTF-8 text, or is over 10 MB, gets turned down with a note in the status bar. It's a small editor, remember.</Feat>
      </div>
    </div>
  </div>
</section>

<style>
  /* two windows, one over the other; they stay in view beside the longer text */
  .windows { position: sticky; top: 24px; padding-bottom: 20%; }
  .windows :global(.over) { position: absolute; right: -3%; bottom: 0; width: 62%; }
  .windows :global(.over .shot) { box-shadow: 0 24px 60px rgba(0, 0, 0, .65); transition-delay: .3s; }
  /* slides in from the side on wide screens only: on a phone the hidden offset would widen the page */
  @media (min-width: 901px) {
    .windows :global(.over .shot.rise:not([data-seen])) { translate: 56px 28px; }
  }
  dl { display: grid; grid-template-columns: auto 1fr; gap: 12px 20px; align-items: center; margin-top: 8px; }
  dt { white-space: nowrap; }
  dd { color: var(--subtext); font-size: 15px; }

  @media (max-width: 900px) {
    .copy { display: contents; }
    .windows { position: relative; order: 1; }
    .copy .list { order: 2; }
    .windows :global(.over) { right: 0; width: 70%; }
  }
</style>
