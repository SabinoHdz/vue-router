<template>
  <h3>Introduce tu nombre de usuario   | {{ username }}</h3>
  <input type="text" placeholder="Introduce tu nombre" v-model="username">
  <button @click="iniciar">Iniciar sesion</button>
</template>

<script>
export default {
data(){
    return{
        username:null,
    }
},
methods:{
  iniciar(){
    this.$router.push({name:'chat',query:{
      varable:1,
    },
    //replace:true
  });
  }
}
}
</script>

<style>

</style>