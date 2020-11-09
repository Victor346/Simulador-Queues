<template>
  <div>
    <Row>
      <h1>Modelo M/M/s/K</h1>
    </Row>
    <MG1Form />
  </div>
</template>

<script>
import { Row } from "ant-design-vue";
import MG1Form from "@/components/MG1Form.vue";

export default {
  name: "MG1",
  components: { Row, MG1Form }
};
</script>

<style scoped></style>
