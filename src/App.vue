<template>
  <div id="app">
    <a href="#" class="close"></a>
    <span>Project VBA</span>
    <hr>
    <div>
    <TreeBrowser :node="root" @onClick="nodeWasClicked" style="cursor:pointer;"/>
    <hr>

    <Prop :userForm="selectedUserForm" v-if="selected" />
    </div>
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
        userForm: [
          {
            name: "Forms",
            selected: "",
      prevModalZIndex: 2,
            userForm: [
              {
          id: 1,
          name: "UserForm1",
          selected: "label",
          controls: [
            {
              id: 1,
              name: "Label",
              type: "label",
              attributes: {
                value: "Good Morning"
              },
              style: {
                position: "absolute",
                left: "50",
                top: "54",
                width: "100",
                height: "40",
                resize: "both",
                overflow: "auto",
                zIndex: "1",
                border: "1px solid"
              }
            }
          ],

          style: {
            position: "absolute",
            display: "none",
            zIndex: 1,
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
          inner: {
            borderTop: "40px solid skyblue",
            borderLeft: "10px solid skyblue",
            borderRight: "10px solid skyblue",
            borderBottom: "10px solid skyblue",
            borderRadius: "1%",
            width: "250px",
            height: "300px",
            top: "0px",
            left: 0,
            background: "#fff",
            marginTop: "5px",
            marginLeft: "5px",
            resize: "both",
            overflow: " auto"
          },
          headerText: {
            marginTop: "-35px",
            marginLeft: "-11px",
            position: "absolute"
          },
          innerHeaderText: {
            top: "4px",
            position: "absolute !important"
          },
          closeButton: {
            position: " absolute",
            right: "-208px"
          },
          closeInnerButton: {
            position: "absolute",
            right: "-174px"
          }
        },
        {
          id: 2,
          name: "UserForm2",
          controls: [
            {
              id: "",
              name: "Input",
              type: "input",
              attributes: {},
              style: {}
            },
            {
              id: 2,
              name: "Label",
              type: "label",
              caption: "Text for label",
              style: {
                top: "10px",
                left: "20px",
                width: "200px",
                height: "150px"
              },
              attributes: {
                name: "",
                value: ""
              }
            }
          ],
          style: {
            position: "fixed",
            display: "none",
            zIndex: 1,
            borderTop: "40px solid skyblue",
            borderLeft: "13px solid skyblue",
            borderRight: "13px solid skyblue",
            borderBottom: "13px solid skyblue",
            paddingTop: "5px",
            paddingLeft: "10px",
            width: "400px",
            height: "500px",
            background: "red",
            borderRadius: "1%"
          },
          inner: {
            borderTop: "40px solid skyblue",
            borderLeft: "10px solid skyblue",
            borderRight: "10px solid skyblue",
            borderBottom: "10px solid skyblue",
            borderRadius: "1%",
            width: "250px",
            height: "300px",
            top: "0px",
            left: 0,
            position: "absolute",
            background: "#fff",
            marginTop: "5px",
            marginLeft: "5px",
            resize: "both",
            overflow: " auto"
          },
          headerText: {
            marginTop: "-35px",
            marginLeft: "-11px",
            position: "absolute"
          },
          innerHeaderText: {
            marginTop: "-35px",
            marginLeft: "-200px",
            position: "absolute"
          },
          closeButton: {
            position: " absolute",
            right: "-208px"
          },
          closeInnerButton: {
            position: "absolute",
            right: "-174px"
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
  padding-top: 5px;
  /* padding-bottom: 5px; */
  border: 2px solid grey;
}
span{
  text-align: center;
  top: 0%;
  width: 250px;
  background-color: #cdd4db;
  /* padding-bottom: 8px; */
  margin-bottom:8px ;
}
.close {
  position: absolute;
  right: 35px;
  top: 5px;
  width: 5px;
  height: 5px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>
