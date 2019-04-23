<template>
  <div class="home-film">
      <van-tabs v-model="curTab" @click="onTabClick">
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
import { mapActions, mapMutations, mapState } from 'vuex'
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
  },

  methods: {
    ...mapMutations('film', [
      'clearData'
    ]),

    onTabClick (index, title) {
      let filmType = index === 0 ? 'nowPlaying' : 'commingSoon'
      this.clearData()

      this.$router.replace({
        name: 'films',
        params: {
          filmType
        }
      })
    }
  },
}
</script>

<style lang="less">
  .van-tab--active {
    font-weight: 700;
    color: #ff4d64
  }
</style>
