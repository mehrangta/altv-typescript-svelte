<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import { onMount } from 'svelte';
    import { alt } from './altv';

  let show:boolean;
  let car = "bmx";

  onMount(()=>{
    show = false;
  })
  alt.on("WebView:Toggle:Visibility",(val)=>{
    show = val;
  })

  function spawnCar(){
    alt.emit("spawnCar", car)
  }
</script>

{#if show}
<main>
  <div class="card">
    <Counter />
  </div>
  <input type="text" bind:value={car}>
  <button on:click={spawnCar}>spawn</button>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn morer
  </p>
</main>
{/if}
<style>

  .read-the-docs {
    color: #888;
  }
</style>
