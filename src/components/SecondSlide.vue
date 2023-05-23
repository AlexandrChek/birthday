<template>
    <img src="../assets/chameleon.jpg" alt="Chameleon">
    <p>С Днём Рождения, Наташа!!!</p>
    <div v-for="item in 3" :key="item" :id="`oval-${item}`" class="ovals"></div>
</template>

<script>
export default {
    name: 'SecondSlide'
}
</script>

<style scoped>
img {
  max-height: calc(100vh - 40px);
  max-width: 100%;
}
p {
    margin: 0;
    padding: 19px 4px;
    position: absolute;
    top: 20px;
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
    top: calc(20px + 32vw);
    left: 15vw;
}
#oval-2 {
    width: 20px;
    height: 12px;
    top: calc(20px + 25vw);
    left: 11vw;
}
#oval-3 {
    width: 35px;
    height: 16px;
    top: calc(20px + 16.4vw);
    left: 5.95vw;
}

@media(min-width: 640px) {
    p {
        top: 27px;
        left: calc(((100vw - 640px) / 2) + 20px);
    }
    #oval-1 {
        top: 238px;
        left: calc(((100vw - 640px) / 2) + 110px);
        width: 14px;
        height: 10px;
    }
    #oval-2 {
        top: 184px;
        left: calc(((100vw - 640px) / 2) + 85px);
        width: 28px;
        height: 15px;
    }
    #oval-3 {
        top: 114px;
        left: calc(((100vw - 640px) / 2) + 57px);
        width: 41px;
        height: 19px;
    }
}
</style>