<template>
    <div>
        loading...
    </div>
</template>

<script>
export default {
    name: 'LoadingComponent',
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
