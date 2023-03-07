<svelte:options tag="web-lens" />

<script lang="ts">
 import { onMount } from "svelte";
 import { lens_store } from "./store";
 import { lens_api } from "./lens-api";

 let cssKeep = "";
 let mounted = false;
 const handler = (eventTarget?: Element) => {
   eventTarget?.addEventListener("toggle_lens", () => {
     lens_api.toggle_lens();
   });
 }

 const onClose = () => {
   lens_store.accessible.set(false);
 };

 const accessible = lens_store.accessible;

 const handle_keyup = (event: KeyboardEvent) => {
   if ((event.type ?? "").trim() === "keyup" && (event.key ?? "").trim().toLowerCase() === "escape") {
     $accessible = false;
   }
 }
 
 const handle_message = (message: MessageEvent) => {
   console.log("Message Received");
   if(message.data?.name?.trim().toLowerCase() === "toggle_lens") {
     lens_api.toggle_lens();
   }
 }
 
 // const setup_toggle = () => {
 //   (globalThis as any)['embodium'] = {
 //     ...(globalThis as any)['embodium'],
 //     ['web-lens']: {
 //       ...(globalThis as any)['embodium']?.['web-lens'],
 //       toggle_lens: () => {
 // 	 $accessible = !$accessible;
 //       }
 //     }
 //   }
 // };
 // 
 // onMount(() => {
 //   setup_toggle();
 // });
 // 
</script>

<svelte:window on:message={handle_message}  />
<svelte:body on:keyup={handle_keyup} />

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
