<template>
    <tr @contextmenu="openContextMenu($event)" contenteditable="contenteditable">
        <td>Key</td>
        <td>
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </td>
        <slot></slot>
    </tr>
</template>

<script>
export default {
    name: 'select-row',
    props: ['rowIndex'],
    methods: {
        openContextMenu(e) {
            this.$emit('contextMenuOpen', {e: e, rowIndex: this.rowIndex});
        }
    }
}
</script>