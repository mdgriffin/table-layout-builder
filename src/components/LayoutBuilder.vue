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
            :row-index="selectedRowIndex"
            @deleteRow="deleteRow"
            @moveRowUp="moveRowUp"
            @moveRowDown="moveRowDown"
            @addRow="addRow"
            @clickOutside="closeContextMenu"></context-menu>
    </div>
</template>


<script>
import KeyValueRow from './rowtypes/KeyValueRow';
import TextInputRow from './rowtypes/TextInputRow';
import HeadingRow from './rowtypes/HeadingRow';
import ContextMenu from './ContextMenu'

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
            selectedRowIndex: 0
        }
    },
    components: {
        KeyValueRow,
        TextInputRow,
        HeadingRow,
        ContextMenu
    },
    methods: {
        addRow(type) {
            this.rows.push({
                type: type
            });
            this.ctxMenuVisible = false;
        },
        deleteRow(rowIndex) {
            this.rows.splice(rowIndex, 1);
            this.ctxMenuVisible = false;
        },
        moveRowUp(rowIndex) {
            console.log('moving row ' + rowIndex);
            if (rowIndex > 0) {
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1, this.rows[rowIndex - 1]);
                this.rows.splice(rowIndex - 1, 1, rowElement);
                this.ctxMenuVisible = false;
            }
        },
        moveRowDown(rowIndex) {
            if (rowIndex < (this.rows.length - 1)) {
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1);
                this.rows.splice(rowIndex + 1, 0, rowElement);
                this.ctxMenuVisible = false;
            }
        },
        openRowOptions(options) {
            options.e.preventDefault();
            this.selectedRowIndex = options.rowIndex 
            this.ctxMenuX = options.e.clientX;
            this.ctxMenuY = options.e.clientY;
            this.ctxMenuVisible = true;
        },
        closeContextMenu() {
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