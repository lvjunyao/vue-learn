<template>
    <div>
        <h1>首页</h1>
        <ul>
          <!-- 使用组件 个人感觉这个功能相当牛逼 -->
          <li is="HellWord" v-for="(item, index) in todos" :key="index" class="bg-color" :item="item"></li>
        </ul>
        <!-- 加上v-once后花括号中的值不会再次渲染 -->
        <p>加上v-once后花括号中的值不会再次渲染</p>
        <p v-once>只会渲染一次:{{msg}}</p>
        <p>msg或改变:{{msg}}</p>
        <button @click="handleTestOnce()">改变msg</button>
        <p>v-on:[eventName]="doSomething"从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：  完全不知道有什么用</p>
        <p>@click.prevent === event.preventDefault() 取消时间默认行为</p>
        <div id="example">
          <p>Original message: "{{ message }}"</p>
          <p>Computed reversed message: "{{ reversedMessage + now}}"</p>
        </div>
        <div>
          <span>{{fullName}}</span>
          <span>{{lastName}}</span>
          <span :style="[baseColor, bgColor]">{{firstName}}</span>
        </div>

        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input v-model="inputData.username" placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
          <label>Email</label>
          <input v-model="inputData.email" placeholder="Enter your email address" key="email-input">
        </template>
        <button @click="handleSwitch()">switch</button>

        <ul>
          <li v-for="(item, index) of todos" :key="index">{{item}}</li>
          <li v-for="(item, key) of object" :key="key">{{key + ':' + item}}</li>
          <!-- <li v-for="(item, key) in object" :key="key">{{key + ':' + item}}</li> -->
        </ul>

        <div @click.capture="handleOne('one')">
          <span @click="handleOne('two')">13</span>
        </div>

        <div @click.self="handleOne('one')">
          <span @click="handleOne('two')">13</span>
        </div>

        <input @keyup.alt.67="handleOne('two')">

        <div @click.ctrl="handleOne('one')">Do something</div>

        <div @click.right="handleOne('one')">Do something</div>

        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="handleOne('two')">A</button>

        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <button @click.ctrl.exact="handleOne('two')">A</button>

        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">A</button>

        <!-- lazy 值不会实时改变-->
        <input v-model.lazy="msg" >

        <input v-model.number="age" type="number">
        <span>值会自动转换为Number{{typeof age}}</span>

        <div id="components-demo">
            <button-counter></button-counter>
        </div>

        <!-- 关于input -->
        <p>ceshi </p>
        <test-input v-model="age" @focus.native="handleOne('two')" @change.native="handleOne('one')"></test-input>

        <!-- 不同组件间切换 -->
        <!-- <button @click="currentTabComponent === 'ButtonCounter' ? currentTabComponent = 'TestSlot' : currentTabComponent = 'ButtonCounter'">切换</button>
        <component v-bind:is="currentTabComponent"></component> -->

        <!-- props -->
        <test-props is-published></test-props>
        <test-props
            class="date-picker-theme-dark"
            data-date-picker="activated"
            :is-published="false"
            v-bind="propsObj"
            propF="warning"
            v-model="msg"
            required
            placeholder="Enter your username"
            @focus="handleOne('two')"
            :msg="msg"></test-props>
        <test-props-two v-model="checked"></test-props-two>
        <p>{{checked}}</p>
        <p>{{count}}</p>
        <button-counter-two :count="count" v-on:update:title="count = $event"></button-counter-two>
        <p>{{obj}}</p>
        <button-counter-two :count="count" v-bind.sync="count"></button-counter-two>
        <button-counter-three :obj="obj" v-bind.sync="obj"></button-counter-three>

        <test-slot>

            <template v-slot:header="msgHHHHHHHH">
                <h1>Here might be a {{msgHHHHHHHH.msgHHHHHHHH}} page title</h1>
                <h1>Here might be a {{msgHHHHHHHH}} page title</h1>
            </template>
            132
        </test-slot>
        <p>jjjjjjjjjjjjjjjjjjjjjj</p>
        <test-slot v-slot:default="msgHHHHHHHH">
            <h1>Here might be a {{msgHHHHHHHH.msgHHHHHHHH}} page title</h1>
        </test-slot>

        <p>解构</p>
        <test-slot v-slot="{msgHHHHHHHH: header}">
            <h1>Here might be a page {{header}}title</h1>
        </test-slot>

        <p>动态插槽名没搞懂</p>
        <test-slot>
            <!-- <template v-slot:[dynamicSlotName]>
                <h1>Here might be a page title</h1>
            </template> -->
            <h1>Here might be a page title</h1>
        </test-slot>

        <h1>辅助测试路由</h1>
        <button @click="handleNodeTest()">请求数据</button>
        <button @click="$router.push('/learn-slot')"></button>
        <h1>过渡</h1>

        <button @click="show = !show">
            Toggle
        </button>

        <transition name="fade">
            <p v-show="show">hello</p>
        </transition>
    </div>
</template>

<script>
import HellWord from '@/components/hell-word'
import ButtonCounter from '@/components/button-counter'
import ButtonCounterTwo from '@/components/button-counter-two'
import ButtonCounterThree from '@/components/button-counter-three'
import TestInput from '@/components/test-input'
import TestSlot from '@/components/test-slot'

export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
      msg: 1,
      age: 0,
      obj: {
          mycount: 1,
          title: 'test'
      },
      slotName: 'footer',
      message: 'hello',
      firstName: '',
      lastName: '',
      currentTabComponent: 'ButtonCounter',
      propsObj: {id: 1, title: 'hsdjfsd'},
      baseColor: {
        color: 'red',
        'font-size': '30px'
      },
      bgColor: {
        'background-color': '#F5F5F5'
      },
      inputData: {
        username: '',
        email: ''
      },
      loginType: 'username',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      checked: false,
      count: 0
    }
  },
  components: {
      ButtonCounterTwo,
      HellWord,
      ButtonCounter,
      TestInput,
      TestSlot,
      ButtonCounterThree
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return this.message + Date.now()
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    handleTestOnce () {
      // this.fullName.set('lin huang')
      this.object.father = '11'
      // this.$set(this.object, 'mum', 'huan')
      this.object = Object.assign({}, this.object, {
        ages: 27,
        favoriteColor: 'Vue Green'
      })
      this.fullName = 'lin huang' + Date.now()
      this.message = this.message + 'huanglin'
      this.msg++
    },
    handleSwitch () {
        if (this.currentTabComponent === 'ButtonCounter') {
            this.currentTabComponent = 'TestSlot'
        } else {
            this.currentTabComponent = 'ButtonCounter'
        }

      this.object.father = 123153
      if (this.loginType === 'username') {
        this.loginType = ''
      } else {
        this.loginType = 'username'
      }
    },
    handleOne (msg) {
      console.log(msg)
    },

    handleNodeTest () {
      this.$http.post('http://localhost:3300/b', {name: '黄林'})
      .then(data => {
        console.log(data)
      })
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

.bg-color {
  background-color: #f5f5f5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
