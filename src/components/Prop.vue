<template>
  <div>
    <div v-if="hasChildren">
      <!-- <TreeBrowser :node="props"/> -->
      <Prop
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @onClick="(node) => $emit ('onClick',node)"
      />
    </div>
  </div>
</template>
<script>
// import TreeBrowser from './TreeBrowser.vue'
export default {
  name: "Prop",
  props: {
    node: Object
  },
  components: {},
  methods: {
    nodeClicked() {
      if (!this.hasChildren) {
        this.$emit("onClick", this.node);
      }
    },
    hasChildren() {
      return this.node.children;
    }
  }
};
</script>
<style scoped>
.node {
  text-align: left;
}
</style>