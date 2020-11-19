<template>
  <div>
    <Row type="flex" :gutter="[0, 48]">
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>&lambda;</label>
          </Col>
          <Col :flex="1">
            <InputNumber
              v-model="lambda"
              placeholder="Lambda"
              :min="0.000001"
            />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>&mu;</label>
          </Col>
          <Col :flex="1">
            <InputNumber placeholder="Mu" v-model="mu" :min="0.000001" />
          </Col>
        </Row>
      </Col>
      <Col :flex="1">
        <Row type="flex">
          <Col :flex="1">
            <label>Servidores</label>
          </Col>
          <Col :flex="1">
            <InputNumber
              placeholder="S"
              v-model="s"
              :precision="0"
              :step="1"
              :min="1"
            />
          </Col>
        </Row>
      </Col>
      <Col :flex="2">
        <Button type="primary" :disabled="calculateRho()" @click="handleSubmit"
          >Calcular</Button
        >
      </Col>
    </Row>
    <Row type="flex" :gutter="[0, 24]">
      <Col :flex="1">
        <h2>Resultados</h2>
      </Col>
    </Row>
    <Row :gutter="[0, 12]">
      <Col :span="8">
        <label><b>&rho;</b></label>
        <NumberResult :n="rho" :precision="4" />
        <label>
          <b>P<sub>0</sub></b>
        </label>
        <NumberResult :n="p0" :precision="4" />
      </Col>
      <Col :span="8">
        <label>
          <b>L<sub>q</sub></b>
        </label>
        <NumberResult :n="lq" :precision="4" />
        <label><b>L</b></label>
        <NumberResult :n="l" :precision="4" />
        <label>
          <b>W<sub>q</sub></b>
        </label>
        <NumberResult :n="wq" :precision="4" />
        <label><b>W</b></label>
        <NumberResult :n="w" :precision="4" />
      </Col>
      <Col :span="8">
        <PnTable :data="pn" :page-size="4" />
      </Col>
    </Row>
    <Row :gutter="[0, 24]">
      <Col>
        <h2><b>Costos</b></h2>
      </Col>
    </Row>
    <Row :gutter="[0, 12]">
      <Col :span="6">
        <Row>
          <Col :span="4">
            <label>C<sub>w</sub></label>
          </Col>
          <Col :span="16">
            <InputNumber
              v-model="cw"
              placeholder="Cw"
              :precision="2"
              :min="0"
            />
          </Col>
        </Row>
      </Col>
      <Col :span="6">
        <Row>
          <Col :span="4">
            <label>C<sub>s</sub></label>
          </Col>
          <Col :span="16">
            <InputNumber
              placeholder="Cs"
              v-model="cs"
              :min="0.01"
              :precision="2"
            />
          </Col>
        </Row>
      </Col>
      <Col :span="6">
        <Row>
          <Col :span="8">
            <label>
              Costo total ($)
            </label>
          </Col>
          <Col :span="8">
            <Statistic
              :value="ct"
              :precision="2"
              :valueStyle="{ 'font-size': '24px' }"
            />
          </Col>
        </Row>
      </Col>
      <Col :span="6">
        <Row>
          <Col :span="8">
            <label>
              Cts
            </label>
          </Col>
          <Col :span="8">
            <Statistic
              :value="cts"
              :precision="2"
              :valueStyle="{ 'font-size': '24px' }"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col, InputNumber, Button, Statistic } from "ant-design-vue";
import NumberResult from "@/components/tools/NumberResult.vue";
import PnTable from "@/components/tools/PnTable.vue";
import MMS from "../services/queues/mms.js";
import MM1 from '@/services/queues/mm1'

export default {
  name: "MMSForm",
  components: {
    Row,
    Col,
    InputNumber,
    Button,
    Statistic,
    NumberResult,
    PnTable
  },
  data() {
    return {
      mu: 0,
      lambda: 0,
      s: 0,
      cw: 0,
      cs: 0,
      rho: 0,
      p0: 0,
      lq: 0,
      l: 0,
      wq: 0,
      w: 0,
      pn: [],
      ct: 0,
      cts: 0
    };
  },
  methods: {
    handleSubmit() {
      let queueModel = new MMS(this.lambda, this.mu, this.s, this.cw, this.cs);
      this.rho = queueModel.rho();
      this.p0 = queueModel.p0();
      this.lq = queueModel.lq();
      this.l = queueModel.l();
      this.wq = queueModel.wq();
      this.w = queueModel.w();
      this.pn = [];
      for (let i = 1; i <= 8; i++) {
        this.pn.push({
          n: i,
          key: i,
          pn: queueModel.pn(i)
        });
      }
      this.ct = queueModel.ct();
      this.cts = queueModel.cts();
    },
    calculateRho() {
      let qModel = new MM1(this.lambda, this.mu, this.cw, this.cs);
      this.rho = qModel.rho();
      return this.rho > 1;
    }
  }
};
</script>

<style scoped>
.ant-input-number {
  width: 50%;
}
</style>
