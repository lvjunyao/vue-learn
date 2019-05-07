
<script>
export default {
    name: 'RenderTestOne',
    render: function (createElement) {
        return createElement(
            'h' + this.level, // 标签名称
            this.$slots.default // 子节点数组
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
