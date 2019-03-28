<template>
    <div class="test-props">
        <p>注意那些 prop 会在一个组件实例创建之前进行验证</p>
        <div>{{isPublished}}</div>
        <ul>
            <li>id:{{id}}</li>
            <li>title:{{title}}</li>
        </ul>
        <p>{{msg}}</p>
        <p>{{msgData}}</p>
        <p>{{localData}}</p>
        <p>{{propF}}</p>
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
        >
    </div>
</template>

<script>
export default {
    name: 'TestProps',
    inheritAttrs: false,
    props: {
        value: [String, Number],
        isPublished: Boolean,
        id: Number,
        title: String,
        msg: [String, Number],
        // 自定义验证函数
        propF: {
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    data () {
        return {
            msgData: this.msg
        }
    },
    computed: {
        localData () {
            return this.msg + ' 处理后的值'
        },
        inputListeners: function () {
            var vm = this
            console.log(this.$listeners)
            // `Object.assign` 将所有的对象合并为一个新对象
            return Object.assign({},
                // 我们从父级添加所有的监听器
                vm.$listeners,
                // 然后我们添加自定义监听器，
                // 或覆写一些监听器的行为
                {
                    // 这里确保组件配合 `v-model` 的工作
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped 规定了css的作用域 */
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
