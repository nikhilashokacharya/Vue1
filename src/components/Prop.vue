<template>
<div>
  <div class="sideheader">
    <span class="sideheader1">Properties - UserForm1<button style="float:right"><b>X</b></button></span>
  </div>
  <div class="form-group">
    <label for="userForms"></label>
    <select class="form-control" name="userForms" id="userForms" v-model="selectedUserForm">
      <option v-bind:value="userForm">{{userForm.name}}</option>
      <option v-for="(control,key) in userForms.controls"
        v-bind:value="control"
        :key="key"
      >{{control.name}}</option>

    </select>
    <div class="btn-group">
  <button class="button" default>Alphabetic</button>
  <button class="button">Categorized</button>
 
</div>
    <br />
    <br />
    <hr>

    <!-- NOt added to other components -->


    <!-- <table class="table" v-if="selected" >
      <template v-if="selectedUserForm.name==='UserForm'+'1'">
        <tr v-for="(item,left) in selectedUserForm" v-bind:key="item.name">
          <template v-if="left=='inner'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                
                <td v-bind:value="item1.value" >
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else-if="left=='attributes'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-bind:left1="item1"  v-model="item[left1]"/>
                </td>
              </tr>
            </template>
          </template>

          <template v-else-if="left=='controls'" hidden></template>
          <template v-else-if="left=='headerText'" hidden></template>
          <template v-else-if="left=='innerHeaderText'" hidden></template>
          <template v-else-if="left=='closeButton'" hidden></template>
          <template v-else-if="left=='closeInnerButton'" hidden></template>
          <template v-else-if="left=='style'" hidden></template>

          <template v-else>
            <tr>
              <th>{{left}}</th>
              <td>
                <input type="text" v-model="selectedUserForm[left]" />
              </td>
            </tr>
          </template>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item,left) in selectedUserForm" v-bind:key="item.name">
          <template v-if="left=='style'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else-if="left=='attributes'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else>
            <tr>
              <th>{{left}}</th>
              <td>
                <input type="text" v-model="selectedUserForm[left]" />
              </td>
            </tr>
          </template>
        </tr>
      </template>
      
    </table> -->

    <table class="table">
      <template v-bind:value="UserForm">
      <template v-if="selectedUserForm.name==='UserForm'+'1'">
      <tr>
        <th>BackColor</th>
        <td>
          <select :value="backColor">
            <option selected>Window Text</option>
            <option>Button Face</option>
            <option>Highlight Text</option>
            <option>Highlight</option>
            <option>Menu Bar</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BorderColor</th>
        <td>
          <select :value="borderColor">
            <option selected>Button Text</option>
            <option>Button Face</option>
            <option>Highlight Text</option>
            <option>Highlight</option>
            <option>Menu Bar</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BorderStyle</th>
        <td>
          <select :value="borderStyle">
            <option>0 - fmBorderStyleSingle</option>
            <option>1 - fmBorderStyleSingle</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Caption</th>
        <td>
          <input type="text" :value="caption" />
        </td>
      </tr>
      <tr>
        <th>Cycle</th>
        <td>
          <select :value="cycle">
            <option>0 - fmCycleAllForms</option>
            <option>2 - fmCycleAllForms</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>DrawBuffer</th>
        <td>
          <input type="text" :value="drawBuffer" />
        </td>
      </tr>
      <tr>
        <th>Enabled</th>
        <td>
          <select :value="enabled">
            <option selected>true</option>
            <option>false</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Font</th>
        <td>
          <select :value="font">
            <option selected>Tahoma</option>
            <option>Terminal</option>
            <option>Times New Roman</option>
            <option>Trebuchet MS</option>
            <option>Verdana</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>ForeColor</th>
        <td>
          <select :value="foreColor">
            <option selected>Button Text</option>
            <option>Button Face</option>
            <option>Highlight Text</option>
            <option>Highlight</option>
            <option>Menu Bar</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Height</th>
        <td>
          <input type="text" :value="height" />
        </td>
      </tr>
      <tr>
        <th>HelpContextId</th>
        <td>
          <input type="text" :value="helpContextId" />
        </td>
      </tr>
      <tr>
        <th>KeepScrollsBarsVisible</th>
        <td>
          <select>
            <option selected>fmScrollBarsNone</option>
            <option>fmScrollBarsHorizontal</option>
            <option>fmScrollBarsVertical</option>
            <option>fmScrollBarsBoth</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Left</th>
        <td>
          <input type="text" :value="left" />
        </td>
      </tr>
      <tr>
        <th>MouseIcon</th>
        <td>
          <input type="text" :value="mouseIcon" />
        </td>
      </tr>
      <tr>
        <th>MousePointer</th>
        <td>
          <select :value="mousePointer">
            <option selected>0 - fmMousePointerDefault</option>
            <option>1 - fmMousePointerArrow</option>
            <option>2 - fmMousePointerCross</option>
            <option>3 - fmMousePointerIBeam</option>
            <option>6 - fmMousePointerSizeNESW</option>
            <option>7 - fmMousePointerSizeNS</option>
            <option>8 - fmMousePointerSizeNWS</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Picture</th>
        <td>
          <input type="text" :value="picture" />
        </td>
      </tr>
      <tr>
        <th>PictureAlignment</th>
        <td>
          <select :value="pictureAlignment">
            <option selected>0 - fmPictureAlignmentTopLeft</option>
            <option>1 - fmPictureAlignmentTopRight</option>
            <option>2 - fmPictureAlignmentCenter</option>
            <option>3 - fmPictureAlignmentBottomLeft</option>
            <option>4 - fmPictureAlignmentBottomRight</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>PictureSizeMode</th>
        <td>
          <select :value="pictureSizeMode">
            <option selected>0 - fmPictureAlignmentTopLeft</option>
            <option>1 - fmPictureSizeModeStretch</option>
            <option>3 - fmPictureSizeModeZoom</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>PictureTiling</th>
        <td>
          <select :value="PictureTiling">
         <option selected>false</option>
            <option>true</option>
        </select>
        </td>
      </tr>
      <tr>
        <th>RightToLeft</th>
        <td>
          <select :value="rightToLeft">
         <option selected>false</option>
            <option>true</option>
        </select>
        </td>
      </tr>
      <tr>
        <th>ScrollBars</th>
        <td>
          <select :value="scrollBars">
            <option selected>0 - fmScrollBarsNone</option>
            <option>1 - fmScrollBarsHorizontal</option>
            <option>2 - fmScrollBarsVertical</option>
            <option>3 - fmScrollBarsBoth</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>ScrollHeight</th>
        <td>
          <input type="text" :value="scrollHeight" />
        </td>
      </tr>
      <tr>
        <th>ScrollLeft</th>
        <td>
          <input type="text" :value="scrollHeight"  />
        </td>
      </tr>
      <tr>
        <th>ScrollTop</th>
        <td>
          <input type="text" :value="scrollTop" />
        </td>
      </tr>

      <tr>
        <th>ScrollWidth</th>
        <td>
          <input type="text" :value="scrollWidth" />
        </td>
      </tr>
      <tr>
        <th>ShowModal</th>
        <td>
          <select :value="showModal">
            <option selected>true</option>
            <option>false</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>SpecialEffect</th>
        <td>
          <select :value="specialEffect">
            <option selected>0 - fmSpecialEffectFlat</option>
            <option>1 - fmSpecialEffectRaised</option>
            <option>2 - fmSpecialEffectSunken</option>
            <option>3 - fmSpecialEffectEtched</option>
            <option>6 - fmSpecialEffectBump</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>StartUpPosition</th>
        <td>
          <select :value="startUpPosition">
             <option selected>0 - Manual</option>
            <option>1 - CenterOwner</option>
            <option>2 - CenterScreen</option>
            <option>3 - Windows Default</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Tag</th>
        <td>
          <input type="text" :value="tag"/>
        </td>
      </tr>
      <tr>
        <th>Top</th>
        <td>
          <input type="text" :value="top"/>
        </td>
      </tr>
      <tr>
        <th>WhatsThisButton</th>
        <td>
          <select :value="whatsThisButton">
         <option selected>false</option>
            <option>true</option>
        </select>
        </td>
      </tr>
      <tr>
        <th>WhatsThisHelp</th>
        <td>
          <select :value="whatsThisHelp">
         <option selected>false</option>
            <option>true</option>
        </select>
        </td>
      </tr>
      <tr>
        <th>Width</th>
        <td>
          <input type="text" :value="width" />
        </td>
      </tr>
      <tr>
        <th>Zoom</th>
        <td>
          <input type="text" :value="width" />
        </td>
      </tr>
      </template>
      </template>
    </table>
  </div>
</div>
</template>
<script>
// import vSelect from 'vselect-component'
// Vue.use(vSelect);
import userForm from "./models/userForms.json"
export default {
  name: "Prop",
  props: ["userForm"],
  borderTop: Number,
  // validator:value => {
  //    return value.indexOf(this.borderTop) !== -1
  // },
  components: {},
  methods: {
    // checkedInnerValue: function(item){
    //  return this.borderTop=item;
    // }
  },
  created() {
    console.log("helllo");
    console.log(this.userForms);
  },
  data() {
    return {
      userForms: userForm,
      selected: true,
      selectedUserForm: {},
      // selectedLabel1:[userForm.controls.label1],
      display: ["userForm"]
    };
  }
};
</script>

<style scoped>
.node {
  text-align: left;
}
table,
th,
td {
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 30%;
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
}
th {
  width: 120%;
  /* padding-top: 1px;
    padding-right: 2px;
    padding-bottom: 1px;
    padding-left: 2px; */
    font-size: 10px;
}
/* tr {
  width: 50%;
} */
.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
  /* border: 6px solid grey; */
}
label {
  float: left;
}
select {
  width:100%
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
}

/* Must be added as style for the new data */
.btn-group .button {
  
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}


</style>