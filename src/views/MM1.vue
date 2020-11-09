<template>
  <div>
    <Row>
      <h1>Modelo M/M/1</h1>
    </Row>
    <MM1Form />
  </div>
</template>

<script>
import { Row } from "ant-design-vue";
import MM1Form from "@/components/MM1Form.vue";
export default {
  name: "MM1",
  components: { Row, MM1Form }
};
</script>

<style scoped></style>
