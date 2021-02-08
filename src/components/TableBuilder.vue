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

function createInitialTable(numRows, numCols) {
    var rows = [];

    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j < numCols; j++) {
            if (j === 0) {
                rows[i] = [];
            }

            rows[i][j] = {
                colspan: 1,
                rowspan: 1,
            }
        }
    }

    return rows;
}

function getTableCellWidth(rows) {
    return Math.max(...rows.map(row => row.reduce((sum, cell) => sum + cell.colspan, 0)));
}

function createTableRow(numCols) {
    var row = [];

    for (var i = 0; i < numCols; i++) {
        row.push({
                colspan: 1,
                rowspan: 1,
            });
    }

    return row;
}

export default {
  name: "TableBuilder",
  components: {
    Cell,
  },
  data() {
    return {
      rows: createInitialTable(20, 20),
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
        this.rows.push(createTableRow(getTableCellWidth(this.rows)))
        
    },
    mergeRight(rowIndex, cellIndex) {
        if (cellIndex < this.rows[rowIndex].length - 1) {
            this.rows[rowIndex].splice(cellIndex + 1, 1);
            this.rows[rowIndex][cellIndex].colspan++;
        }
    },
    mergeDown(rowIndex, cellIndex) {
        let currentRowSpan = this.rows[rowIndex][cellIndex].rowspan;
        if(rowIndex < this.rows.length - currentRowSpan) {
            // rowspan or row below
            this.rows[rowIndex][cellIndex].rowspan += this.rows[rowIndex + currentRowSpan][cellIndex].rowspan;
            this.rows[rowIndex + currentRowSpan].splice(cellIndex, 1);
            console.log('removing cel', rowIndex + currentRowSpan, cellIndex)
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