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
      data(){
        return{
          audio_bg:null
        }
      },
      mounted () {
        this.audio_bg = new Audio("/2018/02/bg.mp3");
        this.audio_bg.play();
        this.$store.commit('REMOVE_LOADING');
      },
      destroyed(){
        this.audio_bg.pause();
        this.audio_bg.currentTime = 0;
      },
        name: "home"
    }
</script>

<style scoped>

</style>
