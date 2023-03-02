<script lang="ts">
 import { lens_store } from "./store";

 let launcher_state = lens_store.launcher.state;
</script>

<header class="wl-header">
  <Launcher store={lens_store.launcher} />  
</header>
{#if $launcher_state === 'expanded'}
  <nav class="wl-nav"></nav>
  <main class="wl-main"></main>
  <aside class="wl-aside"></aside>
  <footer class="wl-footer"></footer>
{/if}
