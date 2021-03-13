<template>
    <table>
        <tbody class="custom-rows">
            <component v-for="(row, rowIndex) in rows" :is="row.type" :row-index="rowIndex" v-bind:key="'rowIndex' + rowIndex" @contextMenuOpen="openRowOptions" @click="testing()">
                <td class="row-options">
                    <div class="row-options-container">
                        <button @click="deleteRow(rowIndex)">Delete Row</button>
                        <button v-if="rowIndex > 0" @click="moveRowUp(rowIndex)">Move Up</button>
                        <button v-if="rowIndex < rows.length - 1" @click="moveRowDown(rowIndex)">Move Down</button>
                    </div>
                </td>
            </component>
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
</template>


<script>
import KeyValueRow from './rowtypes/KeyValueRow';
import TextInputRow from './rowtypes/TextInputRow';
import HeadingRow from './rowtypes/HeadingRow';
import ContextMenu from './ContextMenu';

export default {
    name: 'layout-builder',
    data() {
        return {
            rows: [{
                type: 'key-value-row'
            }]
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
        },
        moveRowUp(rowIndex) {
            if (rowIndex > 0) {
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1, this.rows[rowIndex - 1]);
                this.rows.splice(rowIndex - 1, 1, rowElement);
            }
        },
        moveRowDown(rowIndex) {
            if (rowIndex < (this.rows.length - 1)) {
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1);
                this.rows.splice(rowIndex + 1, 0, rowElement);
            }
        },
        openRowOptions(options) {
            options.e.preventDefault();
            console.log('Show context menu for ' + options.rowIndex);
        },
        testing() {
            console.log('testing 123')
        }
    }
}
</script>

<style>
table td {
    border: 1px solid black;
    padding: 5px;
}

.row-options {
    position: relative;
    background: green;
}

.row-options > div {
    display: none;
    position: absolute;
    width: 300px;
    background: #f4f4f4;
}

.row-options > div button {
    display: inline;
}

.custom-rows tr:hover .row-options > div {
    display: block;
}
</style>