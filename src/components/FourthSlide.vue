<template>
    <div class="wrapper">
        <img src="../assets/turtles.webp" alt="Turtles">
        <HappyBirthday class="positioning"/>
        <div v-for="item in 13" :key="item" :id="`oval-${item}`" class="ovals"></div>
    </div>
</template>

<script>
import HappyBirthday from './HappyBirthday.vue'

export default {
    name: 'FourthSlide',
    components: {HappyBirthday}
}
</script>

<style scoped>
.positioning {
    left: 1%;
}
#oval-1 {
    width: 10px;
    height: 9px;
    top: 22%;
    left: 9%;
}
#oval-2 {
    width: 20px;
    height: 10px;
    top: 17.3%;
    left: 5.4%;
}
#oval-3 {
    width: 34px;
    height: 15px;
    top: 11%;
    left: 5%;
}
#oval-4 {
    width: 10px;
    height: 7px;
    top: 17%;
    left: 35%;
}
#oval-5 {
    width: 35px;
    height: 14px;
    top: 12.5%;
    left: 27.7%;
}
#oval-6 {
    width: 10px;
    height: 9px;
    top: 60%;
    left: 38%;
}
#oval-7 {
    width: 16px;
    height: 9px;
    top: 40.5%;
    left: 32%;
}
#oval-8 {
    width: 17.9px;
    height: 9.5px;
    top: 24%;
    left: 30.7%;
}
#oval-9 {
    width: 10px;
    height: 7px;
    top: 16.9%;
    left: 55.5%;
}
#oval-10 {
    width: 32px;
    height: 12px;
    top: 12%;
    left: 50%;
}
#oval-11 {
    width: 10px;
    height: 9px;
    top: 16%;
    left: 80%;
}
#oval-12 {
    width: 20px;
    height: 12px;
    top: 12.7%;
    left: 70%;
}
#oval-13 {
    width: 35px;
    height: 14px;
    top: 9.4%;
    left: 59%;
}

@media(min-width: 495px) {
    .positioning {
        top: 3.2%;
        left: 5%;
    }
}
@media(min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
    .positioning {
        top: 1%;
    }
}
</style>