<template id="pane">
  <div class="container split">
  <div class="split__left">
    <!-- <AppVue /> -->
  </div>
  <div class="split__bar"></div>
  <div class="split__right"></div>
</div>
</template>

<script>
// import AppVue from '../App'
export default {
  components:{
    // AppVue
  }
//     name:"DesignPanel",
// const : bar = document.querySelector('.split__bar'),
// const : left = document.querySelector('.split__left'),
// let : mouse_is_down = false,
// const : bar.addEventListener('mousedown', (e) => {
//   mouse_is_down = true;
// }),
// var : document.addEventListener('mousemove', (e) => {
//   if (!mouse_is_down) return;

//   left.style.width = `${e.clientX}px`;
// }),

// var : document.addEventListener('mouseup', () => {
//   mouse_is_down = false;
// })
}
</script>

<style>


html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "PingFang TC", "Heiti TC", 微軟正黑體, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.split__left {
  width: 50%;
  background-color: lawngreen;
}

.split__right {
  flex: 1; 
  background-color: grey;
}

.split__bar {
  background-color: black;
  width: 15px;
  height: 100%;
  cursor: col-resize;
}

</style>