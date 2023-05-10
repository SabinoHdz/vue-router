<template>
  <router-link :to="{name:'home'}">Home</router-link>
  <router-link :to="{name:'session'}">Session</router-link>
  <router-link :to="{name:'about'}">About</router-link>
  <router-link :to="{name:'chat'}">Chat</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
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
