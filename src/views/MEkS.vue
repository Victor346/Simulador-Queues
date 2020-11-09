<template>
  <div>
    <Row>
      <h1>Modelo M/E<sub>k</sub>/s</h1>
    </Row>
    <MEkSForm />
  </div>
</template>

<script>
import { Row } from "ant-design-vue";
import MEkSForm from "@/components/MEkSForm.vue";

export default {
  name: "MEkS",
  components: { Row, MEkSForm }
};
</script>

<style scoped></style>
