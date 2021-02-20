<template>
    <tr>
        <td colspan="2"><h3>Heading</h3></td>
        <td><slot></slot></td>
    </tr>

</template>

<script>
export default {
    name: 'heading-row'
}
</script>

<style scoped>
h3 {
    text-align: center;
}
</style>