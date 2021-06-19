var template = `
    <tr @contextmenu="openContextMenu" contenteditable="contenteditable">
        <row-cell>Key</row-cell>
        <row-cell><input type="text" /></row-cell>
        <slot></slot>
    </tr>
`;

import RowCell from '../row-cell.js';
import rowCommon from './row-common.js';

export default {
    name: 'text-input-row',
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    }
}