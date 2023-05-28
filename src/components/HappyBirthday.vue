<template>
    <p>С Днём Рождения, Наташа!!!</p>
</template>

<script>
export default {
    name: 'HappyBirthday'
}
</script>

<style scoped>
p {
    margin: 0;
    padding: 13.5px 4px;
    position: absolute;
    background-color: white;
    color: red;
    border-radius: 100%;
    font-size: 23px;
    font-weight: bold;
}

@media(min-width: 576px) and (max-width: 767px) and (orientation: landscape) {
    p {
        font-size: 17.9px;
        padding: 8px 4px;
    }
}
</style>