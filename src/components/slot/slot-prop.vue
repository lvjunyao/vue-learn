<template>
    <!-- 结构插槽 -->
    <div class="container-prop">
        <div>
            <slot :user="user" :user1="user1">
                {{user.firstName}}
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestSlotProp',
    props: {
    },
    data () {
        return {
            user: {
                firstName: '黄林',
                lastName: '吕俊瑶'
            },

            user1: {
                firstName: '张胜',
                lastName: '刘宏伟'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
