<template>
  <div>
    <table>
      <tbody class="custom-rows">
        <component
          v-for="(row, rowIndex) in rows"
          :is="row.type"
          :row-index="rowIndex"
          v-bind:key="'rowIndex' + rowIndex"
          @contextMenuOpen="openRowOptions"
          @click="testing()"
        >
        </component>
      </tbody>
    </table>
    <context-menu
      v-if="ctxMenuVisible"
      :x-coord="ctxMenuX"
      :y-coord="ctxMenuY"
      @clickOutside="closeContextMenu"
    >
      <div v-show="addRowOptionsIsOpen">
        <button
          v-for="rowType in rowTypes"
          @click="addRow(rowType.type)"
          :key="'type-' + rowType.type"
        >
          {{ rowType.name }}
        </button>
        
      </div>
      <div v-show="!addRowOptionsIsOpen">
        <button @click="deleteRow()"><x-square /> Delete Row</button>
        <button @click="moveRowUp()"><arrow-up /> Move Up</button>
        <button @click="moveRowDown()"><arrow-down /> Move Down</button>
        <button @click="showAddRowOptions()"><plus-square /> Add Row</button>
        <button v-for="(contextOption, contextOptionIndex) in additionalContextOptions" @click="contextOption.action"  :key="'addition-option-' + contextOptionIndex">
          {{contextOption.text}}
        </button>
      </div>
    </context-menu>
  </div>
</template>

<script>
import KeyValueRow from "./rowtypes/KeyValueRow";
import TextInputRow from "./rowtypes/TextInputRow";
import HeadingRow from "./rowtypes/HeadingRow";
import ButtonRow from "./rowtypes/ButtonRow";
import SelectRow from "./rowtypes/SelectRow";
import DatePickerRow from "./rowtypes/DatePickerRow";
import ContextMenu from "./ContextMenu";
import ArrowUp from "./icons/ArrowUp";
import ArrowDown from "./icons/ArrowDown"
import PlusSquare from './icons/PlusSquare.vue';
import XSquare from './icons/XSquare.vue';

export default {
  name: "layout-builder",
  data() {
    return {
      rows: [
        {
          type: "key-value-row",
        },
      ],
      ctxMenuVisible: false,
      ctxMenuX: 0,
      ctxMenuY: 0,
      selectedRowIndex: 0,
      addRowOptionsIsOpen: false,
      additionalContextOptions: [],
      rowTypes: [
        { type: "key-value-row", name: "Key/Value Row" },
        { type: "text-input-row", name: "Text Input Row" },
        { type: "heading-row", name: "Heading Row" },
        { type: "button-row", name: "Button Row" },
        { type: "date-picker-row", name: "Datepicker Row" },
        { type: "select-row", name: "Select Row" }
      ],
    };
  },
  components: {
    KeyValueRow,
    TextInputRow,
    HeadingRow,
    ButtonRow,
    SelectRow,
    DatePickerRow,
    ContextMenu,
    ArrowUp,
    ArrowDown,
    PlusSquare,
    XSquare
  },
  methods: {
    addRow(type) {
      this.rows.push({
        type: type,
      });
      this.closeContextMenu();
    },
    deleteRow() {
      this.rows.splice(this.selectedRowIndex, 1);
      this.closeContextMenu();
    },
    moveRowUp() {
      var rowIndex = this.selectedRowIndex;
      if (rowIndex > 0) {
        let rowElement = this.rows[rowIndex];
        this.rows.splice(rowIndex, 1, this.rows[rowIndex - 1]);
        this.rows.splice(rowIndex - 1, 1, rowElement);
        this.closeContextMenu();
      }
    },
    moveRowDown() {
      var rowIndex = this.selectedRowIndex;
      if (rowIndex < this.rows.length - 1) {
        let rowElement = this.rows[rowIndex];
        this.rows.splice(rowIndex, 1);
        this.rows.splice(rowIndex + 1, 0, rowElement);
        this.closeContextMenu();
      }
    },
    openRowOptions(options) {
      options.e.preventDefault();
      this.selectedRowIndex = options.rowIndex;
      this.ctxMenuX = options.e.clientX;
      this.ctxMenuY = options.e.clientY;
      this.ctxMenuVisible = true;

      if(options.contextOptions) {
        console.log(options.contextOptions)
        this.additionalContextOptions = options.contextOptions;
      }
    },
    showAddRowOptions() {
      this.addRowOptionsIsOpen = true;
    },
    closeContextMenu() {
      this.addRowOptionsIsOpen = false;
      this.ctxMenuVisible = false;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table td {
  border: 1px solid rgb(226, 226, 226);
  padding: 5px;
}

table tr:nth-child(odd) td {
  background: #f4f4f4;
}
</style>