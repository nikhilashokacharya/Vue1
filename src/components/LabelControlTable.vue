<template>
  <table class="table">
    <caption class="caption">Properties</caption>
    <tr>
      <th v-bind="accelerator" :key="labels.accelerator">Accelerator</th>
      <td>
        <input type="text" v-model="labels.accelerator.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="autoSize" :key="labels.autoSize">AutoSize</th>
      <td>
        <input type="text" v-model="labels.autoSize.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="backColor" :key="labels.backColor">BackColor</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="backStyle" :key="labels.backStyle">BackStyle</th>
      <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
    </tr>
    <tr>
      <th v-bind="borderColor" :key="labels.borderColor">BorderColor</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="borderStyle" :key="labels.borderStyle">BorderStyle</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="caption" :key="labels.caption">Caption</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="controlTipText" :key="labels.controlTipText">ControlTipText</th>
      <td>
        <input type="text" v-model="labels.controlTipText.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="enabled" :key="labels.enabled">Enabled</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="font" :key="labels.font">Font</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="foreColor" :key="labels.foreColor">ForeColor</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="height" :key="labels.height">Height</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="helpContextId" :key="labels.helpContextId">HelpContextId</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="left" :key="labels.left">Left</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="mouseIcon" :key="labels.mouseIcon">MouseIcon</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="mousePointer" :key="labels.mousePointer">MousePointer</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="picture" :key="labels.picture">Picture</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="picturePosition" :key="labels.picturePosition">PicturePosition</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="specialEffect" :key="labels.specialEffect">SpecialEffect</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="tabIndex" :key="labels.tabIndex">TabIndex</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="tabStop" :key="labels.tabStop">TabStop</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="tag" :key="labels.tag">Tag</th>
      <td>
        <select>
          <option></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="textAlign" :key="labels.textAlign">TextAlign</th>
      <td>
        <select>
          <option v-for="(value,key) in labels" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="top" :key="labels.top">Top</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="visible" :key="labels.visible">Visible</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="width" :key="labels.width">Width</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="wordWrap" :key="labels.wordWrap">WordWrap</th>
      <td>
        <input type="text" v-model="labels.caption.value" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {};
</script>

<style>
</style>