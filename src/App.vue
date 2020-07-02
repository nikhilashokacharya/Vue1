<template>
  <div id="app">
    <Header />
    <hr class="hr" />
    <div class="sidenav">
      <!-- <splitpanes class="default-theme" horizontal style="height: 610px">
      <div  splitpanes-default="25" splitpanes-min="10" splitpanes-max="75">-->
      <div class="sideheader">
        <span class="sideheader1">
          Project - VBAProject
          <button style="float:right">
            <b>X</b>
          </button>
        </span>
      </div>

      <div>
        <i class="material-icons">&#xe2c8;</i>
      </div>
      <hr />

      <div>
        <TreeBrowser :node="root" @onClick="nodeWasClicked" style="cursor:pointer;" />
        <hr />
        <!-- <select-dropdown :userForm="selectedUserForm" v-if="selected" /> -->
        <div class="sideheader">
          <span class="sideheader1">
            Properties - UserForm1
            <button style="float:right">
              <b>X</b>
            </button>
          </span>
        </div>
        <UserFormPropertiesList />
        <!-- 3 comp -->

        <!-- LHS -->
      </div>

      <!-- <div splitpanes-default="50">RHS
      </div>-->
      <!-- </splitpanes> -->
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import TreeBrowser from "./components/TreeBrowser.vue";
// import LabelControlTable from "./components/LabelControlTable";
// import Splitpanes from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'
// import DesignPanel from "./components/DesignPanel.vue"
import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";
// import SelectDropdown from "./components/SelectDropdown.vue";
// import Sidebar from "./components/Sidebar.vue"
import Header from "./components/Header.vue";
// import userFormTable from "./components/userFormTable.vue";
export default {
  name: "App",
  data() {
    return {
      selected: false,
      selectedUserForm: {},
      root: {
        name: "VBA Project(Book1)",
        userForms: [
          {
            name: "Forms",
            selectedControl: "",
            prevModalZIndex: 2,
            userForms: [
              {
                id: 1,
                name: "UserForm",
                controls: [
                  {
                    id: 1,
                    name: "Label",
                    type: "label",
                    attributes: {
                      value: "Good Morning"
                    },
                    //controls
                    style: {
                      left: "70px",
                      top: "100px",
                      width: "100px",
                      height: "40px",
                      resize: "both",
                      overflow: "auto",
                      zIndex: "1",
                      border: "1px solid"
                    }
                  },
                  {
                    id: 2,
                    name: "Label",
                    type: "label",
                    attributes: {
                      value: "Good Morning"
                    },
                    style: {
                      left: "100px",
                      top: "140px",
                      width: "100px",
                      height: "40px",
                      resize: "both",
                      overflow: "auto",
                      zIndex: "1",
                      border: "1px solid"
                    }
                  }
                ],
                // leave as it is
                outerWindowStyle: {
                  container: {
                    position: "absolute",
                    textAlign: "left",
                    border: "3px solid rgb(159, 196, 224)",
                    width: "600px",
                    height: "400px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    backgroundColor: "white",
                    display: "block",
                    zIndex: "2"
                  },
                  top: {
                    padding: "8px",
                    background:
                      "linear-gradient(30deg,#adc9e7ba 0%,#a2b4cee6 50%,#9eadd0db 51%,#a1bdd28f 100%)",
                    height: "21px"
                  },
                  closeButton: {
                    right: "10px",
                    position: "absolute",
                    backgroundColor: "red"
                  },
                  "closeButton:hover": {
                    backgroundColor: "green"
                  }
                },
                innerWindowStyle: {
                  container: {
                    position: "absolute",
                    textAlign: "left",
                    border: "3px solid rgb(159, 196, 224)",
                    width: "375px",
                    height: "200px",
                    resize: "both",
                    overflow: "auto",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    borderStyle: "groove",
                    maxWidth: "100%",
                    maxHeight: "350px",
                    margin: "4px"
                  },
                  top: {
                    padding: "8px",
                    background:
                      "linear-gradient(30deg,#adc9e7ba 0%,#a2b4cee6 50%,#9eadd0db 51%,#a1bdd28f 100%)",
                    height: "21px"
                  },
                  innerContainer: {
                    width: "100%",
                    height: "calc(100% - 37px)",
                    backgroundColor: "#e3e3e357",
                    position: "absolute",
                    left: "0px",
                    top: "37px",
                    backgroundSize: " 9px 19px",
                    backgroundImage:
                      "radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px)"
                  },
                  closeButton: {
                    right: "10px",
                    position: "absolute"
                  }
                }
              }
            ],
            show: false
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
    UserFormPropertiesList,
    // SelectDropdown,
    // DesignPanel
    // Sidebar
    Header
    // Splitpanes
    // userFormTable
    // LabelControlTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.sideheader {
  background-color: #cdd4db;
  height: 23px;
  text-align: left;
  padding: 0pc;
}
.sideheader1 {
  top: 0%;
  width: 250px;
  background-color: #cdd4db;
  /* padding-bottom: 8px; */
  margin-bottom: 8px;
}

/* SplitPanes */
/* body {
  background: royalblue;
}
.splitpanes__pane {
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
}

.splitpanes__pane > span,
.splitpanes__pane > div,
.splitpanes__pane > p {
  font-family: Arial, Helvetica, sans-serif;
  color: royalblue;
  font-size: 48pt;
  opacity: 0.6;
} */

/* New */
hr {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.sidenav {
  height: 90%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
}

/* headers */
.sideheader1{
  top: 0%;
  width: 250px;
  background-color: #cdd4db;
  /* padding-bottom: 8px; */
  margin-bottom:8px ;
}
.sideheader{
  background-color: #cdd4db; 
  height: 22px ;
  text-align: left;
  padding: 0pc;
  /* font-style: "Verdana"; */
}
</style>
