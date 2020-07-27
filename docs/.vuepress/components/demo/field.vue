<template>
  <div>
    <div class="box">
      <ul>
        <li v-if="demo === '1'" demo="1">
          <yn-field-group>
            <yn-field v-model="basicUsage" placeholder="请输入内容"></yn-field>
          </yn-field-group>
        </li>
        <li v-if="demo === '2'">
          <yn-field-group>
            <yn-field
              v-model="phoneNumber"
              label="手机号码"
              type="number"
              min="3"
              max="10"
              placeholder="phone number"
              pattern="[0-9]*"
            ></yn-field>
          </yn-field-group>
        </li>
        <li v-if="demo === '3'">
          <yn-field
            v-model="userPassword"
            label="用户密码"
            type="password"
            placeholder="password"
          ></yn-field>
        </li>
        <li v-if="demo === '4'">
          <yn-field
            v-model="readonly"
            label="证件信息"
            type="text"
            readonly
          ></yn-field>
        </li>
        <li v-if="demo === '5'">
          <yn-field
            v-model="disabled"
            label="关键信息"
            type="text"
            disabled
          ></yn-field>
        </li>
        <li v-if="demo === '6'">
          <yn-field
            v-model="clear"
            label="清除icon"
            placeholder="some text"
            type="text"
            clearable
          ></yn-field>
        </li>
        <li v-if="demo === '7'">
          <yn-field
            v-model="customIcon"
            label="自定义icon"
            iconName="iconarrow_right_gray"
            type="text"
          ></yn-field>
        </li>
        <li v-if="demo === '8'">
          <yn-field
            v-model="textarea"
            label="textarea"
            type="textarea"
            maxlength="50"
            showTextareaCounter
            clearable
          ></yn-field>
        </li>
        <li v-if="demo === '9'">
          <yn-field-group>
            <yn-field v-model="ynName" label="中文姓名"></yn-field>
            <yn-field v-model="ynPhone" label="手机号码"></yn-field>
            <yn-field v-model="ynIdType" label="证件类型"></yn-field>
            <yn-field v-model="ynIdNo" label="证件号码"></yn-field>
            <yn-field
              v-model="ynIdNoEncrpt"
              label="加密证件"
              encrypted
            ></yn-field>
            <yn-field v-model="ynBirthday" label="出生日期"></yn-field>
          </yn-field-group>
        </li>
        <li v-if="demo === '10'">
          <yn-field
            v-model="customLabel"
          >
            <div slot="label">自定义label</div>
          </yn-field>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoField",
  props: {
    demo: String
  },
  data() {
    return {
      basicUsage: "",
      phoneNumber: "",
      userPassword: "",
      readonly: "3333333333333",
      disabled: "1111111111",
      clear: "",
      customIcon: "",
      customLabel: "",
      textarea: "",
      ynName: "",
      ynPhone: "",
      ynIdType: "",
      ynIdNo: "",
      ynBirthday: "",
      ynIdNoEncrpt: "11222222222"
    };
  }
};
</script>
<style type="text/css" scoped="scoped">
.box {
  background-color: #f7f8fa;
  height: 100%;
  width: 320px;
}
.box ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.box ul li {
  margin: 10px 0;
}
.box ul li .label {
  margin: 5px 0;
  display: block;
}
</style>
