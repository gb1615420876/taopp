<template>
  <div class="Coupon">
    <van-tabs v-model="active"
     title-inactive-color="#999"
     title-active-color="#ff4d64"
     color="#ff4d64"
     :line-height="2"
     :line-width="60"
     sticky>
      <van-tab title="优惠券">
        <div class="Other-coupon">添加优惠券</div>
        <ul class="couponList">
          <li v-for="couponItme in CouponList"
          :key="couponItme.id">
            <div class="li-left">
              <div class="li-icon">
                <img src="https://gw.alicdn.com/tfs/TB1ClRhuDtYBeNjy1XdXXXXyVXa-120-120.png" alt="淘票票">
              </div>
              <p class="li-title">{{ couponItme.name }}</p>
              <div class="wrap">
                <div class="wrap-cont">{{ couponItme.text }}</div>
                <div class="wrap-time">{{ couponItme.showtime }}</div>
              </div>
            </div>
            <div class="li-right">
              <div class="price">{{ couponItme.price }}<i>元</i></div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="其他优惠券">
        <div class="icon-box">
          <i></i>
          <p>没有优惠券~</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState('Coupon', [
      'CouponList'
    ])
  },
  methods: {
    ...mapActions('Coupon', [
      'getCouponList'
    ])
  },
  created: function () {
    this.getCouponList()
  }
}
</script>

<style lang="less">
  .Coupon{
    height:100%;
    background-color: #f5f5f5;
    .Other-coupon{
      height:45px;
      width:345px;
      padding: 0 15px;
      line-height: 45px;
      font-size:14px;
      color:#37b7ff;
      text-align: end;
      position: fixed;
      top:44px;
      background: #fff;
      z-index: 99;
    }
    .couponList{
       margin:45px 0;
       color:#c8c8c8;
      & li{
        height:66px;
        padding: 25px 0;
        border-top:10px solid #f5f5f5;
        background: #fff;
        border-radius:4px;
        position: relative;
      }
      .li-left{
        padding-left:69px;
        padding-right:10px;
        width:180px;
        height:66px;
        position: relative;
        border-right:1px dashed #ededed;
        .li-title{
          height:22px;
          width:180px;
          font-size:16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .wrap{
          height:38px;
          width:180px;
          font-size:12px;
          & div{
            margin-top: 6px;
          }
          .wrap-cont{
            height:16px;
            width:auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
          }
        }
        .li-icon{
          position: absolute;
          top:0;
          left:20px;
          width:40px;
          height:40px;
          border-radius:40px;
          img{
            width:100%;
            height:100%;
            filter:grayscale(100%) opacity(.5);
          }
        }
      }
      .li-right{
        width:115px;
        height:116px;
        position: absolute;
        right: 0;
        bottom:0;
        top:0;
        .price{
          position: absolute;
          margin:auto;
          top:0;left:0;bottom:0;right: 0;
          font-size:28px;
          color:#999;
          height:33px;
          width:30px;
          text-align: center;
          line-height: 33px;
          & i{
            display: inline;
            font-size: 12px;
          }
        }
        &::after{
          position: absolute;
          background-repeat: no-repeat;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          display: block;
          content: "";
          opacity: .1;
          background-size: contain;
          background-position: 50%;
          height:64px;
          width:64px;
          background-image: url('/images/1.svg')
        }
      }
    }
    .icon-box{
      width:100%;
      height:155px;
      padding-top: 150px;
      & i{
        width:131px;
        height:131px;
        display: block;
        margin:0 auto;
        background-image: url('/images/2.svg');
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
      }
      & p{
        height:24px;
        font-size:16px;
        color:#666;
        text-align: center;
      }
    }
  }
</style>
