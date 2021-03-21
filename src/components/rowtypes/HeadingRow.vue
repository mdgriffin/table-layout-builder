<template>
    <tr @contextmenu="openContextMenu($event)" contenteditable="contenteditable">
        <td colspan="2"><h3>Heading</h3></td>
        <slot></slot>
    </tr>
</template>

<script>
export default {
    name: 'heading-row',
    props: ['rowIndex'],
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    }
}
</script>

<style scoped>
h3 {
    text-align: center;
}
</style>