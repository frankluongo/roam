<template>
  <div class="wrapper">
    <header class="header-wrapper">
      <section class="layout header-content">
        <g-link to="/">
          <g-image alt="Let's Roam" src="~/assets/images/lets_roam_logo.png" width="90" />
        </g-link>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/hunt">Single Hunt</g-link>
        </nav>
      </section>
    </header>
    <slot/>
    <footer class="footer-wrapper">
      <section class="layout footer-content">

      </section>
    </footer>
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style lang="scss">

  .layout {
    max-width: $max-width;
    margin: 0 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    @include breakpoint (medium) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .header-wrapper {
    margin-bottom: 2em;
    height: 80px;

    border-bottom: 1px solid $gray-1;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  .footer-wrapper {
    margin-top: 2em;
    padding: 2em 0;

    background-color: $orange;
  }

  .nav {
    &__link {
      color: $orange;
      font-size: 0.875rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;

      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
