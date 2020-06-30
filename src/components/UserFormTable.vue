<template>
  <div>
    <select-dropdown />
    <table class="table">
      <caption class="caption">Properties</caption>
      <tr>
        <th v-bind="backColor" :key="userForms.backColor">BackColor</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="borderColor" :key="userForms.borderColor">BorderColor</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="borderStyle" :key="userForms.borderStyle">BorderStyle</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="caption" :key="userForms.caption.name">Caption</th>
        <td>
          <input type="text" v-model="userForms.caption.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="cycle" :key="userForms.cycle">Cycle</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="drawBuffer" :key="userForms.drawBuffer">BackColor</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="enabled" :key="userForms.enabled">Enabled</th>
        <td>
          <input type="text" v-model="userForms.caption.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="font" :key="userForms.font">Font</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="foreColor" :key="userForms.foreColor">ForeColor</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="height" :key="userForms.height.name">Height</th>
        <td>
          <input type="text" v-model="userForms.height.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="helpContextId" :key="userForms.helpContextId">HelpContextId</th>
        <td>
          <input type="text" v-model="userForms.helpContextId.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="keepScrollsBarsVisible" :key="userForms.keepScrollsBarsVisible"></th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="left" :key="userForms.left">Left</th>
        <td>
          <input type="text" v-model="userForms.left.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="mouseIcon" :key="userForms.mouseIcon">MouseIcon</th>
        <td>
          <input type="text" v-model="userForms.mouseIcon.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="mousePointer" :key="userForms.mousePointer">MousePointer</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="picture" :key="userForms.picture">Picture</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="pictureAlignment" :key="userForms.pictureAlignment">PictureAlignment</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="pictureSizeMode" :key="userForms.pictureSizeMode">PictureSizeMode</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="pictureTiling" :key="userForms.pictureTiling">PictureTiling</th>
        <td>
          <input type="text" v-model="userForms.pictureTiling.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="rightToLeft" :key="userForms.rightToLeft">RightToLeft</th>
        <td>
          <input type="text" v-model="userForms.rightToLeft.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="scrollBars" :key="userForms.scrollBars">ScrollBars</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="scrollHeight" :key="userForms.scrollHeight">ScrollHeight</th>
        <td>
          <input type="text" v-model="userForms.scrollHeight.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="scrollLeft" :key="userForms.scrollLeft">ScrollLeft</th>
        <td>
          <input type="text" v-model="userForms.scrollLeft.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="scrollTop" :key="userForms.scrollTop">ScrollTop</th>
        <td>
          <input type="text" v-model="userForms.scrollTop.value" />
        </td>
      </tr>

      <tr>
        <th v-bind="scrollWidth" :key="userForms.scrollWidth">ScrollWidth</th>
        <td>
          <input type="text" v-model="userForms.scrollWidth.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="showModal" :key="userForms.showModal">ShowModal</th>
        <td>
          <input type="text" v-model="userForms.showModal.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="specialEffect" :key="userForms.specialEffect">SpecialEffect</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="startUpPosition" :key="userForms.startUpPosition">StartUpPosition</th>
        <td>
          <select>
            <option v-for="(value,key) in userForms" v-bind:value="value" :key="key"></option>
          </select>
        </td>
      </tr>
      <tr>
        <th v-bind="tag" :key="userForms.tag">Tag</th>
        <td>
          <input type="text" v-model="userForms.tag.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="top" :key="userForms.top">Top</th>
        <td>
          <input type="text" v-model="userForms.top.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="whatsThisButton" :key="userForms.whatsThisButton">WhatsThisButton</th>
        <td>
          <input type="text" v-model="userForms.whatsThisButton.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="whatsThisHelp" :key="userForms.whatsThisHelp">WhatsThisHelp</th>
        <td>
          <input type="text" v-model="userForms.whatsThisHelp.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="width" :key="userForms.width">Width</th>
        <td>
          <input type="text" v-model="userForms.width.value" />
        </td>
      </tr>
      <tr>
        <th v-bind="zoom" :key="userForms.zoom">Zoom</th>
        <td>
          <input type="text" v-model="userForms.zoom.value" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SelectDropdown from "./SelectDropdown.vue";
export default {
  name: "userFormTable",
  props: ["userForms"],
  components: {
    SelectDropdown
  },
  data() {
    return {
      // root: userForms
    };
  }
};
</script>

<style>
</style>