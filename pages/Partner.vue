<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">PARTNERS</h1>
      <div class="content-detail-about">
        <div class="content-about-1">
          <p> Life well lived</p>
        </div>
        <div class="content-about-2">
          <p>
            Al Erkyah City represents an integrated community, with wellbeing at its heart. From open spaces to
            innovatively designed residences, Al Erkyah City will transform people’s lives.
          </p>


        </div>


      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "partner",
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
      })
    },
    mounted() {
      this.$store.commit('REMOVE_LOADING');
    }
  }
</script>

<style scoped>

</style>
