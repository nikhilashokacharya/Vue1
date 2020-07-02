<template>
  <div>
    <table class="table">
      <!-- <caption class="caption">Properties</caption> -->
      <tr>
        <th>BackColor</th>
        <td>
          <select :value="backColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{item}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BorderColor</th>
        <td>
          <select :value="borderColor">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{item}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BorderStyle</th>
        <td>
          <select :value="borderStyle">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in cycle" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in font" :key="key" :value="item">{{item}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>ForeColor</th>
        <td>
          <select :value="foreColor">
             <option v-for="(item,key) in foreColor" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in keepScrollsBarsVisible" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in mousePointer" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in pictureAlignment" :key="key" :value="item">{{item}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>PictureSizeMode</th>
        <td>
          <select :value="pictureSizeMode">
            <option v-for="(item,key) in pictureSizeMode" :key="key" :value="item">{{item}}</option>
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
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{item}}</option>
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
          <input type="text" :value="scrollLeft"  />
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
             <option v-for="(item,key) in specialEffect" :key="key" :value="item">{{item}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>StartUpPosition</th>
        <td>
          <select :value="startUpPosition">
             <option v-for="(item,key) in startUpPosition" :key="key" :value="item">{{item}}</option>
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
          <input type="text" :value="zoom" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import SelectDropdown from "./SelectDropdown.vue";
// import userForms from "./models/userForms.json";
import backColor from "./models/backColor.json";
import borderColor from "./models/borderColor.json";
import borderStyle from "./models/borderStyle.json";
import cycle from "./models/cycle.json";
import font from "./models/font.json";
import foreColor from "./models/foreColor.json";
import keepScrollsBarsVisible from "./models/keepScrollsBarsVisible.json";
import mousePointer from "./models/mousePointer.json";
import pictureAlignment from "./models/pictureAlignment.json";
import scrollBars from "./models/scrollBars.json";
import specialEffect from "./models/specialEffect.json";
import startUpPosition from "./models/startUpPosition.json";
// import borderColor from "./models/borderColor.json";

export default {
  name: "userFormTable",
  props: ["userForms"],
  components: {
    
  },
  data() {
    return {
      backColor:backColor,
      // root: userForms,
      borderColor:borderColor,
      borderStyle:borderStyle,
      cycle:cycle,
      font:font,
      foreColor:foreColor,
      keepScrollsBarsVisible:keepScrollsBarsVisible,
      mousePointer:mousePointer,
      pictureAlignment:pictureAlignment,
      scrollBars:scrollBars,
      specialEffect:specialEffect,
      startUpPosition:startUpPosition
    };
  }
};
</script>

<style>
.node {
  text-align: left;
}
table,
th,
td {
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 10%;
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