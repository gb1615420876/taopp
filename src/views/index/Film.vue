/* <template>
  <div class="home-film">
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in 100"
            :key="item"
            :title="item"
          />
        </van-list>
      </van-tab>
      <van-tab title="即将上映">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 2,
      list: [],
      loading: false,
      finished: false
    }
  }
}
</script>

<style lang="less">
  .van-tab{
    flex: none;
    width: 94px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    right: 0;
  }
  .van-tab--active{
    color: #ff4d64;
    font-weight: 700;
  }

</style>
 */
