<template>
    <tr  contenteditable="contenteditable">
        <row-cell @contextMenuOpen="openContextMenu">Key</row-cell>
        <row-cell @contextMenuOpen="openContextMenu">
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </row-cell>
        <slot></slot>
    </tr>
</template>

<script>
import RowCell from '../RowCell.vue';
import rowCommon from './row-common';

export default {
    name: 'select-row',
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    }
}
</script>