<template>
    <tr>
        <row-cell @contextMenuOpen="openContextMenu" colspan="2" contenteditable="contenteditable"><h3>Heading</h3></row-cell>
        <slot></slot>
    </tr>
</template>

<script>
import RowCell from '../RowCell.vue';
import rowCommon from './row-common';

export default {
    name: 'heading-row',
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    }
}
</script>

<style scoped>
h3 {
    text-align: center;
}
</style>