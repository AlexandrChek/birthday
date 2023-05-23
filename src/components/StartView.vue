<template>
  <video controls @ended="endReport">
    <source src="../assets/firework.mp4" type="video/mp4">
  </video>
  <p>С Днём Рождения, Наташа!!!</p>
</template>

<script>
export default {
  name: 'StartView',
  methods: {
    endReport() {
      this.$emit('videoEnded')
    }
  }
}
</script>

<style scoped>
video {
  max-height: calc(100vh - 40px);
  max-width: 100%;
}
p {
  font-size: 28.5px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 40px;
  left: calc((100vw - 375px) / 2);
  animation: flicker 4s infinite;
}

@keyframes flicker {
  0% {color: red; transform: rotate(0deg);}
  5% {color: red;}
  15% {color: orange;}
  25% {transform: rotate(5deg);}
  30% {color: yellow;}
  45% {color: greenyellow;}
  50% {transform: rotate(0deg);}
  60% {color: blue;}
  75% {color: rgb(126, 10, 180); transform: rotate(-5deg);}
  90% {color: pink;}
  100% {transform: rotate(0deg);}
}
</style>
