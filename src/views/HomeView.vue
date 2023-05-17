<template>
  <h3>Introduce tu nombre de usuario   | {{ username }}</h3>
  <input type="text" placeholder="Introduce tu nombre" v-model="username">
  <button @click="iniciar">Iniciar sesion</button>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
const username=ref();
const router=useRouter();
const iniciar=()=>{
  router.push({name:'about'});
}
</script>
<style>

</style>