<template>
    <input type="number" v-model="count">
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
    },
    watch: {
        count (val, oldval) {
            this.$emit('input', val)
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
