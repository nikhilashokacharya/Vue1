<template>
  <div>
    <div class="firstrow">
      Microsoft Visual Basic for Applications - Book1
      <span class="buttons">
        <button class="min">_</button>
        <button class="max">[]</button>
        <button class="close1">X</button>
      </span>
    </div>

    <div class="secondrow">
      <i style="float:left" class="material-icons">&#xe5d4;</i>
      <button class="tablink" id="defaultOpen">
        <u>F</u>ile
      </button>
      <button class="tablink">
        <u>E</u>dit
      </button>
      <button class="tablink" @click="selectToolBox">
        <u>V</u>iew
        <div @click="openToolBox" v-if="selectedToolBox">
          <button>ToolBox</button>
        </div>
      </button>
      <button class="tablink" @click="selectUserForm">
        <u>I</u>nsert
        <select @click="openUserForm" v-if="selectedUserForm">
          <option>UserForm</option>
        </select>
      </button>
      <button class="tablink">
        <u>F</u>ormat
      </button>
      <button class="tablink">
        <u>D</u>egub
      </button>
      <button class="tablink">
        <u>R</u>un
      </button>
      <button class="tablink">
        <u>T</u>ools
      </button>
      <button class="tablink">
        <u>A</u>dd-Ins
      </button>
      <button class="tablink">
        <u>W</u>indow
      </button>
      <button class="tablink">
        <u>H</u>elp
      </button>
    </div>

    <div class="thirdrow">
      <i class="material-icons">&#xe5d4;</i>
      <i style="font-size:17px" class="fa">&#xf1c3;</i>
      <i style="font-size:17px" class="fa">&#xf0c7;</i>
      <i style="font-size:17px" class="fa">&#xf0c4;</i>
      <i style="font-size:17px" class="fa">&#xf0c5;</i>
      <i style="font-size:17px" class="fa">&#xf0ea;</i>
      <i style="font-size:17px" class="fa">&#xf0e2;</i>
      <i style="font-size:17px" class="fa">&#xf01e;</i>
      <i style="font-size:15px" class="fa">&#xf04b;</i>
      <i style="font-size:17px" class="fa">&#xf28c;</i>
      <i style="font-size:17px" class="fa">&#xf04d;</i>
    </div>
  </div>
</template>


<script >
export default {
  name: "Header",
  data() {
    return {
      selectedToolBox: false,
      selectedUserForm: false
    };
  },
  methods: {
    openToolBox: function() {
      console.log("ToolBox");
    },
    openUserForm: function() {
      console.log("UserForm");
    },
    selectToolBox: function() {
      this.selectedToolBox = true;
    },
    selectUserForm: function() {
      this.selectedUserForm = true;
    }
  }
};
</script>

<style>
.tablink {
  background-color: rgba(218, 214, 214, 0.616);
  color: rgb(17, 17, 17);
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  border: none;
  float: left;
}

.tablink:hover {
  background-color: #4dbce0;
}

.firstrow {
  font-size: 15px;
}
.secondrow {
  border: 1px transparent;
  color: rgba(194, 189, 189, 0.616);
  padding: 5px;
  background-color: rgba(194, 189, 189, 0.616);
  height: 20px;
}
.buttons {
  float: right;
  line-height: normal;
}
.min .max .close1 {
  width: 40px;
}
.close1:hover {
  background-color: red;
}
.fa {
  padding: 3px;
  margin: 2px;
}
.material-icons {
  size: 15px;
}
i:hover {
  background-color: #4dbce0;
  cursor: default;
}
</style>