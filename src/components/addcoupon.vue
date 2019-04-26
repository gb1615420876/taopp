<template>
  <div class="addcoupon">
    <div class="top">
      <input type="text" placeholder="输入优惠码/兑换码">
    </div>
    <div class="bottom">
      确认
    </div>
  </div>
</template>

<style lang="less">
  .addcoupon{
    height:100%;
    width:100%;
    background: #f5f5f5;
    padding-top: 10px;
    .top{
      background: #fff;
      height:52px;
      padding:0 10px;
      & input{
        width:100%;
        height:100%;
        color:#b9b7c5;
        border:none;
        font-size:15px;
      }
    }
    .bottom{
      width:100%;
      height:55px;
      margin-top: 40px;
      background: #c9c9c9;
      font-size:17px;
      line-height: 55px;
      text-align: center;
      color:#fff;
    }
  }
</style>
