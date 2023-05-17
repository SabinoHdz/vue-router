<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chat/${chat.id}`">
          {{ chat.name }}
        </router-link>
      </div>
    </aside>
    <article>
      <router-view></router-view>
      <!-- Mensajes
        <p>
          {{ this.$route.params.chatId }}
        </p> -->
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: []
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (val) => {
        console.log('update params ', val)
        this.chats = [{ id: 1, name: 'Juan' },
        { id: 2, name: 'Ximena' },
        { id: 3, name: 'Luz' },
        { id: 4, name: 'Carlos' },
        { id: 5, name: 'Martin' }]
      }, { immediate: true }
    )
  },
}
</script>

<style></style>