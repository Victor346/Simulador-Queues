<template>
  <Table
    bordered
    :columns="[
      {
        align: 'center',
        title: 'n',
        dataIndex: 'n'
      },
      {
        align: 'center',
        title: 'Pn',
        dataIndex: 'pn'
      }
    ]"
    :pagination="{ defaultPageSize: pageSize }"
    :data-source="data"
  >
  </Table>
</template>

<script>
import { Table } from "ant-design-vue";

export default {
  name: "PnTable",
  components: { Table },
  props: {
    data: Array,
    pageSize: Number
  }
};
</script>

<style scoped></style>
