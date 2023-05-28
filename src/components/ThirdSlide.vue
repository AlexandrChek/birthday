<template>
    <div class="wrapper">
        <img src="../assets/meercat.jpg" alt="Meercat">
        <HappyBirthday class="positioning"/>
        <div v-for="item in 11" :key="item" :id="`oval-${item}`" class="ovals"></div>
    </div>
</template>

<script>
import HappyBirthday from './HappyBirthday.vue'

export default {
    name: 'ThirdSlide',
    components: {HappyBirthday}
}
</script>

<style scoped>
.positioning {
    top: 3%;
    left: 1%;
}
#oval-1 {
    width: 10px;
    height: 9px;
    top: 28%;
    left: 21%;
}
#oval-2 {
    width: 20px;
    height: 15px;
    top: 21%;
    left: 17%;
}
#oval-3 {
    width: 35px;
    height: 20px;
    top: 14%;
    left: 12%;
}
#oval-4 {
    width: 10px;
    height: 9px;
    top: 30%;
    left: 45%;
}
#oval-5 {
    width: 20px;
    height: 15px;
    top: 23%;
    left: 37%;
}
#oval-6 {
    width: 35px;
    height: 20px;
    top: 15%;
    left: 30%;
}
#oval-7 {
    width: 10px;
    height: 9px;
    top: 32.5%;
    left: 70%;
}
#oval-8 {
    width: 20px;
    height: 15px;
    top: 24.5%;
    left: 58.5%;
}
#oval-9 {
    width: 35px;
    height: 20px;
    top: 15%;
    left: 50%;
}
#oval-10 {
    width: 18.5px;
    height: 12px;
    top: 19.5%;
    left: 69.5%;
}
#oval-11 {
    width: 35px;
    height: 19px;
    top: 14.4%;
    left: 64%;
}

@media(min-width: 400px) {
    .positioning {
        top: 5.7%;
        left: 7%;
    } 
}
@media(min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
    .positioning {
        top: 1%;
        left: 1%;
    }
}
</style>