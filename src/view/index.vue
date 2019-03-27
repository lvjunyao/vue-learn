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
    </div>
</template>

<script>
import HellWord from '@/components/hell-word'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 1,
      message: 'hello',
      firstName: '',
      lastName: '',
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
      }
    }
  },
  components: {
      HellWord
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
      this.object.father = 123153
      if (this.loginType === 'username') {
        this.loginType = ''
      } else {
        this.loginType = 'username'
      }
    },
    handleOne (msg) {
      alert(msg)
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
</style>
