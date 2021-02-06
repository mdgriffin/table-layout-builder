<template>
  <table>
    <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
      <Cell
        v-for="(cell, cellIndex) in row"
        :colspan="cell.colspan"
        :cellIndex="cellIndex"
        :key="'cell-' + cellIndex"
      >
        <button v-if="cellIndex == row.length - 1" v-on:click="addCell($event, rowIndex)">+C</button>
        <button v-if="cellIndex == row.length - 1" v-on:click="addRow($event, rowIndex)">+R</button>
      </Cell>
    </tr>
  </table>
</template>


<script>
import Cell from "./Cell.vue";

export default {
  name: "TableBuilder",
  components: {
    Cell,
  },
  data() {
    return {
      rows: [
        [
          {
            colspan: 1,
          },
        ],
      ],
    };
  },
  methods: {
      addCell(e, rowIndex) {
          console.log('ddf')
          this.rows[rowIndex].push({
              colspan: 1
          })
      },
      addRow(e, rowIndex) {
          this.rows.splice(rowIndex, 0, this.rows[rowIndex])
      }
  }
};
</script>

<style>
table {
    border: 1px solid red;
    border-collapse: collapse;
}
</style>