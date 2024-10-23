<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div
  class="min-h-screen bg-stone-200 font-inconsolata-mono text-black dark:bg-gray-950 dark:text-gray-200"
>
  {@render children()}
</div>
