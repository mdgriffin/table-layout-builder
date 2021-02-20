<template>
    <tr>
        <td>Key</td>
        <td><input type="text" /></td>
        <td><slot></slot></td>
    </tr>
</template>


<script>
export default {
    name: 'text-input-row'
}
</script>