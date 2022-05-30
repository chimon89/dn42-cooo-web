<template>
  <Article>
    <NodeList></NodeList>
  </Article>
</template>

<script>
import Article from "../../components/Article.vue"
import NodeList from '../../markdown/nodes.md'
export default {
  name: "NodeInfo",
  components: {Article, NodeList},
}
</script>

<style scoped>

</style>
