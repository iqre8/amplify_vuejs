<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <amplify-authenticator>
      <amplify-sign-out></amplify-sign-out>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </amplify-authenticator>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
