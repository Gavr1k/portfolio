<template>
    <div class="widget">
        <ProgressCircular class="ass"></ProgressCircular>
    </div>
</template>


<script lang="ts">
import ProgressCircular from "../ProgressCircular.vue";
import leetCodeApi from "../../api/leetcodeApi";

const result = await leetCodeApi.get('');

</script>

<style scoped lang="scss">

.widget {
    background: #fff;
    border-radius: 2rem;
}

</style>