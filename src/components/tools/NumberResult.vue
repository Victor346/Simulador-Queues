<template>
  <Statistic
    :value="n"
    :precision="precision"
    :valueStyle="{ 'font-size': '20px' }"
    :style="{ 'margin-bottom': '8px' }"
  />
</template>

<script>
import { Statistic } from "ant-design-vue";

export default {
  name: "Result",
  components: { Statistic },
  props: {
    n: Number,
    precision: Number
  }
};
</script>

<style scoped></style>
