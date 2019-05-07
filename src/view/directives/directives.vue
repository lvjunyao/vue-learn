<template>
    <div>
        <h1>自定义指令</h1>
        <input type="text" v-model="message" v-demo:foo.a.b="message" placeholder="自动获取加点">

        <p>Scroll down the page</p>
        <p v-tack:left="[dynamicleft]">I’ll now be offset from the left instead of the top</p>
    </div>
</template>

<script>
export default {
    name: 'directives',
    data () {
        return {
            message: '1111',
            dynamicleft: 500
        }
    },
    directives: {
        tack: {
            bind (el, binding, vnode) {
                console.log(binding)
                el.style.position = 'fixed'
                const s = (binding.arg === 'left' ? 'left' : 'top')
                console.log(el.style[s], binding.value)
                el.style[s] = binding.value + 'px'
            }
        },
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        },
        demo: {
            /**
             * el
             *
             * binding
             *
             * vnode
            */
            // name：指令名，不包括 v- 前缀。
            // value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
            // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
            // expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
            // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
            // modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
            // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
            bind (el, binding, vnode) {
                console.log('bind')
                console.log(el)
                let obj = {
                    name: binding.name, // "demo"
                    value: binding.value, // '1111'
                    expression: binding.expression, // message
                    argument: binding.arg, // "foo"
                    modifiers: binding.modifiers, // {a: true, b: true}
                    vnode: vnode // Vue 编译生成的虚拟节点
                }
                console.log(obj)
            },
            // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
            inserted (el) {
                console.log('inserted')
                console.log(el)
                el.focus()
            },
            update (el) {
                console.log('update')
                console.log(el)
                // el.focus()
            },
            componentUpdated (el) {
                console.log('componentUpdated')
                console.log(el)
                // el.focus()
            },
            unbind (el) {
                console.log('unbind')
                console.log(el)
                // el.focus()
            }
        }
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
