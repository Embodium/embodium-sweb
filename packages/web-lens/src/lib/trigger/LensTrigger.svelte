<script lang="ts">
 import { lens_api } from '../web-lens/lens-api';
 export let override_icon = false;

 let processing_command = false;
 let key_maps = {};
 const command_maps = {
   "Trigger Lens": {
     "key_maps": [17, 76],
     "command": () => {
       console.log('Handling Command', "Trigger Lens");
       lens_api.toggle_lens();  
     }
   }
 }
 
 const match_key_map = (command_desc: { key_maps: number[], command: Function }) => {
   if (command_desc.key_maps.every((k) => key_maps[k] && true)) {
     return command_desc.command;
   }
 }
 
 const handle_key_down = (event: KeyboardEvent) => {
   if (!processing_command) {
     key_maps[event.keyCode] = true;
     
     // Checking for a command
     const matched = Object.values(command_maps)
			   .filter(command_desc =>  match_key_map(command_desc))
			   .filter(x => x);
     if (matched.length) {
       processing_command = true;
       key_maps = {};
       try {
	 matched[0].command();
       } catch (e) {
       }
     }
     processing_command = false;
   }
 }
</script>

<svelte:body on:keydown={handle_key_down} />

<button class="trigger-container"
	on:click={lens_api.toggle_lens}>
  {#if override_icon}
    <slot />
  {:else}
    <i class="trigger-icon">&#128269;</i>
  {/if}
</button>

<style lang="scss">
 .trigger-container {
   background: transparent;
   border: none;
   /* outline: none; */
 }
 
 .trigger-icon {
   font-size: xx-large;
   cursor: pointer;
   border-style: solid;
   border-radius: 50%;
   display: inline-block;
   padding: 0.5rem;
 }
</style>
