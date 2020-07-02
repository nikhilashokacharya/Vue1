<template>
<div>
  <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
  <table class="table">
    <!-- <caption class="caption">Properties</caption> -->
    <tr>
        <th>(Name)</th>
        <td>
          <input type="text" />
        </td>
      </tr>
    <tr>
      <th>Accelerator</th>
      <td>
        <input type="text" :value="accelerator"/>
      </td>
    </tr>
    <tr>
      <th>AutoSize</th>
      <td>
        <select :value="autosize">
         <option selected>false</option>
            <option>true</option>
        </select>
      </td>
    </tr>
    <tr>
      <th>BackColor</th>
      <td>
        <select :value="backColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{item}}</option>
          </select>
      </td>
    </tr>
    <tr>
      <th>BackStyle</th>
      <select :value="backStyle">
            <option v-for="(item,key) in backStyle" :key="key" :value="item">{{item}}</option>
          </select>
    </tr>
    <!-- <tr>
      <th>BorderColor</th>
      <td>
        <select :value="borderColor">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{item}}</option>
          </select>
      </td>
    </tr> -->
    <!-- <tr>
      <th>BorderStyle</th>
      <td>
        <select :value="borderStyle">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{item}}</option>
          </select>
      </td>
    </tr> -->
    <tr>
      <th>Caption</th>
      <td>
        <input type="text" :value="caption" />
      </td>
    </tr>
    <tr>
      <th>ControlTipText</th>
      <td>
        <input type="text" :value="controlTipText" />
      </td>
    </tr>
    <!-- <tr>
      <th>Default</th>
      <td>
        <select :value="default">
            <option selected>true</option>
            <option>false</option>
          </select>
      </td>
    </tr> -->
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
        <select>
          <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{item}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <th>ForeColor</th>
      <td>
        <select>
          <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{item}}</option>
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
      <th>Left</th>
      <td>
        <input type="text" :value="left" />
      </td>
    </tr>
    <tr>
      <th>Locked</th>
      <td>
        <input type="text" :value="locked" />
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
        <select>
          <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{item}}</option>
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
      <th>PicturePosition</th>
      <td>
        <select>
          <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{item}}</option>
        </select>
      </td>
    </tr>
    <!-- <tr>
      <th>SpecialEffect</th>
      <td>
        <select>
          <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{item}}</option>
        </select>
      </td>
    </tr> -->
    <tr>
      <th>TabIndex</th>
      <td>
        <input type="text" :value="tabIndex" />
      </td>
    </tr>
    <tr>
      <th>TabStop</th>
      <td>
        <input type="text" :value="tabStop" />
      </td>
    </tr>
    <tr>
      <th>Tag</th>
      <td>
        <input type="text" :value="tag" />
      </td>
    </tr>
    <tr>
      <th>TakeFocusOnClick</th>
      <td>
        <select :value="takeFocusOnClick">
            <option selected>true</option>
            <option>false</option>
          </select>
      </td>
    </tr>
    <tr>
      <th>Top</th>
      <td>
        <input type="text" :value="top" />
      </td>
    </tr>
    <tr>
      <th>Visible</th>
      <td>
        <input type="text" :value="visible" />
      </td>
    </tr>
    <tr>
      <th>Width</th>
      <td>
        <input type="text" :value="width" />
      </td>
    </tr>
    <tr>
      <th>WordWrap</th>
      <td>
        <input type="text" :value="wordWrap" />
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import backColor from "./models/backColor.json";
import backStyle from "./models/backStyle.json";
import borderColor from "./models/borderColor.json";
import borderStyle from "./models/borderStyle.json";
import font from "./models/font.json";
import foreColor from "./models/foreColor.json";
import mousePointer from "./models/mousePointer.json";
import picturePosition from "./models/picturePosition.json";
import specialEffect from "./models/specialEffect.json";
import textAlign from "./models/textAlign.json";

export default {

   data() {
    return {
      backColor:backColor,
      // root: userForms,
      backStyle:backStyle,
      borderColor:borderColor,
      borderStyle:borderStyle,
      // cycle:cycle,
      font:font,
      foreColor:foreColor,
      // keepScrollsBarsVisible:keepScrollsBarsVisible,
      mousePointer:mousePointer,
      picturePosition:picturePosition,
      // pictureAlignment:pictureAlignment,
      // scrollBars:scrollBars,
      specialEffect:specialEffect,
      // startUpPosition:startUpPosition
      textAlign:textAlign
      
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
  width: 100%;
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
  font-size: 12px;
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
  width: 100%;
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
.btn-group .button {
  
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  /* float: left; */
}
</style>