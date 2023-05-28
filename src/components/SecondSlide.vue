<template>
    <div class="wrapper">
        <img src="../assets/chameleon.jpg" alt="Chameleon">
        <HappyBirthday class="positioning"/>
        <div v-for="item in 3" :key="item" :id="`oval-${item}`" class="ovals"></div>
    </div>
</template>

<script>
import HappyBirthday from './HappyBirthday.vue'

export default {
    name: 'SecondSlide',
    components: {HappyBirthday}
}
</script>

<style scoped>
.positioning {
    top: 3.5%;
    left: 1%;
}
#oval-1 {
    width: 10px;
    height: 9px;
    top: 26%;
    left: 15%;
}
#oval-2 {
    width: 20px;
    height: 12px;
    top: 21%;
    left: 11%;
}
#oval-3 {
    width: 35px;
    height: 16px;
    top: 14%;
    left: 5.95%;
}
</style>