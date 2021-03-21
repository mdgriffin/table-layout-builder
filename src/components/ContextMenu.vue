<template>
    <div class="ctxMenu" v-click-outside="hideContextMenu" :style="{top: yCoord + 'px', left: xCoord + 'px'}">
        <div v-show="addRowOptionsIsOpen">
            <button @click="addRow('key-value-row')">Key/Value Row</button>
            <button @click="addRow('text-input-row')">Text Input Row</button>
            <button @click="addRow('heading-row')">Heading Row</button>
            <button @click="addRow('button-row')">Button Row</button>
        </div>
        <div v-show="!addRowOptionsIsOpen">
            <button @click="deleteRow()">Delete Row</button>
            <button @click="moveRowUp()">Move Up</button>
            <button @click="moveRowDown()">Move Down</button>
            <button @click="showAddRowOptions()">Add Row</button>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
    props: ['xCoord', 'yCoord', 'rowIndex'],
    name: 'context-menu',
    data() {
        return {
            addRowOptionsIsOpen: false
        }
    },
    methods: {
        deleteRow() {
            this.$emit('deleteRow', this.rowIndex);
        },
        moveRowUp() {
            this.$emit('moveRowUp', this.rowIndex);
        },
        moveRowDown() {
            this.$emit('moveRowDown', this.rowIndex);
        },
        showAddRowOptions() {
            this.addRowOptionsIsOpen = true;
        },
        addRow(rowType) {
            this.$emit('addRow', rowType);
        },
        hideContextMenu() {
            this.$emit('clickOutside');
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style>
.ctxMenu {
    position: absolute;
    border: 1px solid #f4f4f4;
    background: #fff;
    color: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,0.1);
}

.ctxMenu button {
    display: block;
    width: 100%;
    background: none;
    border: 1px solid #f4f4f4;
    line-height: 40px;
    padding: 0 40px;
    cursor: pointer;
}

.ctxMenu button:hover {
    background: #f4f4f4;
}
</style>