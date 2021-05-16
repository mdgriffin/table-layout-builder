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
      <button v-for="(contextOption, contextOptionKey) in activeContextOptions" v-bind:key="contextOptionKey" @click="executeContextAction(contextOption, contextOptionKey)">
        {{contextOption.text}}
      </button>
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
    var self = this;

    return {
      rows: [
        {
          type: "key-value-row",
        },
      ],
      activeContextSubOptionsKey: undefined,
      defaultContextOptions: {
        'ctx-delete-row': {
          text: 'Delete Row',
          icon: 'df',
          action: () => self.deleteRow()
        },
        'ctx-move-row-up': {
          text: 'Move Up',
          icon: 'df',
          action: () => self.moveRowUp()
        },
        'ctx-move-row-dow': {
          text: 'Move Row Down',
          icon: 'df',
          action: () => self.moveRowDown()
        },
        'ctx-add-row': {
          text: 'Add Row',
          icon: 'df', // TODO: Use icon
          //action: () => self.openSubContextOption('ctx-add-row'),
          subOptions: {
            "ctx-add-key-value-row": { text: "Key/Value Row", action: () => self.addRow('key-value-row') },
            "ctx-add-text-input-row": { text: "Text Input Row", action: () => self.addRow('text-input-row') },
            "Heading Row": { text: "Heading Row", action: () => self.addRow('heading-row') },
            "ctx-add-button-row": { text: "Button Row", action: () => self.addRow('button-row') },
            "ctx-add-date-picker-row": { text: "Datepicker Row", action: () => self.addRow('date-picker-row') },
            "ctx-add-select-row": { text: "Select Row", action: () => self.addRow('select-row') }
          }
        }
      },
      additionalContextOptions: {},
      ctxMenuVisible: false,
      ctxMenuX: 0,
      ctxMenuY: 0,
      selectedRowIndex: 0,
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
      this.activeContextSubOptionsKey = undefined;
    },
    deleteRow() {
      console.log('deleting row')
      this.rows.splice(this.selectedRowIndex, 1);
      this.closeContextMenu();
      this.activeContextSubOptionsKey = undefined;
    },
    moveRowUp() {
      var rowIndex = this.selectedRowIndex;
      if (rowIndex > 0) {
        let rowElement = this.rows[rowIndex];
        this.rows.splice(rowIndex, 1, this.rows[rowIndex - 1]);
        this.rows.splice(rowIndex - 1, 1, rowElement);
        this.closeContextMenu();
        this.activeContextSubOptionsKey = undefined;
      }
    },
    moveRowDown() {
      var rowIndex = this.selectedRowIndex;
      if (rowIndex < this.rows.length - 1) {
        let rowElement = this.rows[rowIndex];
        this.rows.splice(rowIndex, 1);
        this.rows.splice(rowIndex + 1, 0, rowElement);
        this.closeContextMenu();
        this.activeContextSubOptionsKey = undefined;
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
    openSubContextOption(contextOptionKey) {
      this.activeContextSubOptionsKey = contextOptionKey;
      console.log('Opening sub options for ' + contextOptionKey);
      this.ctxMenuVisible = true;
    },
    closeContextMenu() {
      this.addRowOptionsIsOpen = false;
      this.ctxMenuVisible = false;
    },
    executeContextAction (contextOption, contextOptionKey) {
      if (contextOption.action) {
        contextOption.action();
        this.closeContextMenu();
      } else {
        this.openSubContextOption(contextOptionKey);
      }
    }
  },
  computed: {
    contextOptions() {
      return {...this.defaultContextOptions, ...this.additionalContextOptions}
    },
    activeContextOptions() {
      if (this.activeContextSubOptionsKey) {
        return this.contextOptions[this.activeContextSubOptionsKey].subOptions;
      } else {
        return this.contextOptions;
      }
      
    }
  },
  watch: {
    ctxMenuVisible(newVal) {
      console.log('ctxMenuVisible is changin to ' + newVal)
    }
  }
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