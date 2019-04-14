<template>
  <Layout>
    <main class="layout">
      <ul class="homepage-hunts">
        <li class="homepage-hunt" v-for="item in $static.allHunt.edges[0].node.data" :key="item.key">
          <div class="homepage-hunt-content">
            <g-image :alt="item.name" :src="item.huntPhotoUrl" class="homepage-hunt-content__image" />
            <div class="homepage-hunt-content__text">
              <p class="homepage-hunt-content__name">{{ item.name }}</p>
              <p class="homepage-hunt-content__location">{{item.city}}, {{item.state}}</p>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </Layout>
</template>

<static-query>
  query {
    allHunt {
      edges {
        node {
          data {
            name
            key
            huntPhotoUrl
            city
            state
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  methods: {
    getHuntUrl(key) {
      return `/hunts/${key}`;
    },
    setTab () {
      console.log('Tab clicked!');
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.homepage-hunts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
  padding: 0;
  margin: 0;
}

.homepage-hunt {
  width: 100%;
  padding: 1rem 0;


  @include breakpoint (small down) {
    padding-top: 0;
  }

  @include breakpoint (small) {
    width: 33.3333%;

    padding: 1rem;
  }

  @include breakpoint (medium) {
    width: 25%;
  }
}

.homepage-hunt-content {
  height: 100%;

  padding: 1em 0.5em;
  border: 1px solid #eee;

  @include breakpoint (xsmall only) {
    padding: 0 0 0.5rem;
    border: none;
    border-bottom: 1px solid #eee;
  }

  &__name,
  &__location {
    @include breakpoint (small down) {
      width: 100%;

      font-size: 0.75rem;
    }
  }

  &__location {
    color: $gray-2;

    @include breakpoint (xsmall only) {
      font-size: 0.625rem;
      text-align: right;
    }
  }

  &__text {
    @include breakpoint (xsmall only) {
      display: flex;
      align-items: center;
    }

    @include breakpoint (small) {
      text-align: center;
    }
  }

  &__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    max-height: 110px;
    max-width: 100%;

    @include breakpoint (xsmall only) {
      display: none;
    }
  }
}
</style>
