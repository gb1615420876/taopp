<template>
  <div class="pay">
    <h3>没钱买个锤子 <van-button to='/films' round type="danger">点击告辞</van-button></h3>
    <img :src="path1" alt="">
    <img :src="path2" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      path1: 'http://b-ssl.duitang.com/uploads/item/201707/13/20170713020609_NSFfd.thumb.700_0.jpeg',
      path2: 'http://www.t-chs.com/tuhsJDEwLmFsaWNkbi5jb20vaTIvMjQwNTg4MDYyOC9UQjJvalZEbkNCWUJlTmp5MEZlWFhibm1GWGFfISEyNDA1ODgwNjI4JDk.jpg'
    }
  }
}
</script>

<style lang="less">
  h3{
    text-align: center;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>


