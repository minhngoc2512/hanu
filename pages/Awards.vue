<template>
  <div class="container">
    <div class="about-content">
      <h1 class="title-about">AWARDS</h1>
      <div class="content-detail-about">
        <div class="content-about-1">
          <p>We love awards, especially if we get them.</p>
        </div>
        <div class="content-about-2 ">
          <div class="awards-content">
            <div class="awards-col-1">
              2016
            </div>
            <div class="awards-col-2">
              <div class="item-awards-col-2">
                FWA Of The Day, FWA. Ruya Digital
              </div>
              <div class="item-awards-col-2">
                Site of the Day, Awwwards. Ruya Digital
              </div>
              <div class="item-awards-col-2">
                Developer, Awwwards. Ruya Digital
              </div>
              <div class="item-awards-col-2">
                Honorable Mention, Awwwards. Ruya Digital
              </div>
              <div class="item-awards-col-2">
                Website of the day, Cssda. Ruya Digital
              </div>
            </div>
          </div>
          <div class="awards-content">
            <div class="awards-col-1">
              2017
            </div>
            <div class="awards-col-2">
              <div class="item-awards-col-2">
                Studio of the Year, Nominee, Awwwards. Ruya
              </div>
              <div class="item-awards-col-2">
                Site of the Day, Awwwards. Ruya Corporate Site
              </div>
              <div class="item-awards-col-2">
                Website of the day, Cssda. Ruya Corporate Site
              </div>
              <div class="item-awards-col-2">
                Honorable Mention, Awwwards. Richland
              </div>
              <div class="item-awards-col-2">
                Special Kudos, Cssda. Richland
              </div>
            </div>
          </div>
          <div class="awards-content">
            <div class="awards-col-1">
              2018
            </div>
            <div class="awards-col-2">
              <div class="item-awards-col-2">
                Site of the Day, Awwwards. Al Erkyah City
              </div>
              <div class="item-awards-col-2">
                Canopus Winner, Vega Awards. Al Erkyah City
              </div>
              <div class="item-awards-col-2">
                Honorable Mention, Awwwards. Al Erkyah City
              </div>
              <div class="item-awards-col-2">
                Webby Honoree, The Webby Awards. Al Erkyah City, 2016
              </div>
              <div class="item-awards-col-2">
                Website of the Day, Cssda. Al Erkyah City, 2016
              </div>
            </div>
          </div>

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
        name: "awards",
      mounted () {
        this.$store.commit('REMOVE_LOADING');
      },
    }
</script>

<style scoped>

</style>
