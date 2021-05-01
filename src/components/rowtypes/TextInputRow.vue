<template>
    <tr @contextmenu="openContextMenu" contenteditable="contenteditable">
        <row-cell>Key</row-cell>
        <row-cell><input type="text" /></row-cell>
        <slot></slot>
    </tr>
</template>

<script>
import RowCell from '../RowCell.vue';
import rowCommon from './row-common';

export default {
    name: 'text-input-row',
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    }
}
</script>