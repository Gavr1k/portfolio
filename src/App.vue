<template>
  <div>
    <ProgressCircular></ProgressCircular>
    <div class="linear__progress" v-for="question in user.questions">
      <LinearProgress 
          :color="question.color" 
          :value="question.resolved" 
          :maxValue="question.quantity">
      </LinearProgress>
  </div>
  </div>
</template>

<script setup lang="ts">
import ProgressCircular from "./components/ProgressCircular.vue";
import LinearProgress from "./components/LinearProgress.vue";
import { ref } from 'vue';

const user = ref({
    name: 'Andrey Hauryk',
    position: '#53567',
    questions: [
        {
            id: 1,
            name: 'Easy',
            quantity: 812,
            resolved: 81,
            color: 'green',
        },
        {
            id: 2,
            name: 'Medium',
            quantity: 1731,
            resolved: 90,
            color: 'orange',
        },
        {
            id: 3,
            name: 'Easy',
            quantity: 749,
            resolved: 17,
            color: 'red',
        },
    ]
});

</script>



<style scoped></style>
