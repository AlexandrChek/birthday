<template>
    <img src="../assets/tiger.png" alt="Tiger">
    <p>С Днём Рождения, Наташа!!!</p>
    <div v-for="item in 3" :key="item" :id="`oval-${item}`" class="ovals"></div>
</template>

<script>
export default {
    name: 'FirstSlide'
}
</script>

<style scoped>
img {
  max-height: calc(100vh - 40px);
  max-width: 100%;
}
p {
    margin: 0;
    padding: 17px 4px;
    position: absolute;
    top: calc(20px + 1vw);
    left: 3vw;
    background-color: white;
    color: red;
    border-radius: 100%;
    font-size: 23px;
    font-weight: bold;
}
.ovals {
    background-color: white;
    border-radius: 50%;
    position: absolute;
}
#oval-1 {
    width: 10px;
    height: 9px;
    top: calc(20px + 40vw);
    left: 22vw;
}
#oval-2 {
    width: 20px;
    height: 15px;
    top: calc(20px + 31vw);
    left: 17vw;
}
#oval-3 {
    width: 35px;
    height: 20px;
    top: calc(20px + 19.1vw);
    left: 12vw;
}

@media(min-width: 565px) {
    p {
        top: 29px;
        left: calc(((100vw - 565px) / 2) + 20px);
    }
    #oval-1 {
        top: 245px;
        left: calc(((100vw - 565px) / 2) + 130px);
    }
    #oval-2 {
        top: 195px;
        left: calc(((100vw - 565px) / 2) + 97px);
    }
    #oval-3 {
        top: 127px;
        left: calc(((100vw - 565px) / 2) + 68px);
    }
}
</style>