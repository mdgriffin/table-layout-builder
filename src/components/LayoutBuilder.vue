<template>
    <div>
        <table>
            <tbody class="custom-rows">
                <component v-for="(row, rowIndex) in rows" :is="row.type" :row-index="rowIndex" v-bind:key="'rowIndex' + rowIndex"
                    @contextMenuOpen="openRowOptions" 
                    @click="testing()">
                </component>
            </tbody>
        </table>
        <context-menu 
            v-if="ctxMenuVisible"
            :x-coord="ctxMenuX"
            :y-coord="ctxMenuY" 
            @clickOutside="closeContextMenu">
            <div v-show="addRowOptionsIsOpen">
                <button @click="addRow('key-value-row')">Key/Value Row</button>
                <button @click="addRow('text-input-row')">Text Input Row</button>
                <button @click="addRow('heading-row')">Heading Row</button>
                <button @click="addRow('button-row')">Button Row</button>
                <button @click="addRow('date-picker-row')">Datepicker Row</button>
                <button @click="addRow('select-row')">Select Row</button>
                <button @click="addRow('test-row')">Test Row</button>
            </div>
            <div v-show="!addRowOptionsIsOpen">
                <button @click="deleteRow()">Delete Row</button>
                <button @click="moveRowUp()">Move Up</button>
                <button @click="moveRowDown()">Move Down</button>
                <button @click="showAddRowOptions()">Add Row</button>
            </div>
        </context-menu>
    </div>
</template>

<script>
import KeyValueRow from './rowtypes/KeyValueRow';
import TextInputRow from './rowtypes/TextInputRow';
import HeadingRow from './rowtypes/HeadingRow';
import ButtonRow from './rowtypes/ButtonRow';
import SelectRow from './rowtypes/SelectRow';
import DatePickerRow from './rowtypes/DatePickerRow';
import TestRow from './rowtypes/TestRow';
import ContextMenu from './ContextMenu';

export default {
    name: 'layout-builder',
    data() {
        return {
            rows: [{
                type: 'key-value-row'
            }],
            ctxMenuVisible: false,
            ctxMenuX: 0,
            ctxMenuY: 0,
            selectedRowIndex: 0,
            addRowOptionsIsOpen: false
        }
    },
    components: {
        KeyValueRow,
        TextInputRow,
        HeadingRow,
        ButtonRow,
        SelectRow,
        DatePickerRow,
        TestRow,
        ContextMenu
    },
    methods: {
        addRow(type) {
            this.rows.push({
                type: type
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
            if (rowIndex < (this.rows.length - 1)) {
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1);
                this.rows.splice(rowIndex + 1, 0, rowElement);
                this.closeContextMenu();
            }
        },
        openRowOptions(options) {
            options.e.preventDefault();
            this.selectedRowIndex = options.rowIndex 
            this.ctxMenuX = options.e.clientX;
            this.ctxMenuY = options.e.clientY;
            this.ctxMenuVisible = true;
        },
        showAddRowOptions() {
            this.addRowOptionsIsOpen = true;
        },
        closeContextMenu() {
            this.addRowOptionsIsOpen = false;
            this.ctxMenuVisible = false;
        }
    },
}
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