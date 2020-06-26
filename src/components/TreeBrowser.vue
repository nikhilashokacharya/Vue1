<template>
  <div>
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <span v-if="hasChildren" class="type">{{expanded ? '&#9660;' : '&#9658;'}}</span>
      <span class="type" v-else>&#9671;</span>
      {{node.name}}
    </div>

    <ul v-if="expanded">
      <TreeBrowser
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
        @onClick="(node) => $emit('onClick',node)"
      />
    </ul>
    <!-- <Prop :node="root" @onClick="nodeWasClicked" /> -->
  </div>
</template>

<script>
// import Prop from "./Prop.vue";
export default {
  name: "TreeBrowser",
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0
    }
  },
  // data() {
  //   return {
  //     root: {
  //       name: "UserForm1",
  //       children: [
  //         {
  //           id: "Userform1",
  //           controls: [
  //             {
  //               id: 1,
  //               type: "label",
  //               name: "label1",
  //               properties: {
  //                 name: "",
  //                 value: "",
  //                 top: 12,
  //                 left: 34,
  //                 width: 100,
  //                 height: 150,
  //                 color: "red"
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   };
  // },
  components: {
    // Prop
  },
  data(){
      return{
          expanded: false,
      }
  },
  methods: {
    nodeClicked() {
      this.expanded = !this.expanded;
      if (!this.hasChildren) {
        this.$emit("onClick", this.node);
      }
    },
    nodeWasClicked(node) {
      alert(node.id);
    }
  },
  computed: {
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

