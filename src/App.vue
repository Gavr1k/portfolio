<template>
  <div>
    <Layout></Layout>
    <div class="color_1 block"></div>
    <div class="color_2 block"></div>
    <div class="color_3 block"></div>
    <div class="color_4 block"></div>
    <div class="color_5 block"></div>
    <div class="color_6 block"></div>

    <!-- <LeetcodeWidget></LeetcodeWidget> -->
  </div>
</template>

<script setup lang="ts">
import LeetcodeWidget from './components/LeetcodeWidget.vue';
import Layout from './components/Layout.vue';
</script>

<style scoped lang="scss">

.block {
    width: 300px;
    height: 300px;
}

/*

.color{
    &_1 {
        background-color: #0f1d40; //темно синий
    }
    &_2 {
        background-color: #101e41; //насыщенный индиго
    }
    &_3 {
        background-color: #101e41; //очень тёмный серо-синий
    }
    &_4 {
        background-color: #102043; //глубокий сине-зелёный
    }
    &_5 {
        background-color: #172549; //насыщенный синий
    }
    &_6 {
        background-color: #162752 ; //тёмный индиго-синий
    }
}

*/

.color {
    &_1 {
        background-color: #0c0e0e; // тёмно-серый, почти чёрный
    }
    &_2 {
        background-color: #edd6d8; // светло-розовый или бежевый
    }
    &_3 {
        background-color: #0b0d0d; // очень тёмный серо-зелёный
    }
    &_4 {
        background-color: #0d0f0f; // насыщенный тёмный серый
    }
    &_5 {
        background-color: #141718; // чёрно-серый
    }
    &_6 {
        background-color: #0a0c0c; // глубокий серо-чёрный
    }
}


</style>
