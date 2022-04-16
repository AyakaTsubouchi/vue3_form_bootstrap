<template>

  <Header/>
  <Form/>
</template>

<script>
import Header from './components/MainHeader.vue';
import Form from './components/RegisterForm.vue';

export default {
  name: 'App',
  components: {
    Header,Form
  }
}
</script>

<style lang="scss">
 @import "./scss/style.scss";
#app {
  font-family: "Recife", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
