<template>
    <img src="../assets/turtles.webp" alt="Turtles">
    <p>Happy Birthday, Natasha!!!</p>
    <div v-for="item in 13" :key="item" :id="`oval-${item}`" class="ovals"></div>
</template>

<script>
export default {
    name: 'FourthSlide'
}
</script>

<style scoped>
img {
  max-height: calc(100vh - 40px);
  max-width: 100%;
}
p {
    margin: 0;
    padding: 13px 4px;
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
    top: calc(20px + 24.5vw);
    left: 10vw;
}
#oval-2 {
    width: 20px;
    height: 10px;
    top: calc(20px + 19.95vw);
    left: 7.5vw;
}
#oval-3 {
    width: 34px;
    height: 15px;
    top: calc(20px + 13.8vw);
    left: 7.9vw;
}
#oval-4 {
    width: 10px;
    height: 7px;
    top: calc(20px + 18.5vw);
    left: 37vw;
}
#oval-5 {
    width: 35px;
    height: 14px;
    top: calc(20px + 14.5vw);
    left: 30vw;
}
#oval-6 {
    width: 10px;
    height: 9px;
    top: calc(20px + 67vw);
    left: 40vw;
}
#oval-7 {
    width: 16px;
    height: 9px;
    top: calc(20px + 43.5vw);
    left: 34vw;
}
#oval-8 {
    width: 17.9px;
    height: 9.5px;
    top: calc(20px + 27vw);
    left: 32vw;
}
#oval-9 {
    width: 10px;
    height: 7px;
    top: calc(20px + 18.2vw);
    left: 57vw;
}
#oval-10 {
    width: 32px;
    height: 12px;
    top: calc(20px + 13.8vw);
    left: 49vw;
}
#oval-11 {
    width: 10px;
    height: 9px;
    top: calc(20px + 17.9vw);
    left: 79vw;
}
#oval-12 {
    width: 20px;
    height: 12px;
    top: calc(20px + 15vw);
    left: 68vw;
}
#oval-13 {
    width: 35px;
    height: 14px;
    top: calc(20px + 11.5vw);
    left: 56vw;
}

@media(min-width: 530px) {
    p {
        top: calc(20px + 4vw);
        left: 3.7vw;
        font-size: 25px;
        padding: 14px 5px;
    }
}
@media(min-width: 690px) {
    p {
        top: 48px;
        left: calc(((100vw - 690px) / 2) + 70px);
    }
    #oval-1 {
        top: 189px;
        left: calc(((100vw - 690px) / 2) + 69px);
    }
    #oval-2 {
        top: 158px;
        left: calc(((100vw - 690px) / 2) + 52px);
    }
    #oval-3 {
        top: 115px;
        left: calc(((100vw - 690px) / 2) + 54.5px);
    }
    #oval-4 {
        top: 148px;
        left: calc(((100vw - 690px) / 2) + 255px);
    }
    #oval-5 {
        top: 119px;
        left: calc(((100vw - 690px) / 2) + 208px);
    }
    #oval-6 {
        top: 482px;
        left: calc(((100vw - 690px) / 2) + 276px);
        width: 12px;
    }
    #oval-7 {
        top: 324px;
        left: calc(((100vw - 690px) / 2) + 235px);
    }
    #oval-8 {
        top: 206px;
        left: calc(((100vw - 690px) / 2) + 221px);
    }
    #oval-9 {
        top: 146px;
        left: calc(((100vw - 690px) / 2) + 393px);
    }
    #oval-10 {
        top: 115px;
        left: calc(((100vw - 690px) / 2) + 338px);
    }
    #oval-11 {
        top: 144px;
        left: calc(((100vw - 690px) / 2) + 545px);
    }
    #oval-12 {
        top: 124px;
        left: calc(((100vw - 690px) / 2) + 469px);
    }
    #oval-13 {
        top: 99px;
        left: calc(((100vw - 690px) / 2) + 386px);
    }
}
</style>