<script>
  import { img } from './base.js';

  let { icon, id, title, status, children } = $props();
</script>

<div>
  <img class="app-icon" src={img(icon)} alt="" width="104" height="104">
  {#if status}<p class="status">{status}</p>{/if}
  <h2 {id}>{title}</h2>
  <p class="lede">{@render children()}</p>
</div>

<style>
  .app-icon { width: clamp(64px, 8vw, 104px); height: auto; margin-bottom: 28px; }
  .status {
    display: inline-flex; align-items: center; gap: 10px; min-height: 36px; padding: 0 16px; margin-bottom: 20px;
    border-radius: 999px; background: var(--overlay); color: var(--text); font-size: 14px; font-weight: 700;
  }
  /* PDC's own state language: a pulsing pistachio dot means working. */
  .status::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--pistachio); animation: pulse 2.4s ease-out infinite; }
  @keyframes pulse { 50% { opacity: .35; } }
</style>
