<script>
  export let status;
  export let error;
</script>

<style>
  .container {
    margin: 20px;
  }
</style>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status === 404}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <h1>Page not found</h1>

      </div>
      <div class="message-body">
        <p>{error.message}</p>
        <a href="/">Click here</a>
        to go back
      </div>
    </article>
  </div>
{:else}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <h1>Error</h1>

      </div>
      <div class="message-body">
        <p>{error.message}</p>
        <a href="/">Click here</a>
        to go back
      </div>
    </article>
  </div>

{/if}
