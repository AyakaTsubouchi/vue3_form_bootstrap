<template>
  <div>
    <input
      :value="firstName"
      placeholder="First Name"
      @input="(event) => (firstName = event.target.value)"
    />
    <input
      :value="lastName"
      placeholder="Last Name"
      @input="(event) => (lastName = event.target.value)"
    />
    <b-button @click="submit">Submit</b-button>
  </div>
</template>

<script>
import { store } from "@/store.js";
export default {
  data: () => {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    userName() {
      return store.userName;
    },
  },
  methods: {
    submit() {
      if (this.firstName === "" || this.lastName === "") {
        alert("Do not be shy :)");
      } else {
        store.getUserName(`${this.firstName} ${this.lastName}`);
        store.login();
        this.firstName = "";
        this.lastName = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin: 10px 5px;
  padding:5px;
}
button {
  margin-top: -3px;
}
</style>