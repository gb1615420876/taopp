<template>
  <div class="home">
    <div class="head">
      <div class="pic"></div>
      <p class="username">{{ username }}</p>
    </div>
    <div class="nav">
      <li class="ticket" @click="$router.push({ name: 'ticket' })">
        <van-icon name="video-o" size='27px' color="#ff4d64"/>
        <p>电影票</p>
      </li>
      <li class="Coupon" @click="$router.push({ name: 'coupon' })">
        <van-icon name="refund-o" size='27px' color="orange"/>
        <p>优惠券</p>
      </li>
      <span></span>
    </div>
    <ul class="home-list">
      <li class="card" @click="$router.push({ name: 'card' })">
        淘票票乐影卡
        <van-icon class="icon" name="arrow" size="12px" color="#bcbcbc" />
        <div></div>
      </li>
      <li class="help" @click="$router.push({ name: 'help' })">
        帮助与反馈
        <span>咨询票小蜜</span>
        <van-icon class="icon" name="arrow" size="12px"  color="#bcbcbc" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  created () {
    let username = localStorage.getItem('username')
    if (username === '') {
      this.$router.replace({ name: 'login' })
    } else {
      this.username = username
    }
  }
}
</script>

<style lang="less">
  .home{
    height: 100%;
    background:#f5f5f5;
  }
  .head{
    height:170px;
    background: #ff4d64;
    position: relative;
    padding-bottom:0;
    .pic{
      width:72px;
      height:72px;
      border-radius:72px;
      background: #349CEF;
      position: absolute;
      top:30px;
      left:25px;
    }
    .username{
      position: absolute;
      margin-left:115px;
      top:38px;
      height:20px;
      line-height: 20px;
      font-weight: 500;
      font-size:20px;
      color:#fff;
    }
  }
  .nav{
      display: flex;
      height:114px;
      position: relative;
      background: #fff;
      & li{
        list-style: none;
        flex:1;
        margin-top:47px;
        text-align: center;
        & p{
          color:#666;
          font-size:12px;
          margin: 0;
        }
      }
      & span{
        position: absolute;
        bottom: 0;
        height:1px;
        opacity: 0.2;
        left:5%;
        width:90%;
        background: #999;
      }
    }
  .home-list{
    background: #fff;
    & li{
      height:60px;
      padding:0 29px 0 14px;
      line-height: 60px;
      font-size:16px;
      color:#000;
      position: relative;
      & span{
        position: absolute;
        right:29px;
        color:#bcbcbc;
        font-size:12px;
      }
      .icon{
        position: absolute;
        right:15px;
        top:25px;
      }
      & div{
        position: absolute;
        bottom: 0;
        height:1px;
        opacity: 0.2;
        left:4%;
        width:91%;
        background: #999;
      }
    }
  }

</style>
