<template>
    <!-- 具名插槽 -->
    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            <slot name="todo" :todo="todo">
                默认值
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TestTolist',
    props: {
        todos: {
            type: Array,
            default: () => []
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
