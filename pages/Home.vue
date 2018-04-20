<template>
  <div class="container">
    <div class="home">
      <h1>
        WELLCOME
      </h1>
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
      mounted () {
        this.$store.commit('REMOVE_LOADING');
      },
        name: "home"
    }
</script>

<style scoped>

</style>
