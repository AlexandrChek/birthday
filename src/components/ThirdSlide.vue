<template>
    <img src="../assets/meercat.jpg" alt="Meercat">
    <p>С Днём Рождения, Наташа!!!</p>
    <div v-for="item in 11" :key="item" :id="`oval-${item}`" class="ovals"></div>
</template>

<script>
export default {
    name: 'ThirdSlide'
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
    top: calc(20px + 42vw);
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
    top: calc(20px + 19vw);
    left: 12vw;
}
#oval-4 {
    width: 10px;
    height: 9px;
    top: calc(20px + 44vw);
    left: 45vw;
}
#oval-5 {
    width: 20px;
    height: 15px;
    top: calc(20px + 32vw);
    left: 37vw;
}
#oval-6 {
    width: 35px;
    height: 20px;
    top: calc(20px + 20vw);
    left: 30vw;
}
#oval-7 {
    width: 10px;
    height: 9px;
    top: calc(20px + 44vw);
    left: 67vw;
}
#oval-8 {
    width: 20px;
    height: 15px;
    top: calc(20px + 31.5vw);
    left: 58vw;
}
#oval-9 {
    width: 35px;
    height: 20px;
    top: calc(20px + 20vw);
    left: 50vw;
}
#oval-10 {
    width: 20px;
    height: 12.5px;
    top: calc(20px + 26vw);
    left: 69vw;
}
#oval-11 {
    width: 35px;
    height: 19px;
    top: calc(20px + 18.8vw);
    left: 64vw;
}

@media(min-width: 515px) {
    p {
        top: 33px;
        left: calc(((100vw - 515px) / 2) + 23px);
    }
    #oval-1 {
        top: 245px;
        left: calc(((100vw - 515px) / 2) + 130px);
    }
    #oval-2 {
        top: 194px;
        left: calc(((100vw - 515px) / 2) + 97px);
    }
    #oval-3 {
        top: 124px;
        left: calc(((100vw - 515px) / 2) + 68px);
    }
    #oval-4 {
        top: 247px;
        left: calc(((100vw - 515px) / 2) + 232px);
    }
    #oval-5 {
        top: 185px;
        left: calc(((100vw - 515px) / 2) + 191px);
    }
    #oval-6 {
        top: 123px;
        left: calc(((100vw - 515px) / 2) + 155px);
    }
    #oval-7 {
        top: 247px;
        left: calc(((100vw - 515px) / 2) + 345px);
    }
    #oval-8 {
        top: 177px;
        left: calc(((100vw - 515px) / 2) + 299px);
    }
    #oval-9 {
        top: 118px;
        left: calc(((100vw - 515px) / 2) + 257px);
    }
    #oval-10 {
        top: 159px;
        left: calc(((100vw - 515px) / 2) + 361px);
    }
    #oval-11 {
        top: 102px;
        left: calc(((100vw - 515px) / 2) + 312px);
    }
}
</style>