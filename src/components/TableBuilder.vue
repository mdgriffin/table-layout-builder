<template>
  <table>
    <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
      <Cell
        v-for="(cell, cellIndex) in row"
        :colspan="cell.colspan"
        :rowspan="cell.rowspan"
        :rowIndex="rowIndex"
        :cellIndex="cellIndex"
        v-on:mergeDown="mergeDown"
        v-on:mergeRight="mergeRight"
        :key="'cell-' + cellIndex"
      >
        <button
          v-if="cellIndex == row.length - 1"
          v-on:click="addCell($event, rowIndex)"
        >
          +C
        </button>
        <button
          v-if="cellIndex == row.length - 1"
          v-on:click="addRow($event, rowIndex)"
        >
          +R
        </button>
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
      this.rows.forEach((row) =>
        row.push({
          colspan: 1,
          rowspan: 1
        })
      );
    },
    addRow(e, rowIndex) {
      this.rows.splice(rowIndex, 0, this.rows[rowIndex].slice());
    },
    mergeRight(rowIndex, cellIndex) {
        if (cellIndex < this.rows[rowIndex].length - 1) {
            this.rows[rowIndex].splice(cellIndex + 1, 1);
            this.rows[rowIndex][cellIndex].colspan++;
        }
    },
    mergeDown(rowIndex, cellIndex) {
        console.log('merging down', rowIndex, cellIndex);
        // remove item from row below
        // change row span to 2
        if(rowIndex < this.rows.length - 1) {
            this.rows[rowIndex + 1].splice(cellIndex, 1);
            this.rows[rowIndex][cellIndex].rowspan++;
        }
    },
  },
};
</script>

<style>
table {
  border: 1px solid red;
  border-collapse: collapse;
}
</style>