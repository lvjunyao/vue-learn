<template>
    <div>
        <anchored-heading :level="1">1111111</anchored-heading>

        <render-test-one></render-test-one>
    </div>
</template>

<script>
import AnchoredHeading from '@/components/render/anchored-heading'
import RenderTestOne from '@/components/render/render-test-one'
export default {
    name: 'HelloWorld',
    data () {
        return {
        }
    },
    components: {
        [AnchoredHeading.name]: AnchoredHeading,
        [RenderTestOne.name]: RenderTestOne
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
