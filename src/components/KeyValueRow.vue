<template>
    <tr>
        <td>Key</td>
        <td>Value</td>
        <td><slot></slot></td>
    </tr>
</template>

<script>
export default {
    name: 'key-value-row'
}
</script>