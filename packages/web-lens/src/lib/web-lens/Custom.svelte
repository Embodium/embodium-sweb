<svelte:options tag="web-lens" />

<script lang="ts">
 import styles from "./custom.scss?inline";
 import { toggle_lens } from "$lib/toggle_lens";

 let cssKeep = "";
 const handler = (eventTarget?: Element) => {
   eventTarget?.addEventListener("toggle_lens", () => {
     toggle_lens();
   });
 }
</script>
<span style="display: none;" class={cssKeep}>It's a Hack to prevent svelte from omitting component-scoped styles. </span>
<slot name="header">
  <header class="header-root">Header</header>
</slot>
<slot>
  <main class="main-root">
    
  </main>
</slot>
<slot name="footer">
  <footer class="footer-root">Footer</footer>
</slot>

<style lang="scss">
 :host {
   min-height: 100%;
   min-width: 100%;
   display: flex;
   flex-direction: column;
   grid-template: auto 1fr auto / auto 1fr auto;
   position: absolute;
   top: 0;
   left: 0;
   background-color: yellow;
 }

 :host(.hidden), :host([hidden]) {
   display: none;
 }

 .header-root {
   
 }
</style>
