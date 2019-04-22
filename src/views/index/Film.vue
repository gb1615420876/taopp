<template>
  <div class="main">
      <van-tabs v-model="curTab">
        <van-tab title="正在上映">
          <nowPlaying v-if="curTab === 0"></nowPlaying>
        </van-tab>
        <van-tab title="即将热映">
          <commingSoon v-if="curTab === 1"></commingSoon>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import nowPlaying from '@/components/nowPlaying.vue'
import commingSoon from '@/components/commingSoon.vue'
export default {
  components: {
    nowPlaying,
    commingSoon
  },

  data () {
    let curTab = this.$route.params.filmType === 'nowPlaying' ? 0 : 1
    return {
      curTab: curTab
    }
  }
}
</script>

<style lang="less">
  .van-tab--active {
    font-weight: 700;
    color: #ff4d64
  }
</style>
