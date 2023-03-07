<script lang="ts" context="module">
 // Used to control mounting a strictly single instance of Web Lens.
 let mounted = false;
</script>

<script lang="ts">
 import "./Custom.svelte";
 import { onMount } from "svelte";
 import { lens_store } from "./store";
 import { init_api } from "./lens-api";

 let instance_mounted = false;
 
 const accessible = lens_store.accessible;
 
 onMount(() => {
   init_api();
   if(!mounted) {
     mounted = true;
     instance_mounted = true;
   } else {
     instance_mounted = false;
     console.log("[WebLensInit]", "Mount ignored as another instance is already mounted");
   }
 });
 
</script>

{#if instance_mounted}
  <web-lens id="web-lens" class={!$accessible ? "hidden" : ""}>
    <slot></slot>
  </web-lens> 
{/if}
