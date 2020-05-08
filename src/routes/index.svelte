<svelte:head>
  <title>Covid-19 Tracker</title>
</svelte:head>

<script>
  import CovidStat from '../components/CovidStat.svelte'
  import CovidChart from '../components/CovidChart.svelte'
  import TableContainer from '../components/TableContainer.svelte'
</script>

<section class="hero is-success is-bold is-small">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Covid-19 Tracker App</h1>
      <h2 class="subtitle">Welcome</h2>
    </div>
  </div>
</section>
<CovidStat />
<CovidChart />
<TableContainer />