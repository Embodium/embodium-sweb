<script lang="ts">
 import "./Custom.svelte";
 import { onMount } from "svelte";
 import { lens_store } from "./store";
 
 let mounted = false;
 
 const onClose = () => {
   lens_store.accessible.set(false);
 };

 const accessible = lens_store.accessible;

 const handle_keyup = (event: KeyboardEvent) => {
   if ((event.type ?? "").trim() === "keyup" && (event.key ?? "").trim().toLowerCase() === "escape") {
     $accessible = false;
   }
 }

 const on_close = () => {
   $accessible = false;
 }
 
 onMount(() => {
   mounted = true;

   (globalThis as any)['embodium'] = {
        ...(globalThis as any)['embodium'],
        ['web-lens']: {
            ...(globalThis as any)['embodium']?.['web-lens'],
            toggle_lens: () => {
	      $accessible = !$accessible;
            }
        }
   }
 });
 
</script>

<svelte:body on:keyup={handle_keyup} />

{#if mounted}
  <web-lens id="web-lens" class={!$accessible ? "hidden" : ""} on:close={on_close}  on:keyup={handle_keyup}>
    <slot></slot>
  </web-lens> 
{/if}
