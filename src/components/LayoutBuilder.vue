<template>
    <table contenteditable="contenteditable">
        <component v-for="(row, rowIndex) in rows" :is="row.type" v-bind:key="'rowIndex' + rowIndex">
            <button @click="deleteRow(rowIndex)">Delete Row</button>
            <button v-if="rowIndex > 0" @click="moveRowUp(rowIndex)">Move Up</button>
        </component>
        <tr>
            <td colspan="3">
                <context-menu text="addRow">
                    <button @click="addRow('key-value-row')">Key/Value Row</button>
                    <button @click="addRow('text-input-row')">Text Input Row</button>
                    <button @click="addRow('heading-row')">Heading Row</button>
                </context-menu>
            </td>
        </tr>
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
            console.log('moving up')
            if (rowIndex > 0) {
                console.log('moving up a')
                let rowElement = this.rows[rowIndex];
                this.rows.splice(rowIndex, 1, this.rows[rowIndex - 1]);
                this.rows.splice(rowIndex - 1, 1, rowElement);
            }
        }
    }
}
</script>

<style>
table td {
    border: 1px solid black;
    padding: 5px;
}
</style>