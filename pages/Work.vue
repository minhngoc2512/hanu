<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">AL AERHYAH</h1>
      <div class="content-detail-about">
        <div class="content-about-1">
          <p> Life well lived</p>
        </div>
        <div class="content-about-2">
          <p>
            Al Erkyah City represents an integrated community, with wellbeing at its heart. From open spaces to
            innovatively designed residences, Al Erkyah City will transform people’s lives.
          </p><img src="/images/2-3.jpg" height="734" width="1366"/>
          <img style="margin-top: 40px" src="/images/3-3.jpg"
               height="734" width="1366"/>
          <img style="margin-top: 40px" src="/images/5-2.jpg"/>

        </div>


      </div>
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
    name: "work",
    mounted () {
      this.$store.commit('REMOVE_LOADING');
    },
  }
</script>

<style scoped>

</style>
