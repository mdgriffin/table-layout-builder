export default {
    methods: {
        openContextMenu(cellOptions) {
            this.$emit('contextMenuOpen', {e: cellOptions.e, rowIndex: this.rowIndex, contextOptions: cellOptions.contextOptions});
        },
    }
}