<script context="module">
  import stateNames from "../data/stateNames";
  import request from "../data/request";

  export async function preload(page) {
    let { state } = page.params;

    //check if state is supported
    const checkState = (state, format) => {
      let stateFound = stateNames.find(s => s.name === state);
      if (stateFound === undefined) {
        console.log(`[checkState] ${state} not found, search in abbreviations`);
        stateFound = stateNames.find(s => s.abbreviation === state);
        if (stateFound === undefined) {
          console.log(`[checkState] ${state} not found, throw error`);
          this.error(
            404,
            `State "${state}" is not supported. Please check for some typo or try with the abbreviation form of the State.`
          );
          return;
        }
      }
      console.log(`[checkState] found:`, stateFound);
      return stateFound;
    };

    let stateFound = checkState(state);

    try {
      const response = await request.stateStats(stateFound.abbreviation);

      return { state: stateFound.name, stats: response };
    } catch (err) {
      this.error(500, "Something went wrong, please try again in 5 minutes.");
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let state;
  export let stats;
</script>

<svelte:head>
  <title>About Covid-19 in {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>{state}</h1>
  </div>
</div>
<CovidStat {...stats}/>
<CovidChart />
