<template>
    <tr @contextmenu="openContextMenu($event)">
        <td>Key</td>
        <td>Value</td>
        <slot></slot>
    </tr>
</template>

<script>
export default {
    name: 'key-value-row',
    props: ['rowIndex'],
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    }
}
</script>