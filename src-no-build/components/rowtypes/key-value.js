var template = `
    <tr>
        <row-cell @contextMenuOpen="openContextMenu" contenteditable="contenteditable" @input="onKeyChange">Key</row-cell>
        <row-cell @contextMenuOpen="openContextMenu" contenteditable="contenteditable" @input="onValueChange">Value</row-cell>
        <slot></slot>
    </tr>
`;

import RowCell from '../row-cell.js';
import rowCommon from './row-common.js';

export default {
    name: 'key-value-row',
    template: template,
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    },
    methods: {
        onKeyChange(e) {
            console.log(e.target.innerText);
        },
        onValueChange(e) {
            console.log('on value change: ' + e.target.innerText);
        }
    }
}