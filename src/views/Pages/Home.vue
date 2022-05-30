<template>
  <Article>
    <Index />
  </Article>
</template>

<script>
import Article from "../../components/Article.vue"
import Index from '../../markdown/_index.md'
export default {
  name: "Home",
  components: {Article, Index},
}
</script>

<style scoped>

</style>
