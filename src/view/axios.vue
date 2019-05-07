<template>
    <div>
        axios
        {{test}}

        <button @click="getTest()">submit</button>
    </div>
</template>

<script>

export default {
    name: 'axios',
    data () {
        return {
          msg: 'welcome to Your vue.js App',
          test: ''
        }
    },
    mounted () {
      this.$axios.v(this)
        .test({
            data: {a: 1},
            type: '',
            success: (data) => {
                console.log(data)
                this.test = data
            }
        })
      console.log(this.test)
    },
    components: {
    },
    computed: {
    },
    methods: {
        async getTest () {
            let _data = await this.$axjx.get('../static/test.json')

            console.log(_data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
