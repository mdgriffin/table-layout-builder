<template>
    <td :colspan="colspan" :rowspan="rowspan">
        Cell {{cellIndex}}
        <slot></slot>
        <button v-on:click="mergeDown" class="mergeDown"></button>
        <button v-on:click="mergeRight" class="mergeRight"></button>
    </td>
</template>

<script>
export default {
    props: ['colspan', 'rowspan', 'rowIndex', 'cellIndex'],
    methods: {
        mergeDown() {
            this.$emit('mergeDown', this.rowIndex, this.cellIndex);
        },
        mergeRight() {
            this.$emit('mergeRight', this.rowIndex, this.cellIndex);
        }
    }
}
</script>

<style>
td {
    border: 1px solid red;
    position: relative;
}

.mergeDown,
.mergeRight {
    position: absolute;
    border: none;
    background: transparent;
    padding: 0;
}

.mergeDown {
    height: 2px;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
   cursor: row-resize;   
}

.mergeRight {
    width: 2px;
    top: 0;
    right: -1px;
    bottom: 0;
    cursor: col-resize;  
}

</style>