var template = `
    <tr>
        <row-cell @contextMenuOpen="openContextMenu" contenteditable="contenteditable">Key</row-cell>
        <row-cell @contextMenuOpen="openContextMenu">
            <input type="text" ref="datepicker" />
        </row-cell>
        <slot></slot>
    </tr>
`;

//</script>import Pikaday from 'pikaday';
import rowCommon from './row-common.js';
import RowCell from '../row-cell.js';

export default {
    name: 'date-picker-row',
    props: ['rowIndex'],
    mixins: [rowCommon],
    components: {
        RowCell
    },
    data() {
        return {
            datepicker: null
        }
    },
    mounted() {
        this.datepicker = new Pikaday({ field: this.$refs.datepicker });
    }
}