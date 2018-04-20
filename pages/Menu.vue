<template>
  <div class="container">
    <div class="icon-close-menu">
      <nuxt-link to="/home">
        <i class="fas fa-times"></i>
      </nuxt-link>
    </div>
    <div class="menu-list">
      <div class="item_menu"><nuxt-link to="/" >Home</nuxt-link></div>
      <div class="item_menu"><nuxt-link to="/about" >About</nuxt-link></div>
      <div class="item_menu"><nuxt-link  to="/work" >Work</nuxt-link></div>
      <div class="item_menu"><nuxt-link to="/partner" >Partner</nuxt-link></div>
      <div class="item_menu"><nuxt-link to="/awards" >Awards</nuxt-link></div>
    </div>
  </div>
</template>
<script>
    export default {
      asyncData() {
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve({})
          }, 1000)
        })
      },
        name: "menu",
      layout: 'menu',
      mounted () {
        this.$store.commit('REMOVE_LOADING');
      }
    }
</script>

<style scoped>
  body{
    background: #ffffff;
  }

</style>
