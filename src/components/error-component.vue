<template>
    <div>
        加载出错
    </div>
</template>

<script>
export default {
    name: 'ErrorComponent',
    props: {
    },
    data () {
        return {
            msg: '附件'
        }
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test-slot {
    color: red;
}
</style>
