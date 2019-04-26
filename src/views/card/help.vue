<template>
    <div class="help-mod">
      <iframe src="https://h5.m.taobao.com/alicare/index.html?from=tpp_alipay_care&bu=tpp" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
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
  .help-mod{
    height:100%;
    iframe{
      height: 100%;
      width:100%;
    }
  }
</style>
