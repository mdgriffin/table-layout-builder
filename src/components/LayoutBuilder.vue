<template>
    <div>
        <table>
            <tbody class="custom-rows">
                <component v-for="(row, rowIndex) in rows" :is="row.type" :row-index="rowIndex" v-bind:key="'rowIndex' + rowIndex" @contextMenuOpen="openRowOptions" @click="testing()"></component>
            </tbody>
            <tbody>
                <tr>
                    <td colspan="3">
                        <context-menu text="Add Row">
                            <button @click="addRow('key-value-row')">Key/Value Row</button>
                            <button @click="addRow('text-input-row')">Text Input Row</button>
                            <button @click="addRow('heading-row')">Heading Row</button>
                        </context-menu>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="ctxMenu" v-if="ctxMenuVisible" v-click-outside="hideContextMenu" :style="{top: ctxMenuY + 'px', left: ctxMenuX + 'px'}">
            <button @click="deleteRow(selectedRowIndex)">Delete Row</button>
            <button @click="moveRowUp(selectedRowIndex)">Move Up</button>
            <button @click="moveRowDown(selectedRowIndex)">Move Down</button>
        </div>
    </div>
</template>


<script>
import KeyValueRow from './rowtypes/KeyValueRow';
import TextInputRow from './rowtypes/TextInputRow';
import HeadingRow from './rowtypes/HeadingRow';
import ContextMenu from './ContextMenu';
import ClickOutside from 'vue-click-outside';

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
        ContextMenu,
        KeyValueRow,
        TextInputRow,
        HeadingRow
    },
    methods: {
        addRow(type) {
            this.rows.push({
                type: type
            });
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
        hideContextMenu() {
            this.ctxMenuVisible = false;
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style>
table td {
    border: 1px solid black;
    padding: 5px;
}

.ctxMenu {
    position: absolute;
    border: 1px solid #f4f4f4;
    background: #fff;
    color: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,0.1);
}

.ctxMenu button {
    display: block;
    width: 100%;
    background: none;
    border: 1px solid #f4f4f4;
    line-height: 40px;
    padding: 0 40px;
    cursor: pointer;
}

.ctxMenu button:hover {
    background: #f4f4f4;
}
</style>