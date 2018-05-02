<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">ABOUT</h1>
         <div id="progress-bar" class="content-detail-about">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="`width:0%`">
            0%
          </div>
        </div>
        <div>
          <center>
          <button @mousedown="playAudioHold()" @mouseup="stopAudio()" @mouseleave="stopAudio()"  class="button-hold"></button>
          <h3 style="text-align:center;font-size:20px;color:white">Hold Button</h3>
          </center>
        </div>
      </div>
      <div id="content-page" style="display:none" class="content-detail-about">
        <div class="content-about-1">
          <p>Dress up your business projects</p>
        </div>
        <div class="content-about-2">
          <p>
            We are a web design and development studio based in Granada-Dubai. We believe in the interactive
            experience being like a powerful channel sending your Brand's message forward to achieve your goal.
          </p>
          <img style="width:100%" src="/images/1-3.jpg" height="734" width="1366"/>
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
      data(){
            return{
              value_progress:0,
              audio: null
            }
      },

        name: "awards",
      mounted () {
        this.audio = new Audio('/2018/02/action.mp3');
        let audio_bg = new Audio("/2018/02/about.mp3");
        audio_bg.play();
        this.$store.commit('REMOVE_LOADING');
        var timeoutId =0;

        var value = 0;
        $('.button-hold').on('mousedown', function() {

            timeoutId = setInterval(function(){
              value +=3;
          $('.progress-bar').attr("aria-valuenow", value);
          $('.progress-bar').css('width',value+"%");
            $('.progress-bar').html(value+'%');
            if(value>=100) {
            clearTimeout(timeoutId) ;
            $("#progress-bar").css("display","none") ;
            $("#content-page").css("display","block") ;
            }

            }, 100);
        }).on('mouseup mouseleave', function() {
            clearTimeout(timeoutId);
                              value=0;
        $('.progress-bar').attr("aria-valuenow", 0);
          $('.progress-bar').css('width',value+"%");
           $('.progress-bar').html(value+'%');

        });
      },
      methods:{
          changeValue(value){
          this.value_progress = value
        }, playAudioHold() {
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
    .button-hold{
      background: transparent;
      border: 2px solid white;
      border-radius: 30px;
      height: 60px;
      width: 60px;
    }
    .button-hold:hover{
      background: white;
    }
</style>
