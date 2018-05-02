<template>
  <div class="container">
    <div class="icon-close-menu">
      <nuxt-link to="/home">
        <i class="fas fa-times"></i>
      </nuxt-link>
    </div>
    <div class="menu-list">
      <div class="item_menu">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div data-id="1" class="item_menu">
        <nuxt-link to="/about">About</nuxt-link>
      </div>
      <div data-id="2" class="item_menu">
        <nuxt-link to="/work">Work</nuxt-link>
      </div>
      <div data-id="3" class="item_menu">
        <nuxt-link to="/partner">Partner</nuxt-link>
      </div>
      <div data-id="4" class="item_menu">
        <nuxt-link to="/awards">Awards</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        audio_1: null,
        audio_2: null,
        audio_3: null,
        audio_4: null,

      }
    },
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
      })
    },
    name: "menu",
    layout: 'menu',
    mounted() {
      let audio_1 = new Audio("/2018/02/hover1.mp3");
      let audio_2 = new Audio("/2018/02/hover2.mp3");
      let audio_3 = new Audio("/2018/02/hover3.mp3");
      let audio_4 = new Audio("/2018/02/hover4.mp3");
      $(".item_menu").hover(function () {
        let data_id = $(this).attr('data-id');
        if (data_id == 1) audio_1.play();
        if (data_id == 2) audio_2.play();
        if (data_id == 3) audio_3.play();
        if (data_id == 4) audio_4.play();
      }, function () {
        let data_id = $(this).attr('data-id');
        if (data_id == 1) {
          audio_1.pause();
          audio_1.currentTime = 0;
        }
        if (data_id == 2) {
          audio_2.pause();
          audio_2.currentTime = 0;
        }
        if (data_id == 3) {
          audio_3.pause();
          audio_3.currentTime = 0;
        }
        if (data_id == 4) {
          audio_4.pause();
          audio_4.currentTime = 0;
        }
      });

      this.$store.commit('REMOVE_LOADING');
    }
  }
</script>

<style scoped>
  body {
    background: #ffffff;
  }

</style>
