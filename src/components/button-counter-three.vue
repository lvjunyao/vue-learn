<template>
    <button v-on:click="$emit('update:objtitle', ++myObj.mycount)">You clicked me {{ myObj }} times.</button>
</template>

<script>
export default {
    name: 'ButtonCounterThree',
    props: {
        obj: Object
    },
    data () {
        return {
            myObj: this.obj
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
