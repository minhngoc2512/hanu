<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">PARTNERS</h1>
      <div id="progress-bar" class="content-detail-about">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
               :style="`width:0%`">
            0%
          </div>
        </div>
        <div>
          <center>
            <button @mousedown="playAudioHold()" @mouseup="stopAudio()" @mouseleave="stopAudio()"
                    class="button-hold"></button>
            <h3 style="text-align:center;font-size:20px;color:white">Hold Button</h3>
          </center>
        </div>
      </div>
      <div id="content-page" style="display:none" class="content-detail-about">
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
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
      })
    },
    data() {
      return {
        value_progress: 0,
        audio: null
      }
    },

    name: "awards",
    mounted() {
      let audio_bg = new Audio("/2018/02/partners.mp3");
      audio_bg.play();
      this.audio = new Audio('/2018/02/action.mp3');
      this.$store.commit('REMOVE_LOADING');
      var timeoutId = 0;

      var value = 0;
      $('.button-hold').on('mousedown', function () {

        timeoutId = setInterval(function () {
          value += 3;
          $('.progress-bar').attr("aria-valuenow", value);
          $('.progress-bar').css('width', value + "%");
          $('.progress-bar').html(value + '%');
          if (value >= 100) {
            clearTimeout(timeoutId);
            $("#progress-bar").css("display", "none");
            $("#content-page").css("display", "block");
          }

        }, 100);
      }).on('mouseup mouseleave', function () {
        clearTimeout(timeoutId);
        value = 0;
        $('.progress-bar').attr("aria-valuenow", 0);
        $('.progress-bar').css('width', value + "%");
        $('.progress-bar').html(value + '%');

      });
    },
    methods: {
      changeValue(value) {
        this.value_progress = value
      },
      playAudioHold() {
        this.audio.play();
      },
      stopAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    }
  }
</script>

<style scoped>
  .button-hold {
    background: transparent;
    border: 2px solid white;
    border-radius: 30px;
    height: 60px;
    width: 60px;
  }

  .button-hold:hover {
    background: white;
  }
</style>
