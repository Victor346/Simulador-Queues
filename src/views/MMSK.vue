<template>
  <div>
    <Row>
      <h1>Modelo M/M/s/K</h1>
    </Row>
    <MMSKForm />
  </div>
</template>

<script>
import { Row } from "ant-design-vue";
import MMSKForm from "@/components/MMSKForm.vue";

export default {
  name: "MMSK",
  components: { Row, MMSKForm }
};
</script>

<style scoped></style>
