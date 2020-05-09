<script context="module">
  import stateNames from "../data/stateNames";

  export async function preload(page) {
    const state = page.params["state"];
    if (stateNames.find(s => s.abbreviation === state)) {
      return { state: page.params["state"] };
    } else {
      this.error(404, "State Not Found");
      return
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let state;
</script>

<svelte:head>
  <title>About Covid-19 in {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>{state}</h1>
  </div>
</div>
<CovidStat />
<CovidChart />
