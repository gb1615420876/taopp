<template>
  <div class="main">
    <van-icon name="arrow-left" class="left" @click="$router.back()"/>
    <div class="cinemaName">{{ cinemaId.name }}</div>
    <div class="ticketType">
      <span v-for="item in cinemaId.services" :key="item.name">{{ item.name }}</span>
      <van-icon name="arrow"/>
    </div>
    <div class="address">
      <van-icon name="location-o" class="left" />
      <span>{{ cinemaId.address }}</span>
      <van-icon name="phone-o" class="right"/>
    </div>
    <div class="swiperBox">
      <swiper ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState('CinemaDetails', [
      'cinemaId',
      'cinemaDetails'
    ])
  },
  methods: {
    ...mapActions('CinemaDetails', [
      'getCinemaId'
    ]),
    ...mapActions('CinemaDetails', [
      'getCinemaDetails'
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
    }
  },
  mounted () {

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
    padding-left: 140px;
    line-height: 44px;
    color: #ffb232;
    span {
      font-size: 12px;
      height: 44px;
      line-height: 44px;
      border: 1px solid #ffb232;
      margin-right: 5px;
      color: #ffb232;
    }
  }
  .address {
    width: 100%;
    height: 44px;
    line-height: 44px;
    .left {
      margin-right: 10px;
    }
    span {
      display: inline-block;
      height: 44px;
      line-height: 44px;
      margin-right: 35px;
    }
  }
  .swiperBox {
    width: 100%;
    height: 160px;
    background: pink;
  }
</style>
