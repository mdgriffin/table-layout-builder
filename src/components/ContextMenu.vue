<template>
    <div class="ctxMenu" v-click-outside="hideContextMenu" :style="{top: yCoord + 'px', left: xCoord + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
    props: ['xCoord', 'yCoord'],
    name: 'context-menu',
    methods: {
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