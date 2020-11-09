<template>
  <div>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>Lambda</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="Lambda" :step="1" :min="0.00001" />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>Miu</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="Miu" :step="1" :min="0.00001" />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>Servidores</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="S" :precision="0" :step="1" :min="1" />
          </Col>
        </Row>
      </Col>
      <Col :flex="2">
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
import { Row, Col, InputNumber, Button } from "ant-design-vue";

export default {
  name: "MMSForm",
  components: { Row, Col, InputNumber, Button }
};
</script>

<style scoped>
.ant-input-number {
  width: 50%;
}
</style>
