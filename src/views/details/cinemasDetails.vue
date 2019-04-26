<template>
  <div class="main">
    <van-icon name="arrow-left" class="left" @click="$router.back()"/>
    <div class="cinemaName">{{ cinemaId.name }}</div>
    <div class="ticketType">
      <span v-for="b in cinemaId.services" :key="b.name">{{ b.name }}</span>
      <van-icon name="arrow"/>
    </div>
    <div class="address">
      <van-icon name="location-o" class="left" size="20px" />
      <span>{{ cinemaId.address }}</span>
      <van-icon name="phone-o" class="right" size="20px"/>
    </div>
    <div class="swiperBox">
      <swiper :options="swiperOption">
        <swiper-slide v-for="a in cinemaDetails" :key="a.filmId">
          <img :src="a.poster" alt="" @click="fn1(a)">
        </swiper-slide>
      </swiper>
    </div>
    <div class="filmName">
      <div class="top">
        <p class="leftName"> {{ item.name }} &nbsp;</p>
        <em>{{ item.grade }} &nbsp;</em>分
      </div>
      <p class="bottom">{{ item.category }} | {{ item.runtime }}分钟 | {{ item.director }}</p>
      <van-icon name="arrow" class="arrow-right" @click="$router.push({ name: 'filmDetails', params: { id: filmId } })"/>
    </div>
    <van-tabs v-model="active" @click="fn3" sticky>
      <van-tab title="今天">
        <li class="filmTime" v-for="film in filmShowList" :key="film.scheduleId">
          <div>
            <span>{{ new Date(film.showAt * 1000).getHours() }} : {{ new Date(film.showAt * 1000).getMinutes() }}</span>
            <span>{{ new Date(film.endAt * 1000).getHours() }} : {{ new Date(film.endAt * 1000).getMinutes() }}散场</span>
          </div>
          <div class="middle">
            <span>{{ film.filmLanguage }}{{ film.imagery }}</span>
            <span>{{ film.hallName }}</span>
          </div>
          <div class="price">￥{{ film.salePrice / 100 }}</div>
          <router-link class="sale" :to="'/pay/'">购票</router-link>
        </li>
      </van-tab>
      <van-tab title="明天" >
        <li class="filmTime" v-for="film in filmShowList" :key="film.scheduleId">
          <div>
            <span>{{ new Date(film.showAt * 1000).getHours() }} : {{ new Date(film.showAt * 1000).getMinutes() }}</span>
            <span>{{ new Date(film.endAt * 1000).getHours() }} : {{ new Date(film.endAt * 1000).getMinutes() }}散场</span>
          </div>
          <div class="middle">
            <span>{{ film.filmLanguage }}{{ film.imagery }}</span>
            <span>{{ film.hallName }}</span>
          </div>
          <div class="price">￥{{ film.salePrice / 100 }}</div>
          <router-link class="sale" :to="'/pay/'">购票</router-link>
        </li>
      </van-tab>
      <van-tab title="后天">
        <li class="filmTime" v-for="film in filmShowList" :key="film.scheduleId">
          <div>
            <span>{{ new Date(film.showAt * 1000).getHours() }} : {{ new Date(film.showAt * 1000).getMinutes() }}</span>
            <span>{{ new Date(film.endAt * 1000).getHours() }} : {{ new Date(film.endAt * 1000).getMinutes() }}散场</span>
          </div>
          <div class="middle">
            <span>{{ film.filmLanguage }}{{ film.imagery }}</span>
            <span>{{ film.hallName }}</span>
          </div>
          <div class="price">￥{{ film.salePrice / 100 }}</div>
          <router-link class="sale" :to="'/pay'">购票</router-link>
        </li>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      // 轮播图
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        preventLinksPropagation: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      item: {},
      // date: Date.parse(new Date().toLocaleDateString()) / 1000,
      filmId: '',
      active: 0
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState('CinemaDetails', [
      'cinemaId',
      'cinemaDetails',
      'filmShowList'
    ])
  },
  // 监听数据变化，第一次渲染
  watch: {
    cinemaDetails (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.fn1(newVal[0])
      }
    }
  },
  methods: {
    ...mapActions('CinemaDetails', [
      'getCinemaId',
      'getCinemaDetails',
      'getFilmShowList'
    ]),
    getRandom: function () {
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      let length = 7
      let code = ''
      for (let i = 0; i < length; i++) {
        let randomI = Math.floor(Math.random() * 10)
        code += arr[randomI]
      }
      return code
    },
    fn1: function (data) {
      let num = this.getRandom()
      let date = this.cinemaDetails[0].showDate[0]
      this.item = data
      this.filmId = this.item.filmId
      this.getFilmShowList([this.$route.params.id, num, this.filmId, date])
    },
    fn3: function (index, title) {
      let num = this.getRandom()
      if (index === 0) {
        let date = this.cinemaDetails[0].showDate[0]
        this.getFilmShowList([this.$route.params.id, num, this.filmId, date])
      }
      if (index === 1) {
        let date = this.cinemaDetails[0].showDate[1]
        this.getFilmShowList([this.$route.params.id, num, this.filmId, date])
      }
      if (index === 2) {
        let date = this.cinemaDetails[0].showDate[2]
        this.getFilmShowList([this.$route.params.id, num, this.filmId, date])
      }
    }
  },
  created () {
    let num = this.getRandom()
    this.getCinemaId([this.$route.params.id, num])
    this.getCinemaDetails([this.$route.params.id, num])
  }
}
</script>

<style lang="less">
  .left {
    font-size: 24px;
    padding: 10px 0 10px 10px;
  }
  .cinemaName {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .ticketType {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #ffb232;
    display:flex;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #ffb232;
      margin-right: 5px;
      color: #ffb232;
      padding: 2px;
    }
  }
  .address {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    position: relative;
    padding-left: 45px;
    .left {
      margin-right: 10px;
      position: absolute;
      top: 2px;
      left: 10px;
    }
    span {
      display: inline-block;
      width: 270px;
      height: 44px;
      line-height: 44px;
      margin-right: 35px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .right {
      position: absolute;
      top: 10px;
      left: 340px;
    }
  }
  .swiperBox {
    width: 100%;
    height: 140px;
    background: pink;
    padding-top: 20px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 90px;
      height: 130px;
      img {
        width: 100%;
      }
    }
  }
  .filmName {
    width: 100%;
    height: 50px;
    padding: 15px 0;
    position: relative;
    .top {
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      .leftName {
        height: 20px;
        float: left;
        font-size: 16px;
        line-height: 20px;
      }
      em {
        float: left;
        font-style: oblique;
      }
    }
    .bottom {
      box-sizing: border-box;
      width: 100%;
      height: 20px;
      font-size: 13px;
      color: #797d82;
      line-height: 20px;
      text-align: center;
      padding: 0 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

    }
    .arrow-right {
      position: absolute;
      top: 30px;
      right: 10px;
    }
  }
  .filmTime {
    width: 100%;
    height: 80px;
    display: flex;
    font-size: 14px;
    justify-content: space-around;
    align-items: center;
    div {
      span {
        display: block;
      }
    }
    .middle {
      width: 105px;
      span {
        width: 105px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .price, .sale {
      color: #ffb232
    }
    .sale {
      border: 1px solid #ffb232;
      padding: 5px;
    }
  }
</style>
