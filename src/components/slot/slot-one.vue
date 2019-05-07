<template>
    <a
        v-bind:href="url"
        class="nav-link">

        <slot>没有传来数据时，使用默认值</slot>
    </a>
</template>

<script>
export default {
    name: 'TestSlotOne',
    props: {
        url: {
            type: String,
            default: '/'
        }
    },
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
