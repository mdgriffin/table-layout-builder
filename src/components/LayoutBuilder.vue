<template>
    <table>
        <component v-for="(row, rowIndex) in rows" :is="row.type" v-bind:key="'rowIndex' + rowIndex">
            <button @click="addRow">Add Row</button>
            <button @click="deleteRow(rowIndex)">Delete Row</button>
        </component>
    </table>
</template>


<script>
import KeyValueRow from './KeyValueRow.vue';

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
        KeyValueRow
    },
    methods: {
        addRow() {
            this.rows.push({
                type: 'key-value-row'
            });
        },
        deleteRow(rowIndex) {
            this.rows.splice(rowIndex, 1);
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