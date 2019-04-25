<template>
    <div class="help-mod">
      help
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
    .head{
      width:327px;
      height:242px;
      padding:24px;
    }
  }
</style>
