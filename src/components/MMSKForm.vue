<template>
  <div>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="2">
        <h2>TODO: definir campos</h2>
      </Col>
      <Col :flex="1">
        <Button type="primary">Calcular</Button>
      </Col>
    </Row>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="1">
        <h2>TODO: resultados</h2>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col, Button } from "ant-design-vue";

export default {
  name: "MMSKForm",
  components: { Row, Col, Button }
};
</script>

<style scoped>
.ant-input-number {
  width: 50%;
}
</style>
