<template>
  <div class="Cinema">
    <div class="cinema-header">
      <div class="cinema-left" @click="$router.push({ name: 'city'})">{{ trueCity }} <van-icon name="arrow-down"/></div>
        <div class="cinema-center">影院</div>
        <div class="cinema-right" @click="$router.push({ name: 'search'})"><van-icon name="search" /></div>
    </div>
    <ul class="list-ul">
        <li v-for="item in cinemaList" :key="item.cinemaId" class="list-li" >
          <router-link :to="'/cinemasDetails/' + item.cinemaId ">
            <div class="list-title">
              <span class="cinema-name">{{ item.name }}</span>
              <span class="cinema-price">{{ (item.lowPrice)/100 }}<i>元</i><em>起</em></span>
            </div>
            <div class="list-location">{{ item.address}}</div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('Cinema', [
      'cinemaList'

    ]),
    ...mapState('city', [
      'cityId',
      'trueCity'
    ])
  },
  methods: {
    onSearch () {

    },
    onCancel () {

    },
    ...mapActions('Cinema', [
      'getCinemaList'
    ]),
    search () {

    }

  },
  created () {
    this.getCinemaList()
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

.cinema-header{
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background: #fff;
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  .cinema-left{
    margin-left: 15px;
    color: #999;
  }
  .cinema-right{
    margin-right: 15px;
    font-size:19px;
    color: #999;
  }
}
.list-ul{
  margin-top: 45px;
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
