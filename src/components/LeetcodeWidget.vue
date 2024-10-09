<template>
    <div class="widget" v-if="stats.data">
        <div class="widget__title">
            <div class="widget__logo">
                <img class="widget__logo-img" src="../assets//leetcode.png" alt="leetcode png"/>
                <span class="widget__logo-text">Andrey Hauryk</span>
            </div>
            <div class="widget__position">
                <span>#{{stats.data.ranking}}</span>
            </div>
        </div>
        <div class="widget__content">
            <div class="widget__content-stats">
                <ProgressCircular></ProgressCircular>
            </div>
            <div class="widget__content-tasks">
                <div class="widget__content-task">
                    <div class="widget__progress-linear__title">
                        <div>
                            <span>Easy</span>
                        </div>
                        <div>
                            <span>{{stats.data.easySolved + '/' + stats.data.totalEasy}}</span>
                        </div>
                    </div>
                    <ProgressLinear
                        color="green"
                        :value="stats.data.easySolved"
                        :maxValue="stats.data.totalEasy"
                    ></ProgressLinear>
                </div>
                <div class="widget__content-task">
                    <div class="widget__progress-linear__title">
                        <div>
                            <span>Medium</span>
                        </div>
                        <div>
                            <span>{{stats.data.mediumSolved + '/' + stats.data.totalMedium}}</span>
                        </div>
                    </div>
                    <ProgressLinear
                        color="orange"
                        :value="stats.data.mediumSolved"
                        :maxValue="stats.data.totalMedium"
                    ></ProgressLinear>
                </div>
                <div class="widget__content-task">
                    <div class="widget__progress-linear__title">
                        <div>
                            <span>Hard</span>
                        </div>
                        <div>
                            <span>{{stats.data.hardSolved + '/' + stats.data.totalHard}}</span>
                        </div>
                    </div>
                    <ProgressLinear
                        color="red"
                        :value="stats.data.hardSolved"
                        :maxValue="stats.data.totalHard"
                    ></ProgressLinear>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import ProgressCircular from './ProgressCircular.vue';
import ProgressLinear from './LinearProgress.vue';
import LeetcodeApi from '../api/leetcodeApi';
import { ref, onMounted } from 'vue';

const stats = ref({});

const fetchLeetcodeStats = async() => {
    stats.value = await LeetcodeApi.get('');
}

onMounted(() => {
    fetchLeetcodeStats();
});

</script>

<style scoped lang="scss">

.widget {
    padding: 2rem;
    background: #fff;
    border: 1px solid black;
    border-radius: 2rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.widget__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.widget__logo {
    display: flex;
    align-items: center;

    &-text {
        margin-left: 1rem;
    }
}

.widget__content {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.widget__content-stats {
    width: 30%;
}

.widget__content-tasks {
    width: 70%;
}

.widget__content-task {
    margin-bottom: 2rem;
}

.widget__progress-linear__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>