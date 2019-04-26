<template>
    <div class="card-mod">
      <div class="head">
        <img src="//gw.alicdn.com/tfs/TB1kuxwmxTpK1RjSZFKXXa2wXXa-330-210.png" alt="">
        <div class="remain">余额(元)</div>
        <div class="amount">0.00</div>
        <div class="btn" @click="$router.push({ name: 'addcard'})">立即绑卡</div>
      </div>
      <div class="content">
        <li class="problem" @click="$router.push({ name: 'problem'})">
          常见问题
          <van-icon name="arrow" size="14px" color="#c8c8c8" class="icon"/>
        </li>
        <li class="Hotline" @click="alert">
          销售热线
          <p class="phone">0571-88157838</p>
          <van-icon name="arrow" size="14px" color="#c8c8c8" class="icon"/>
        </li>
      </div>
      <div class="footer">
        <div class="company"></div>
        <div class="info">
          绑定淘票票乐影卡，即同意<a href="https://market.m.taobao.com/markets/TaoBaoMovie/charge-card-rule?spm=a1z2r.12235982.card-detail.2">《淘票票乐影卡章程》</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    alert () {
      alert('关联应用,小老弟不会')
    }
  },
  created () {
    let username = localStorage.getItem('username')
    if (username === null) {
      this.$router.push({ name: 'login' })
    } else {
      this.username = username
    }
  }
}
</script>

<style lang="less">
  .card-mod{
    background: #f5f5f5;
    height:100%;
    .head{
      width:327px;
      height:242px;
      padding:24px;
      background: #fff;
      & img{
        width:110px;
        height:70px;
        display: block;
        margin: 0 auto 30px;
      }
      .remain{
        text-align: center;
        line-height:13px;
        color:#999;
        font-size: 13px;
        margin-bottom:10px;
      }
      .amount{
        text-align: center;
        line-height: 50px;
        font-size: 50px;
        color: #333;
        margin-bottom:25px;
      }
      .btn{
        border-radius: 30px;
        height: 44px;
        font-size: 17px;
        color:#fff;
        width:100%;
        text-align: center;
        box-sizing:border-box;
        background-color: transparent;
        padding: 0 13px;
        line-height: 44px;
        font-weight: 500;
        background-image: linear-gradient(45deg,#ff798b,#fa445b);
      }
    }
    .content{
      margin-top:8px;
      background: #fff;
      & li{
        width: 343px;
        position: relative;
        vertical-align: middle;
        text-align: left;
        padding:8px 16px;
        height:37px;
        color:#000;
        font-size:15px;
        box-sizing:content-box  ;
        line-height: 37px;
        .icon{
          position: absolute;
          right:18px;
          top:20px;
        }
      }
      .phone{
        font-size: 13px;
        color: #c8c8c8;
        line-height: 16px;
        text-align: right;
        width: 260px;
        display: inline-block;
      }
      .problem::before{
        content: '';
        position: absolute;
        height:1px;
        background: #f5f5f5;
        width:96%;
        bottom:0;
        right:0;
      }
    }
    .footer{
      width:100%;
      position:fixed;
      bottom: 15px;
      height:41px;
      .company{
        margin:0 auto;
        width: 47px;
        height: 15px;
        background: url(//gw.alicdn.com/tfs/TB1BpiosmzqK1RjSZPcXXbTepXa-94-30.svg) 50% no-repeat;
        background-size: cover;
      }
      .info{
        margin-top:8px;
        text-align: center;
        height:18px;
        font-size:12px;
        color:#999;
        & a{
          color:#349ece;
        }
      }
    }
  }
</style>
