<template>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
    name: 'ButtonCounter',
    props: {
    },
    data () {
        return {
            count: 0
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
