<template>
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
    
</template>

<script>
import ContextMenu from '../ContextMenu.vue';
import RowCell from '../RowCell.vue';

export default {
    name: 'button-row',
    props: ['rowIndex'],
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
        openContextMenu(cellOptions) {
            this.$emit('contextMenuOpen', {e: cellOptions.e, rowIndex: this.rowIndex, contextOptions: cellOptions.contextOptions});
        },
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
</script>

<style>
.button-row td {
    text-align: center;
}
</style>