<template>
    <div>
        <h1>过渡</h1>

        <button @click="show = !show">
            Toggle
        </button>

        <h4>:duration="1000" 必须比css中设置的时间要短才有效果</h4>
        <transition
          name="fade"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :duration="1000">
            <p v-show="show">hello</p>
        </transition>

        <div id="example-1">
            <button @click="show1 = !show1">
                Toggle render
            </button>
            <transition name="slide-fade">
                <p v-if="show1">hello</p>
            </transition>
        </div>

        <div id="example-2">
            <button @click="show2 = !show2">Toggle show</button>
            <transition name="bounce" enter-active-class="enter-active" leave-active-class="leave-active">
                <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
        </div>
        <footer>底部</footer>
    </div>
</template>

<script>

export default {
  name: 'Transtion',
  data () {
    return {
      show: true,
      show1: true,
      show2: true
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function (el) {
      // ...
      console.log('进入前')
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // ...
      console.log('进入中')
      // done()
    },
    afterEnter: function (el) {
      // ...
      console.log('进入后')
    },
    enterCancelled: function (el) {
      // ...
      console.log('1')
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      console.log('2')
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      // ...
      console.log('3')
      // done()
    },
    afterLeave: function (el) {
      console.log('4')

      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      console.log('5')

      // ...
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

.enter-active {
  animation: bounce-in .5s;
}
.leave-active {
  animation: bounce-in .5s reverse;
}

p {
  margin: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
