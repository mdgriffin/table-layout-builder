<template>
        <button @mouseenter="showDropdown" @mouseleave="hideDropdown">
            {{text}}
        <div v-show="isDropdownVisible">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: 'menu-button',
    props: ['text'],
    data() {
        return  {
            isDropdownVisible: false
        }
    },
    methods: {
        showDropdown() {
            console.log('entering')
            this.isDropdownVisible = true;
        },
        hideDropdown() {
            this.isDropdownVisible = false;
        }
    }
}
</script>

<style scoped>
button {
    position: relative;
    cursor: pointer;
}

button div {
    position: absolute;
    top: 100%;
    left: 0;
    background: black;
    color: #fff;
    padding: 10px;
    z-index: 1;
}
</style>