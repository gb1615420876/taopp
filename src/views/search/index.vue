<template>
  <div class="search">
    <form action="/">
    <van-search
      v-model.lazy="value"
      placeholder="请输入电影院名称"
      show-action
      @search="onSearch"
      @cancel="$router.back()"
    />
  </form>
  <ul v-show="isshow" class="list-ul">
    <li v-for="item in arr" :key="item.cinemaId" class="list-li">
      <div class="list-title">
        <span class="cinema-name">{{ item.name }}</span>
        <span class="cinema-price">{{ (item.lowPrice)/100 }}<i>元</i><em>起</em></span>
    </div>
    <div class="list-location">{{ item.address}}</div>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      isshow: true,
      value: ''
    }
  },
  computed: {
    ...mapState('Cinema', [
      'cinemaList',
      'arr'
    ])
  },
  methods: {
    onSearch () {
      this.searchCinema(this.value)
    },
    ...mapActions('Cinema', [
      'getCinemaList',
      'searchCinema'
    ])
  },
  created () {
    this.getCinemaList()
  },


}
</script>
<style lang="less">

html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input{margin: 0;padding: 0;}
ul,ol,li{list-style: none;}
a,u{text-decoration: none;}
b,strong{font-weight: normal;}
em,i{font-style: normal;}
h1,h2,h3,h4,h5,h6{font-size: 16px;font-weight: normal;}
input{outline: none;}
img{display: block;border: 0;}
body{font-family: "微软雅黑"}

.list-ul{
  .list-li{
    border-bottom: 1px solid #ddd;
  }
}
.list-title{
  display: flex;
  justify-content: space-between;
  height: 26px;
  line-height: 26px;
  margin-top: 10px;
  .cinema-name{
    color: #000;
    font-size:16px;
    font-weight: 500;
    margin-left:15px;
  }
  .cinema-price{
    color: #ff4d64;
    font-size:14px;
    margin-right: 15px;
    i{
      font-size: 10px;
    }
    em{
      font-size: 10px;
      color: #999;
    }

  }
}
.list-location{
    height: 19px;
    color: #666;
    font-size: 13px;
    margin-left:15px;
    line-height: 19px;
    overflow: hidden;
    margin:15px;
  }


</style>
