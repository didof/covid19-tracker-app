<script context="module">
  import request from "../data/request";

  export async function preload() {
    try {
      const usStats = await request.usStats();

      return { usStats };
    } catch (err) {
      this.error(
        500,
        "There was a problem with the API, please try again in 5 minutes."
      );
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let usStats;
</script>

<svelte:head>
  <title>Covid-19 Tracker</title>
</svelte:head>
<section class="hero is-success is-bold is-small">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Covid-19 Tracker App</h1>
      <h2 class="subtitle">Welcome</h2>
    </div>
  </div>
</section>
<CovidStat {...usStats} />
<CovidChart />
<TableContainer />
