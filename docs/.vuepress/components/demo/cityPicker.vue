<template>
  <div>
    <ul>
      <li @click="handlePicker(1)" v-if="demo === '1'">
        <yn-button type="primary">国内城市</yn-button>
      </li>
      <li @click="handlePicker(2)" v-if="demo === '2'">
        <yn-button type="primary">国际城市</yn-button>
      </li>
      <li @click="handlePicker(3)" v-if="demo === '3'">
        <yn-button type="primary">全部城市</yn-button>
      </li>
      <li @click="handlePicker(4)" v-if="demo === '4'">
        <yn-button type="primary">受限城市</yn-button>
      </li>
      <li @click="handlePicker(5)" v-if="demo === '5'">
        <yn-button type="primary">显示历史记录</yn-button>
      </li>
      <li @click="handlePicker(6)" v-if="demo === '6'">
        <yn-button type="primary">不显示热门城市</yn-button>
      </li>
      <li @click="handlePicker(7)" v-if="demo === '7'">
        <yn-button type="primary">可搜索</yn-button>
      </li>
      <li @click="handlePicker(8)" v-if="demo === '8'">
        <yn-button type="primary">可搜索(三列布局)</yn-button>
      </li>
    </ul>
    <yn-city-picker
      :searchable="false"
      @pick="handlePick"
      v-model="picker1"
      :tabs="tabs1"
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      showHistory
    ></yn-city-picker>
    <yn-city-picker
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      showHistory
      :searchable="false"
      @pick="handlePick"
      v-model="picker2"
      :tabs="tabs2"
    ></yn-city-picker>
    <yn-city-picker
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      :searchable="false"
      @pick="handlePick"
      v-model="picker3"
    ></yn-city-picker>
    <yn-city-picker
      @pick="handlePick"
      v-model="picker4"
      :limitedData="data.cnCitiesList"
      limited
    ></yn-city-picker>
    <yn-city-picker
      @pick="handlePick"
      v-model="picker5"
      :hotCity="getHotCity()"
      showHistory
      :history="getHistory()"
      :alphaBeta="getAlphaBeta()"
    ></yn-city-picker>
    <yn-city-picker
      :alphaBeta="getAlphaBeta()"
      :searchable="false"
      @pick="handlePick"
      v-model="picker6"
      :tabs="tabs2"
      :showHotCity="false"
    ></yn-city-picker>
    <yn-city-picker
      :search="getSearch()"
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      showHistory
      @pick="handlePick"
      v-model="picker7"
      :parse="parse"
    ></yn-city-picker>
    <yn-city-picker
      :search="getSearch()"
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      showHistory
      @pick="handlePick"
      v-model="picker8"
      column="3"
    ></yn-city-picker>
  </div>
</template>

<script>
const data = require("./ykb_hot_city.json").result;
export default {
  name: "DemoCityPicker",
  props: {
    demo: String
  },
  data() {
    return {
      data,
      picker1: false,
      picker2: false,
      picker3: false,
      picker4: false,
      picker5: false,
      picker6: false,
      picker7: false,
      picker8: false,
      tabs1: [{ label: "中国", key: "mainland-china" }],
      tabs2: [{ label: "非中国大陆(国际/港澳台)", key: "overseas" }]
    };
  },
  methods: {
    parse(city, nameSpace) {
      return `${nameSpace} ${city.CityName}`;
    },
    getHistory() {
      return {
        title: "历史查询",
        params: { a: "1", b: "2" },
        action: this.getHistoryAction,
        parse: (e, params = {}) => {
          const { tab } = params;
          if (tab === "mainland-china") {
            return e.cnCitiesList;
          } else if (tab === "overseas") {
            return e.intCitiesList;
          }
        }
      };
    },
    getHistoryAction(params = {}) {
      console.log("这里处理请求的参数", params);
      return new Promise((resolve, reject) => {
        console.log(reject);
        // setTimeout(() => {
        //   reject("失败信息");
        // }, 1000);
        setTimeout(() => {
          resolve(data);
        }, 1000);
      }).catch(err => {
        this.Toast(err);
        console.log(err, "异常在组件外面处理");
      });
    },
    handlePick(e) {
      this.Toast(`已选择：${e.CityName}`);
    },
    handlePicker(num) {
      this[`picker${num}`] = !this[`picker${num}`];
    },
    getCityListByAlphaBeta(params = {}) {
      console.log("这里处理请求的参数", params);
      return new Promise((resolve, reject) => {
        console.log(reject);
        // setTimeout(() => {
        //   reject("失败信息");
        // }, 1000);
        setTimeout(() => {
          resolve(data);
        }, 1000);
      }).catch(err => {
        this.Toast(err);
        console.log(err, "异常在组件外面处理");
      });
    },
    getHotCityAction(params = {}) {
      console.log("这里处理请求的参数", params);
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   reject("失败信息");
        // }, 1000);
        console.log(reject);
        setTimeout(() => {
          resolve(data);
        }, 1000);
      }).catch(err => {
        this.Toast(err);
        console.log(err, "异常在组件外面处理");
      });
    },
    getSearchAction(params = {}) {
      console.log("这里处理请求的参数", params);
      return new Promise((resolve, reject) => {
        console.log(reject);
        // setTimeout(() => {
        //   reject("失败信息");
        // }, 1000);
        setTimeout(() => {
          resolve(data);
        }, 1000);
      }).catch(err => {
        this.Toast(err);
        console.log(err, "异常在组件外面处理");
      });
    },
    getSearch() {
      return {
        params: { a: "1", b: "2" },
        action: this.getSearchAction,
        parse: (e, params = {}) => {
          const { tab } = params;
          if (tab === "mainland-china") {
            return e.cnCitiesList;
          } else if (tab === "overseas") {
            return e.intCitiesList;
          }
        }
      };
    },
    getHotCity() {
      return {
        title: "热门城市",
        params: { a: "1", b: "2" },
        action: this.getHotCityAction,
        parse: (e, params = {}) => {
          const { tab } = params;
          if (tab === "mainland-china") {
            return e.cnCitiesList;
          } else if (tab === "overseas") {
            return e.intCitiesList;
          }
        }
      };
    },
    getAlphaBeta() {
      return {
        title: "按字母查询",
        params: { a: "1", b: "2" },
        action: this.getCityListByAlphaBeta,
        parse: e => {
          return e.cnCitiesList;
        }
      };
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
  ul {list-style: none; padding: 0;}
</style>

