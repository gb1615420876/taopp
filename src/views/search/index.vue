<template>
  <div class="search">
    <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <ul v-show="isshow" class="list-ul">
    <li v-for="item in cinemaList" :key="item.id" class="list-li">
      <div class="list-title">
        <span class="cinema-name">{{ item.name }}</span>
        <span class="cinema-price">{{ item.price}}<i>元</i><em>起</em></span>
    </div>
    <div class="list-location">{{ item.location}}</div>
      <div class="list-status">
        <div class="tpp-lbl" v-for="item_tpp in item.info" :key="item_tpp">{{ item_tpp }}</div>
      </div>
      <ul class="list-activity">
        <li class="activity-item">
          <span class="icon-1">{{ item.icon_1 }}</span>
          <em>{{ item.icon_1_title }}</em>
        </li>
        <li class="activity-item">
          <span class="icon-2">{{ item.icon_2 }}</span>
          <em>{{ item.icon_2_title }}</em>
        </li>
      </ul>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      isshow: false,
      value: ''
    }
  },
  computed: {
    ...mapState('Cinema', [
      'cinemaList'
    ])
  },
  methods: {
    onSearch () {

    },
    onCancel () {

    },
    ...mapActions('Cinema', [
      'getCinemaList'
    ])
  },
  created () {
    this.getCinemaList()
  },
  watch: {
    value: function (val, oldVal) {
      if (val.length === 0) {
        this.isshow = false
      } else {
        this.isshow = true
        var citys = []
        this.citys.forEach((item, index) => {
          if (item.indexOf(val) >= 0) {
            citys.unshift(item)
          }
        })
        this.selectCitys = citys
      }
    }
  }

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
  }
.list-status{
  height: 24px;
  margin-left:10px;
  .tpp-lbl{
    display:inline-block;
    font-size: 12px;
    color: #349cec;
    font-weight: 400px;
    border: 1px solid #349cec;
    border-radius: 4px;
    line-height: 16px;
    text-align: center;
    padding: 0 5px;
    margin-left:5px;
  }
}
.list-activity{
  margin-left:15px;
  .activity-item{
    margin-bottom: 5px;
    .icon-1, .icon-2{
    width: 15px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    border-radius: 2px;
  }
  .icon-1{
    background: #fe7a4c;
  }
  .icon-2{
    background: #fea54c;
  }
  em{
    color: #999;
    font-size: 12px;
    margin-left:5px;
  }
  }
}
</style>
