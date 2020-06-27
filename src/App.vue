<template>
  <div id="app">
    <TreeBrowser :node="root" @onClick="nodeWasClicked" />

    <Prop :userForm="selectedUserForm" v-if="selected" />
  </div>
</template>

<script>
import TreeBrowser from "./components/TreeBrowser.vue";
import Prop from "./components/Prop.vue";
export default {
  name: "App",
  data() {
    return {
      selected: false,
      selectedUserForm: {},
      root: {
        name: "VBA Project",
        children: [
          {
            name: "Forms",
            children: [
              {
                id: 1,
                name: "UserForm",
                visible: true,
                controls: [
                  {
                    id: 1,
                    name: "Hello",
                    type: "button",
                    attributes: {
                      value: "Hello"
                    },
                    style: {
                      position: "absolute",
                      left: "20px",
                      top: "10px",
                      width: "100px",
                      height: "40px",
                      resize: "both",
                      overflow: "auto",
                      zIndex: "1"
                    }
                  },
                  {
                    id: 2,
                    name: "Chandan",
                    type: "input",
                    attributes: {
                      value: "Hello"
                    },
                    style: {
                      position: "absolute",
                      left: "30px",
                      top: "40px",
                      width: "100px",
                      height: "40px",
                      resize: "both",
                      overflow: "auto",
                      zIndex: "1"
                    }
                  }
                ],
                style: {
                  position: "absolute",
                  display: "block",
                  zIndex: "1",
                  borderTop: "40px solid skyblue",
                  borderLeft: "13px solid skyblue",
                  borderRight: "13px solid skyblue",
                  borderBottom: "13px solid skyblue",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  width: "400px",
                  height: "500px",
                  background: "white",
                  borderRadius: "1%",
                  top: "10px",
                  left: "20px"
                },
                innerStyle: {
                  borderTop: "40px solid skyblue",
                  borderLeft: "10px solid skyblue",
                  borderRight: "10px solid skyblue",
                  borderBottom: "10px solid skyblue",
                  borderRadius: "1%",
                  width: "250px",
                  height: "300px",
                  top: "0px",
                  left: "0px",
                  position: "absolute",
                  background: "#fff",
                  marginTop: "5px",
                  marginLeft: "5px",
                  resize: "both",
                  overflow: "auto"
                }
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    nodeWasClicked(node) {
      //  alert(node.id);
      (this.selected = true), (this.selectedUserForm = node);
      console.log(this.selectedUserForm);
    }
  },
  components: {
    TreeBrowser,
    Prop
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;

  height: 80%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  padding-top: 20px;
  border: 2px solid grey;
}
</style>
