var template = `
    <tr  class="button-row">
        <row-cell colspan="2" @contextMenuOpen="openContextMenu">
            <button @contextmenu="openButtonOptions($event, buttonIndex)" contenteditable="contenteditable" v-for="(button, buttonIndex) in buttons" :key="'rowBtn-' + buttonIndex">{{button}}</button>
        </row-cell>
        <context-menu
            v-if="ctxMenuVisible"
            :x-coord="ctxMenuX"
            :y-coord="ctxMenuY" 
            @clickOutside="closeButtonOptionsContextMenu">
            <button @click="addButtonAfter">Add Button After</button>
            <button @click="addButtonBefore">Add Button Before</button>
            <button @click="deleteButton">Delete Button</button>
    </context-menu>
    </tr>
`;


import ContextMenu from '../context-menu.js';
import RowCell from '../row-cell.js';
import rowCommon from './row-common.js';

export default {
    name: 'button-row',
    template,
    props: ['rowIndex'],
    mixins: [rowCommon],
    data() {
        return {
            buttons: ['Confirm', 'Cancel'],
            ctxMenuVisible: false,
            ctxMenuX: 0,
            ctxMenuY: 0,
            selectedButtonIndex: -1
        }
    },
    components: {
        ContextMenu,
        RowCell
    },
    methods: {
        closeButtonOptionsContextMenu() {
            this.ctxMenuVisible = false;
        },
        openButtonOptions(e, buttonIndex) {
            e.preventDefault();
            e.stopPropagation();
            this.selectedButtonIndex = buttonIndex;
            this.ctxMenuX = e.clientX;
            this.ctxMenuY = e.clientY;
            this.ctxMenuVisible = true;
            
        },
        addButtonAfter() {
            this.ctxMenuVisible = false;
            this.buttons.splice(this.selectedButtonIndex + 1, 0, 'Button')
        },
        addButtonBefore() {
            this.buttons.splice(this.selectedButtonIndex, 0, 'Button')
            this.ctxMenuVisible = false;
        },
        deleteButton() {
            this.buttons.splice(this.selectedButtonIndex, 1);
            this.ctxMenuVisible = false;
        }
    }
}