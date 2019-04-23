<template>
  <div class="city">
    <van-nav-bar
      title="选择城市"
      right-text="✕"
      left-arrow
      @click-right="$router.back()"
      @click-left="$router.back()"
    />
    <div class="city-list">
      <ol class="auto-top">
        <div id="list-now">
          <h3>当前</h3>
          <li @click="cityOk('深圳')">深圳</li>
        </div>
        <div id="list-GPS">
          <h3>GPS</h3>
          <li>用户拒绝浏览器位置服务</li>
        </div>
        <div id="list-hot">
          <h3>热门</h3>
          <ul>
            <li v-for="city in hotCitys"
            :key="city.cityId"
            @click='cityOk(city.name)'>{{ city.name }}</li>
          </ul>
        </div>
        <div v-for='item in newCityList'
        :key='item.name'
        :id="'list-' + item.name">
          <h3>{{ item.name }}</h3>
          <ul>
            <li
            v-for='city in item.citys'
            :key='city.cityId'
            @click='cityOk(city.name)'
            >{{ city.name }}</li>
          </ul>
        </div>
      </ol>
    </div>
    <div class="fixed-list">
      <ul>
        <li @click="scroll('now')">当前</li>
        <li @click="scroll('GPS')">GPS</li>
        <li @click="scroll('hot')">热门</li>
        <li v-for="letter in fiexdList"
        :key="letter"
        @click="scroll(letter)">{{letter}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('city', [
      'newCityList',
      'hotCitys',
      'fiexdList'
    ])
  },
  methods: {
    ...mapActions('city', [
      'getCityList'
    ]),
    ...mapMutations('city', [
      'trueCity'
    ]),
    cityOk (city) {
      this.trueCity(city)
      this.$router.back()
    },
    scroll (letter) {
      let boxEl = document.getElementById('list-' + letter)
      let top = boxEl.offsetTop
      document.querySelector('.auto-top').scrollTop = top
    }
  },
  created: function () {
    this.getCityList()
  }
}
</script>

<style lang="less">
.city{
  display: flex;
  flex-direction: column;
  height:100%;
  box-sizing: border-box;
  .city-list{
    flex: 1;
    width:100%;
    height:100%;
    overflow: hidden;
    position: relative;
    .auto-top{
      height:100%;
      overflow-y: auto;
    }
    & li{
      display: block;
      padding: 12px 12px 12px 0;
      overflow: hidden;
      font-size: 15px;
      background: transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
      background-size: 100% 1px;
    }
    & ol{
      list-style: none;
      overflow-y: auto;
    }
    #list-now{
      li {
        padding-left:15px;
        color: #777;
      }
    }
    #list-GPS{
      li {
        padding-left:15px;
        color: #777;
      }
    }
    & ul{
      padding-left:15px;
      color: #777;
    }
    & h3{
      padding: 9px 12px;
      background: #eee;
      color: #777;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
    }
  }
  .fixed-list{
    position:fixed;
    right: 0;
    top:80px;
    width:40px;
    & li{
      list-style: none;
      height: 20px;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: #349cec;
      }
  }
}
</style>
