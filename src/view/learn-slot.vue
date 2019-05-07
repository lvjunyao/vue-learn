<template>
    <div class="leran-solt">
        <h1>插槽</h1>
        <test-slot-one url="/home">
            这个是有传数据
        </test-slot-one>

        <h1>这个是插槽默认值</h1>
        <test-slot-one url="/">
        </test-slot-one>

        <h1>具名插槽</h1>
        <test-slot-name>
            <!-- 当不写name时，自动匹配没有name的插槽 -->
            <!-- 1. main -->

            <!-- 2. 这种方式权重更高 -->
            <template v-slot:default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>

            <!-- 上面两种方式都可以 -->

            <template v-slot:header>
                header
            </template>

            <template v-slot:footer>
                footer
            </template>
        </test-slot-name>

        <h1>作用域插槽</h1>
        <test-slot-scope>
            <!-- 插槽传过来的值都保存在一个对象中 -->
            <template v-slot:default="{user1: person}">
                person: {{person}}
            </template>

            <template v-slot:scopeone="slotProps">
                {{slotProps}}
            </template>
        </test-slot-scope>

        <!-- .
            插槽传过来的值都保存在一个对象中当被提供的内容只有默认插槽时，
            组件的标签才可以被当作插槽的模板来使用。
            这样我们就可以把 v-slot 直接用在组件上 -->
        <test-slot-scope v-slot:default="slotProps">
            {{slotProps}}
        </test-slot-scope>

        <h1>接口插槽</h1>

        <test-slot-prop v-slot="{user}">
            {{user}}
        </test-slot-prop>

        <h1>具名插槽的缩写</h1>
        <!-- 具名插槽的缩写 -->
        <test-slot-scope>
            <!-- 插槽传过来的值都保存在一个对象中 -->
            <template #default="{user1: person}">
                person: {{person}}
            </template>

            <template #scopeone="slotProps">
                {{slotProps}}
            </template>

            <template #scopetwo>
                缩写
            </template>
        </test-slot-scope>

        <h1>这是一次综合应用</h1>
        <test-tolist :todos="todos">
            <template #todo="{todo}">
                {{todo.name}}
            </template>
        </test-tolist>
    </div>
</template>

<script>
// 插槽
import SlotOne from '@/components/slot/slot-one'
// 具名插槽
import SlotName from '@/components/slot/slot-name'
// 作用域插槽
import SlotScope from '@/components/slot/slot-scope'
// 解构插槽
import SlotProp from '@/components/slot/slot-prop'

export default {
    name: 'learnSlot',
    data () {
        return {
            todos: [
                {name: '黄林'},
                {name: '吕俊瑶'},
                {name: '张胜'},
                {name: '刘宏伟'},
                {name: '谭佳能'}
            ]
        }
    },
    mounted () {
    },
    components: {
        [SlotOne.name]: SlotOne,
        [SlotName.name]: SlotName,
        [SlotScope.name]: SlotScope,
        [SlotProp.name]: SlotProp,
        'test-tolist': () => import('@/components/slot/tolist') // 这种方法不是很方便
    },
    computed: {
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leran-solt {
        padding-bottom: 100px;
    }
</style>
