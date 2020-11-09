<template>
  <div>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>&lambda;</label>
          </Col>
          <Col :flex="1">
            <InputNumber v-model="lambda" placeholder="Lambda" :min="0.000000000000000000001" />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>	&mu;</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="Mu" v-model="mu" :min="0.000000000000000000001" />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>Servidores</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="S" v-model="s" :precision="0" :step="1" :min="1" />
          </Col>
        </Row>
      </Col>
      <Col :flex="2">
        <Button type="primary" @click="handleSubmit">Calcular</Button>
      </Col>
    </Row>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="1">
        <h2></h2>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col, InputNumber, Button } from "ant-design-vue";
import MMS from "../services/queues/me1.js";

export default {
  name: "MMSForm",
  components: { Row, Col, InputNumber, Button },
  data() {
    return {
      mu: 80,
      lambda: 120,
      s: 3,
      cw: 48,
      cs: 20
    };
  },
  mounted() {
    this.handleSubmit();
  },
  methods: {
    handleSubmit() {
      let queueModel = new MMS(this.lambda, this.mu, this.s, this.cw, this.cs);
      console.log("p0 ", queueModel.p0());
      for(let i=1; i<8; i++) {
        console.log("p"+i, queueModel.pn(i));
      }
      console.log("ro", queueModel.rho());
      console.log("l ", queueModel.l());
      console.log("lq ", queueModel.lq());
      console.log("w ", queueModel.w());
      console.log("wq ", queueModel.wq());
      console.log("ct", queueModel.ct());
    }
  }
};
</script>

<style scoped>
.ant-input-number {
  width: 50%;
}
</style>
