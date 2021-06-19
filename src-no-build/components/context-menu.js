var template = `
    <div class="ctxMenu" v-click-outside="hideContextMenu" :style="{top: yCoord + 'px', left: xCoord + 'px'}">
        <slot></slot>
    </div>
`;

export default {
    props: ['xCoord', 'yCoord'],
    name: 'context-menu',
    template: template,
    methods: {
        hideContextMenu() {
            this.$emit('clickOutside');
        }
    }
}