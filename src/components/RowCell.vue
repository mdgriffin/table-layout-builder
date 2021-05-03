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
            var self = this;

            console.log('firing contextMenuOpen')
            this.$emit('contextMenuOpen', {e: e, contextOptions: {
                'ctx-select-class': {
                text: 'Select Class',
                subOptions: {
                    'ctx-select-class-1': {text: 'Class 1', action: () => self.setClass('class1')},
                    'ctx-select-class-2': {text: 'Class 2', action: () => self.setClass('class2')}
                },
            }}})
        },
        setClass(className) {
            console.log('setting class to ' + className)
        }
    }
}
</script>