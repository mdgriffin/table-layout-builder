<template>
    <td :colspan="colspan">
        Cell {{cellIndex}}
        <slot></slot>
    </td>
</template>

<script>
export default {
    props: ['colspan', 'cellIndex']
}
</script>

<style>
td {
    border: 1px solid red;
}
</style>