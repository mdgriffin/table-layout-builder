<template>
    <tr @contextmenu="openContextMenu($event)" >
        <td colspan="2" contenteditable="contenteditable"><h3>Heading</h3></td>
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