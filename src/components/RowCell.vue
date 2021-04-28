<template>
    <td @contextmenu="openContextMenu($event)" colspan="colspan">
        <slot></slot>
    </td>
</template>


<script>
export default {
    name: 'row-cell',
    prop: ['colspan'],
    methods: {
        openContextMenu(e) {
            console.log('firing contextMenuOpen')
            this.$emit('contextMenuOpen', {e: e, contextOptions: [{text: 'Do Something', action: this.doSomething}]})
        },
        doSomething() {
            console.log('doSomething')
        }
    }
}
</script>