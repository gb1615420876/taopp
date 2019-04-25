<template>
  <div class="filmDetails" >
    <div class="header-img">
      <img :src="filmdetails.poster" alt="影片图片">
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmdetails.name}}</span>
          <span class="item">{{ filmdetails.name && filmdetails.item['name'] }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ filmdetails.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category">{{ filmdetails.category }}</div>
      <div class="film-premiere-time">2019-04-24上映</div>
      <div class="film-nation-runtime">{{ filmdetails.nation }} | {{ filmdetails.runtime }} 分钟</div>
      <div class="film-synopsis">{{ filmdetails.synopsis}}</div>
    </div>
    <div class="actors">
      <div class="actors-title-bar">演职人员</div>
      <ul class="row-scroll">
        <div class="swiper-container a">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="actors in (filmdetails.actors)" :key="actors.index">
              <li class="row-scroll-item">
                <img :src="actors.avatarAddress" alt="">
                <span class="actors-name">{{ actors.name }}</span>
                <span class="actors-role"> {{ actors.role}}</span>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
    <div class="photos">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">全部(8) <van-icon name="arrow" /></span>
      </div>
      <ul class="row-scroll-items-nav">
        <div class="swiper-container b">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="photos
             in (filmdetails.photos)" :key="photos.index">
              <li class="row-scroll-item">
              <img :src="photos" alt="">
            </li>
            </div>
          </div>
        </div>

      </ul>
    </div>
<!--
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div> -->

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Swiper from 'swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapState('FilmDetails',[
      'filmdetails'
    ])
  },
  methods: {
    ...mapActions('FilmDetails',[
      'getfilmdetails'
    ])
  },

  created () {
    this.getfilmdetails({
      filmId: this.$route.params.id,
      callback: () => {
        this.$nextTick(() => {
          new Swiper('.a', {
            slidesPerView : 3,
            slidesPerGroup : 3,
          })
        })
      }
    })

  },
  components: {
    swiper,
    swiperSlide
  },
   mounted() {

   }
}

</script>

<style lang="less">
.filmDetails{
  background: #f4f4f4;
  .header-img{
    width: 375px;
    height: 211px;
    background: #fff;
    img{
      display: block;
      height: 100%;
    }
  }
  .film-detail{
    background: #fff;
    height: 189px;
    .col{
      display: flex;
      justify-content: space-between;
      height: 26px;
      margin-top: 10px;
      .film-name{
        width: 256px;
        .name{
          font-size: 18px;
          color: #191a1b;
          line-height: 26px;
          margin-left: 15px;
        }
        .item{
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          margin-left: 7px;
          line-height: 26px;
        }
      }
      .film-grade{
        width: 93px;
        color: #ffb232;
        text-align: right;
        margin-right: 15px;
        .grade{
          font-size: 18px;
          font-style: italic;
        }
        .grade-text{
          font-size: 10px;
        }
      }
    }
    .film-category,.film-premiere-time,.film-nation-runtime{
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
      margin-left: 15px;
    }
    .film-synopsis{
      font-size: 13px;
      color: #797d82;
      height: 36px;
      overflow: hidden;
      margin-top: 12px;
      margin-left: 15px;
    }
  }
  .actors{
    height: 192px;
    background: #fff;
    margin-top: 10px;
    .actors-title-bar{
      height: 52px;
      line-height: 52px;
      margin-left: 15px;
      color: #2c3e50;
    }
    .row-scroll{
      display: flex;
      height: 127px;
      .swiper-wrapper{
        width: 100%;
        height: 100%;
        transform: none;
      }
      .swiper-slide,.row-scroll-item{
        width: 85px;
        height: 127px;
        margin-left: 5px;
        img{
          width: 85px;
          height: 85px;
        }
        .actors-name{
          display: block;
          width: 85px;
          height: 18px;
          padding-top: 10px;
          font-size: 12px;
          color: #191a1b;
          text-align: center;
        }
        .actors-role{
          display: block;
          width: 85px;
          height: 18px;
          font-size: 10px;
          color: #797d82;
          text-align: center;
        }
      }
    }
  }
  .photos{
    height: 177px;
    margin-top: 10px;
    background: #fff;
    .photos-title-bar{
      height: 62px;
      display: flex;
      justify-content: space-between;
      .photos-title-text{
        font-size: 16px;
        color: #191a1b;
        margin-left: 15px;
        text-align: center;
        line-height: 62px;
      }
      .photos-to-all{
        font-size: 13px;
        color: #797d82;
        margin-left: 15px;
        text-align: center;
        line-height: 61px;
      }
    }
    .row-scroll-items-nav{
      overflow: hidden;
      display: flex;
      height: 100px;
      .row-scroll-item{
        width: 150px;
        margin-left: 15px;
        img{
          width: 150px;
          height: 100%;
        }
      }
    }
  }
}
</style>
