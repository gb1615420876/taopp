<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getFilmList(1)">
      <!-- <ul>
        <li class="item"
          v-for="item in filmList"
          :key="item.filmId">
          <router-link :to="'/film/' + item.filmId">
            <div class="img">
              <img :src="item.poster" alt />
            </div>
            <div class="info">
              <div class="film-name info-col">
                <span class="name">{{ item.name }}</span>
                <span class="item">{{ item.filmType.name }}</span>
              </div>
              <div class="film-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">{{ item.grade }}</span>
              </div>
              <div class="film-actors info-col">
                <span class="label">主演：{{ item.actors | formatActors }}</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
              </div>
            </div>
            <div class="buy">购票</div>
          </router-link>
        </li>
      </ul> -->
    </van-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: false,
      finished: false
    }
  },

  methods: {
    ...mapActions('film', [
      'getFilmList'
    ])
  },
  created () {
    this.getFilmList()
  }
}
</script>
