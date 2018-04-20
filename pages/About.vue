<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">ABOUT</h1>
      <div class="content-detail-about">
        <div class="content-about-1">
          <p>Dress up your business projects</p>
        </div>
        <div class="content-about-2">
          <p>
            We are a web design and development studio based in Granada-Dubai. We believe in the interactive
            experience being like a powerful channel sending your Brand's message forward to achieve your goal.
          </p>
          <img src="/images/1-3.jpg" height="734" width="1366"/>
          <img src="/images/IMG_3039.jpg"
               height="700" width="488" style="margin-top: 40px"/>
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
        name: "about",
      mounted () {
        this.$store.commit('REMOVE_LOADING');
      },
    }
</script>

<style scoped>

</style>
