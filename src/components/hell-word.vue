<template>
    <div>
        <ul>
            <li v-for="(item, index) in todos" :key="index">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
      todos: {
          type: Array,
          default: []
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
