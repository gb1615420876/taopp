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
      path1: './images/pay1.jpeg',
      path2: './images/pay2.jpg'
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


