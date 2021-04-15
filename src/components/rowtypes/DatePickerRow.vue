<template>
    <tr @contextmenu="openContextMenu($event)" >
        <td contenteditable="contenteditable">Key</td>
        <td>
            <input type="text" ref="datepicker" />
        </td>
        <slot></slot>
    </tr>
</template>

<script>
import Pikaday from 'pikaday'

export default {
    name: 'date-picker-row',
    props: ['rowIndex'],
    data() {
        return {
            datepicker: null
        }
    },
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    },
    mounted() {
        this.datepicker = new Pikaday({ field: this.$refs.datepicker });
    }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css');
</style>