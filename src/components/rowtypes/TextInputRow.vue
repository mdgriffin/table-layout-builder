<template>
    <tr @contextmenu="openContextMenu($event)">
        <td>Key</td>
        <td><input type="text" /></td>
        <slot></slot>
    </tr>
</template>


<script>
export default {
    name: 'text-input-row',
    props: ['rowIndex'],
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    }
}
</script>