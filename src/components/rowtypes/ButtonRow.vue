<template>
    <tr @contextmenu="openContextMenu($event)" contenteditable="contenteditable">
        <td colspan="2">
            <button>Button 1</button>
            <button>Button 2</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'button-row',
    props: ['rowIndex'],
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    }
}
</script>

<style>
td {
    text-align: center;
}
</style>