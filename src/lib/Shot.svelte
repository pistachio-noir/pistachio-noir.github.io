<script>
  import { img } from './base.js';
  import { reveal } from './reveal.js';

  let { src, w, h, alt, caption, class: cls = '' } = $props();
</script>

<figure class={cls}>
  <div class="shot rise" use:reveal><img src={img(src)} width={w} height={h} loading="lazy" {alt}></div>
  {#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>

<style>
  .shot { border: 1px solid var(--overlay2); border-radius: var(--panel-r); overflow: hidden; background: var(--bg-alt); }
  .shot img { width: 100%; }
  figcaption { margin-top: 14px; font-size: 14px; line-height: 1.5; color: var(--subtext); max-width: 44rem; }
</style>
