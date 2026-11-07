<script>
  let { title, children } = $props();
</script>

<div class="feat">
  <h3>{title}</h3>
  <p>{@render children()}</p>
</div>
