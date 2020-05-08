<script>
  export let segment;
  let isOpen = false;
  const toggleNav = () => {
    isOpen = !isOpen;
  };
</script>

<style>
  @media (min-width: 769px) {
    nav {
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="logo.jpg" alt="virus" />
    </a>

    <span
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      on:click={toggleNav}
      class:is-active={isOpen}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      <a class="navbar-item" href="/" class:is-active={segment === undefined}>
        Home
      </a>

      <a
        class="navbar-item"
        href="/about"
        class:is-active={segment === 'about'}>
        About
      </a>

    </div>

  </div>
</nav>
