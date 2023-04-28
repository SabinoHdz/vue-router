<template>
  <h3>Introduce tu nombre de usuario   | {{ username }}</h3>
  <input type="text" placeholder="Introduce tu nombre" v-model="username">
</template>

<script>
export default {
data(){
    return{
        username:null,
    }
}
}
</script>

<style>

</style>