<template>
  <form @submit="submitEmail" :class="getClasses()">
    <div class="form-control email-signup-form__heading">
      <h3>Sign Up For Our Mailing List</h3>
      <p>For a spin on our prize wheel</p>
    </div>
    <div class="form-control form-control--split">
      <div class="form-element">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="First Name" v-model="firstName" />
      </div>
      <div class="form-element">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Lasy Name" v-model="lastName" />
      </div>
    </div>
    <div class="form-control form-control--full">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="name@example.com" v-model="email" />
    </div>
    <div class="form-control form-control--full">
      <input @click="showModal = true" type="submit" value="Submit">
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
    </Modal>
  </form>
</template>

<script>
import Modal from './Modal';
import axios from 'axios';

export default {
  data() {
    return {
      email: "name@example.com",
      firstName: "John",
      lastName: "Smith",
      showModal: false,
      apiURL: 'https://www.letsroam.com/api/v1/newsletter/subscribe_no_drip',
    }
  },
  components: {
    Modal
  },
  methods: {
    submitEmail (event) {
      event.preventDefault();
      axios.post(this.apiURL, {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email
      })
      .then((res) => {
        console.log(res);
      })
    },
    getClasses () {
      return `email-signup-form form ${this.$attrs.classes}`
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .email-signup-form {
    padding: 1rem;

    border: 1px solid $gray-1;
    border-radius: 4px;

    &__heading {
      h3 {
        @include league-gothic;
        font-size: 1.5em;
      }
    }
  }

  .form-control {
    display: grid;

    & + & {
      margin-top: 1rem;
    }

    &--split {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }

  .form {
    input {
      display: block;
      width: 100%;
      min-height: 2rem;
      padding: 0 0 0 0.25rem;

      font-size: 0.875rem;

      border: 1px solid $gray-1;

      &[type=submit] {
        color: #ffffff;
        @include league-gothic;
        font-size: 1em;
        font-weight: 900;

        padding: 0.5rem 1rem;

        background-color: $orange;
        border: 1px solid $orange;
        -webkit-appearance: none;
      }
    }

    label {
      display: block;
      margin-bottom: 0.5rem;

      font-size: 1em;
      @include league-gothic;
    }
  }
</style>
