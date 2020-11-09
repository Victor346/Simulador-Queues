<template>
  <div>
    <Row>
      <h1>Modelo M/M/s</h1>
    </Row>
    <MMSForm />
  </div>
</template>

<script>
import { Row } from "ant-design-vue";
import MMSForm from "@/components/MMSForm.vue";

export default {
  name: "MMS",
  components: { Row, MMSForm }
};
</script>

<style scoped></style>
