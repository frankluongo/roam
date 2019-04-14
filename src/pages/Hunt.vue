<template>
  <Layout>
    <main class="layout">
      <section class="single-hunt">
        <img class="single-hunt-image" :src="$static.hunt.data[0].huntLargePhotoUrl" :alt="$static.hunt.data[0].name">
        <div class="single-hunt-info">
          <h1 class="single-hunt-info__title">
            {{ $static.hunt.data[0].name }} <span class="single-hunt-info__title-divider">|</span> <small>{{ $static.hunt.data[0].city }}, {{ $static.hunt.data[0].state}}</small>
          </h1>
          <p class="single-hunt-info__copy">
            {{ $static.hunt.data[0].longDescription }}
          </p>
          <EmailSignup classes="single-hunt-email-form" />
        </div>
      </section>
    </main>
  </Layout>
</template>

<static-query>
  query {
    hunt(id: "47132e214cf25eb6109a0787b68d6b9f") {
      data {
        name
        huntExtraLargePhotoUrl
        huntLargePhotoUrl
        huntMediumPhotoUrl
        city
        description
        lrLongDescription
        longDescription
        state
        huntType
        starRating
      }
    }
  }
</static-query>

<script>
import EmailSignup from '../components/EmailSignup.vue';

export default {
  data() {
    return {
      email: "name@example.com",
      firstName: "John",
      lastName: "Smith",
    }
  },
  components: {
    EmailSignup
  },
  methods: {
    submitEmail (event) {
      event.preventDefault();
      console.log(this.email);
    }
  },
}
</script>

<style lang="scss">

  .single-hunt {
    @include breakpoint (medium) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 60fr 40fr;
    }
  }

  .single-hunt-image {
    display: block;
    max-width: 100%;
  }

  .single-hunt-info {
    &__title {
      display: block;
      margin-bottom: 1rem;

      font-family: League Gothic, 'Roboto Condensed', sans-serif;
      font-weight: 400;
      font-size: 2em;
      letter-spacing: 1px;
      line-height: 1.2;
      text-transform: uppercase;

      @include breakpoint (medium down) {
        margin-top: 1rem;
      }

      @include breakpoint (medium) {
        display: flex;
        align-items: center;
      }

      small {
        color: $gray-2;
        font-size: 0.75em;

        @include breakpoint (xsmall only) {
          display: block;
        }
      }
    }

    &__title-divider {
      display: inline-block;
      margin-left: 0.5rem;
      margin-right: 0.5rem;

      color: $gray-1;

      @include breakpoint (xsmall only) {
        display: none;
      }
    }
  }

  .single-hunt-email-form {
    margin-top: 1rem;
  }
</style>
