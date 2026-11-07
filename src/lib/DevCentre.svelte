<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
  import { reveal } from './reveal.js';

  // Phases from PDC's docs/PLAN.md, as of 7 November 2026.
  const phases = [
    { code: 'P0', name: 'Foundation', state: 'done', label: 'Done' },
    { code: 'P1', name: 'Sessions and the Cards view', state: 'done', label: 'Done' },
    { code: 'P2', name: 'Approvals and notifications', state: 'done', label: 'Done' },
    { code: 'P3', name: 'Terminal dock and agent jobs', state: 'now', label: 'In progress' },
    { code: 'P4', name: 'Neovim', state: '', label: 'Next' },
    { code: 'P5', name: 'Git panel and lazygit', state: '', label: 'Planned' },
    { code: 'P6', name: 'Overview, hybrid mode and polish', state: '', label: 'Planned' },
  ];
</script>

<section class="panel" id="pdc" aria-labelledby="pdc-h">
  <AppHead icon="icon-pdc.svg" id="pdc-h" title="Pistachio Dev Centre" status="In development">
    A native workbench for running several Claude Code sessions side by side. Each session gets its own git worktree, and an embedded Neovim, a terminal dock and Git live in the same window.
  </AppHead>

  <Shot
    class="board"
    src="pdc-main.webp" w={2200} h={1375}
    alt="A design board of the PDC window: projects and sessions in a sidebar, a Neovim buffer in the middle, an agent conversation with a plan on the right, and a terminal and an agent jobs list along the bottom."
    caption="A design board for the main window, the contract the app is being built to. Sessions on the left, Neovim in the middle, the agent on the right, terminal and agent jobs below. The names in it are made up."
  />

  <div class="approval">
    <div class="list">
      <Feat title="Approvals you can read">When a session wants to run a command, a dialog shows the exact command, the directory, the branch and why it needs approval. Allow once, always allow here, or deny. Nothing is ever allowed by a timeout.</Feat>
      <Feat title="Safe by default">Every session runs in its own worktree. A project must be trusted before Claude starts in it, and the hook server listens on localhost only.</Feat>
      <Feat title="Never locked in">Anything the Claude Code terminal UI can do stays within reach. A session can be handed to a real <code>claude --resume</code> in a terminal pane at any moment.</Feat>
      <Feat title="Native, and Linux only">Qt 6 and QML over a C++20 core, with no web view. The terminal and Neovim share one cell-grid renderer.</Feat>
    </div>
    <Shot
      src="pdc-approval.webp" w={1800} h={1125}
      alt="A design board of the approval dialog: Allow claude to run a command, showing a git push command, its directory and branch, and the buttons Allow once, Always allow here and Deny."
      caption="The approval dialog, as designed."
    />
  </div>

  <div class="phases-head">
    <h3>Where it stands</h3>
    <p>Status on 7 November 2026. Phases P0 to P2 are done and P3 is under way.</p>
  </div>
  <ol class="phases" use:reveal>
    {#each phases as p, i (p.code)}
      <li class="phase {p.state}" style:--i={i}>
        <span class="dot">
          {#if p.state === 'done'}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>{/if}
        </span>
        <code>{p.code}</code><b>{p.name}</b><small>{p.label}</small>
      </li>
    {/each}
  </ol>
</section>

<style>
  .panel :global(.board) { margin-top: 56px; }
  .approval { display: grid; grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); gap: clamp(32px, 5vw, 80px); align-items: center; margin-top: 88px; }
  .approval .list { margin-top: 0; }
  .phases-head { margin-top: 88px; }
  .phases-head p { margin-top: 8px; color: var(--subtext); max-width: 40rem; }

  /* a real sequence, so a real timeline: done is a pistachio check, now pulses, the rest are hollow */
  .phases { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 16px; margin-top: 32px; position: relative; }
  /* a segment from each dot to the next, so the line stops at P6 */
  .phase:not(:last-child)::before { content: ''; position: absolute; left: 30px; top: 14px; width: calc(100% - 14px); height: 2px; background: var(--overlay2); transform-origin: left center; transition: scale .45s ease-out calc(var(--i) * 110ms + 200ms); }
  .phases:not([data-seen]) .phase::before { scale: 0 1; }
  .phase { position: relative; padding-top: 44px; transition: opacity .5s ease-out calc(var(--i) * 110ms), translate .5s ease-out calc(var(--i) * 110ms); }
  .phases:not([data-seen]) .phase { opacity: 0; translate: 0 14px; }
  .dot {
    position: absolute; top: 0; left: 0; width: 30px; height: 30px; border-radius: 50%;
    display: grid; place-items: center; background: var(--bg); border: 2px solid var(--overlay2);
  }
  .done .dot { background: var(--pistachio); border-color: var(--pistachio); color: var(--bg); }
  .now .dot::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--pistachio); animation: pulse 2.4s ease-out infinite; }
  .dot svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
  .phase code { font-size: 13px; color: var(--subtext); }
  .phase b { display: block; margin-top: 2px; font-size: 15px; line-height: 1.35; font-weight: 700; color: var(--text-bright); }
  .phase small { display: block; margin-top: 6px; font-size: 13px; color: var(--subtext); }
  .phase:not(.done):not(.now) b { color: var(--text); }
  @keyframes pulse { 50% { opacity: .35; } }

  @media (max-width: 900px) {
    .approval { grid-template-columns: minmax(0, 1fr); }
    .phases { grid-template-columns: minmax(0, 1fr); gap: 0; }
    .phase:not(:last-child)::before { left: 14px; top: 30px; width: 2px; height: calc(100% - 30px); transform-origin: top center; }
    .phases:not([data-seen]) .phase::before { scale: 1 0; }
    .phase { padding: 0 0 28px 48px; }
    .phase:last-child { padding-bottom: 0; }
  }
</style>
