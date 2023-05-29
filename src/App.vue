<template>
  <StartView v-if="slide === 1" @videoEnded="goNext"/>
  <div class="big-wrapper">
    <FirstSlide v-if="slide === 2"/>
    <SecondSlide v-if="slide === 3"/>
    <ThirdSlide v-if="slide === 4"/>
    <FourthSlide v-if="slide === 5"/>
  </div>
</template>

<script>
import StartView from './components/StartView.vue'
import FirstSlide from './components/FirstSlide.vue'
import SecondSlide from './components/SecondSlide.vue'
import ThirdSlide from './components/ThirdSlide.vue'
import FourthSlide from './components/FourthSlide.vue'

export default {
  name: 'App',
  components: {
    StartView,
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    FourthSlide
  },
  data() {
    return {
      slide: 5
    }
  },
  methods: {
    goNext() {
      this.slide++
      let myTimer = setInterval(() => {
        this.slide++
        if(this.slide === 5) {
          clearInterval(myTimer)
        }
      }, 7000)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  text-align: center;
  background: radial-gradient(rgb(230, 70, 190), rgb(65, 15, 107));
  padding: 20px 2%;
  height: calc(100vh - 40px);
}
.big-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.wrapper {
    position: relative;
    display: flex;
}
img {
  max-height: calc(100vh - 40px);
  max-width: 100%;
}
.ovals {
    background-color: white;
    border-radius: 50%;
    position: absolute;
}

@media(min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
  #app {
    padding: 0;
    height: 100vh;
  }
  img {
    max-height: 100vh;
  }
}
</style>
