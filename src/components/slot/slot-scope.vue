<template>
    <!-- 作用于插槽 -->
    <div class="container-scope">
        <!-- 其实插槽传值和父组件给子组件传值差不多 -->
        <div>
            <slot :user="user" :user1="user1">
                {{user.firstName}}
            </slot>
        </div>

        <div>
            <slot name="scopeone" :user1="user1">
                {{user1.firstName}}
            </slot>
        </div>

        <div>
            <slot name="scopetwo">
                123
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestSlotScope',
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
