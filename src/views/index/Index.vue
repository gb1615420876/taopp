<template>
  <div class="main index">
    <transition
    mode="out-in"
    appear
    enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutLeft"
    >
      <router-view></router-view>
    </transition>
     <van-tabbar
      v-model="active"
      active-color="#ff5f16">
      <van-tabbar-item icon="tv-o" :to="{ name: 'films' }">电影</van-tabbar-item>
      <van-tabbar-item icon="video-o" :to="{ name: 'cinemas' }">影院</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="{ name: 'homes' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
/* 下面三个导航 */
export default {
  data () {
    let active = this.$route.meta.tabNumber
    return {
      active: active
    }
  }
}
</script>

<style lang="less">
.main {
  height: 100%;
}
li,ul,ol{
  list-style: none;
}
</style>
