<template>
    <div class="test-slot">
        <slot name="header" :msgHHHHHHHH="msg">header</slot>
        <slot name="footer">footer</slot>
        <slot :msgHHHHHHHH="msg">默认</slot>
    </div>
</template>

<script>
export default {
    name: 'TestSlot',
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
