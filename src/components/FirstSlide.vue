<template>
    <div class="wrapper">
        <img src="../assets/tiger.png" alt="Tiger">
        <HappyBirthday class="positioning"/>
        <div v-for="item in 3" :key="item" :id="`oval-${item}`" class="ovals"></div>
    </div>
</template>

<script>
import HappyBirthday from './HappyBirthday.vue'

export default {
    name: 'FirstSlide',
    components: {HappyBirthday}
}
</script>

<style scoped>
.positioning {
    top: 1%;
    left: 1%;
}
#oval-1 {
    width: 10px;
    height: 9px;
    top: 28%;
    left: 22%;
}
#oval-2 {
    width: 20px;
    height: 15px;
    top: 22%;
    left: 17%;
}
#oval-3 {
    width: 35px;
    height: 20px;
    top: 13.5%;
    left: 12%;
}

@media(min-width: 525px) {
    .positioning {
        top: 3%;
    }
}
@media(min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
    .positioning {
        top: .5%;
    }
}
</style>