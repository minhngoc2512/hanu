<template>
  <header class="header">
    <div class="logo_header">
      <nuxt-link to='/'>
        <svg id="ruya-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 390 90.89"><title>Logo Ruya Branding &amp;
          Digital Agency in Dubai</title>
          <defs>
            <style>.ruya-svg-logo {
              fill: url(#linear-gradient);
            }</style>
            <linearGradient id="linear-gradient" x1="304.03" y1="157.83" x2="76.38" y2="-69.82"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#a8624a"></stop>
              <stop offset="0.22" stop-color="#ac664d"></stop>
              <stop offset="0.43" stop-color="#b67157"></stop>
              <stop offset="0.64" stop-color="#c88467"></stop>
              <stop offset="0.84" stop-color="#e19f7d"></stop>
              <stop offset="1" stop-color="#f9b993"></stop>
            </linearGradient>
          </defs>
          <path class="ruya-svg-logo"
                d="M369,92.82H342.51L315.45,35.46,288.27,92.82h-7.85L322.68,3.65h3.58ZM269.25,3.65l-19,40.08L231.15,3.65H204.47l24.3,51.52-.09,37.65h24.71L253.23,54,277.09,3.65Zm99.38,12.18A12.19,12.19,0,0,0,393,15.78a12.19,12.19,0,0,0-24.37.05m23-.05a10.81,10.81,0,1,1-21.62.05,10.81,10.81,0,1,1,21.62-.05M376.81,22h1.48V16.33h2.19l4,5.71h1.7l-4-5.87c1.93-.28,3.3-1.37,3.3-3.46v-.06c0-2.41-1.86-3.61-4.61-3.61h-4Zm1.48-6.91V10.29h2.58c2,0,3,.66,3,2.41v.05c0,1.65-.93,2.36-3,2.36ZM27.61,47.49l6.59.2c9.9-.57,18.25-3.69,18.25-20.5,0-5.49-1-9.59-2.87-12.64-2.52-3.08-6.44-4.68-12-4.92l-10,0Zm0,45.42H3V3.56H35.22c22.42,0,41.12,4,41.12,23.38,0,11.13-6.11,19.25-17.82,23.33l-.25.08L87.94,92.9H64.17L38.62,54.22a2,2,0,0,0-1.27-.66H27.61Zm117.08,1.42-.1.12c.54,0,1-.06,1.57-.07s1.2.07,1.83.07c22.64,0,32.26-13.89,32.26-36.31V3.56h-6.92V57.91c0,18-6.71,27.62-20.36,28.39-11.22-.76-17.91-9-17.91-26.21V15c0-.57,0-1.07,0-1.59V3.56H110.57V59.22c0,21.29,11.87,34,34.12,35.11"
                transform="translate(-3 -3.56)"></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="menu-header">
      <nuxt-link to="/menu">
      <button>Menu <i class="fas fa-align-justify"></i></button>
      </nuxt-link>

    </div>
  </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
