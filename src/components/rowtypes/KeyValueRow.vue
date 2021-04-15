<template>
    <tr @contextmenu="openContextMenu($event)" >
        <td contenteditable="contenteditable" @input="onKeyChange">Key</td>
        <td contenteditable="contenteditable" @input="onValueChange">Value</td>
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
        },
        onKeyChange(e) {
            console.log(e.target.innerText);
        },
        onValueChange(e) {
            console.log('on value change: ' + e.target.innerText);
        }
    }
}
</script>