<template>
    <div class="ticket">
      <li class="item"
      v-for="cont in ticketList"
      :key="cont.id">
        <div class="item-left">
          <span class="item-left-cont">座</span>
        </div>
        <div class="item-right">
          <div class="ticket-name">{{ cont.name }}</div>
          <div class="ticket-showtime">{{ cont.showtime }}</div>
          <div class="ticket-cinemaname">{{ cont.cinemaname }}</div>
        </div>
        <div class="score">
          <router-link tag="a" to="/" class='link'>评分</router-link>
        </div>
      </li>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('ticket', [
      'ticketList'
    ])
  },
  methods: {
    ...mapActions('ticket', [
      'getTicketList'
    ])
  },
  created: function () {
    let username = localStorage.getItem('username')
    if (username === null) {
      this.$router.push({ name: 'login' })
    } else {
      this.getTicketList()
    }
  }
}
</script>

<style lang="less">
  .ticket{
    height:100%;
    background:#f8f8f8;
    .item{
      height:100px;
      margin-top: 10px;
      display: flex;
      background: #fff;
      .item-left{
        position: relative;
        height:100%;
        width:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-right: 1px dashed #ebebeb;
        line-height: 100%;
        &::before {
          content: "";
          display: block;
          position: absolute;
          right: -6px;
          width: 12px;
          height: 6px;
          background: #f8f8f8;
          border-radius: 0 0 12px 12px;
        }
        &::after{
          content: "";
          border-radius: 12px 12px 0 0;
          display: block;
          position: absolute;
          right: -6px;
          bottom:0;
          width: 12px;
          height: 6px;
          background: #f8f8f8;
        }
        .item-left-cont{
          display: inline-block;
          text-align: center;
          height:24px;
          width:24px;
          border-radius:12px;
          color:#fff;
          line-height: 24px;
          font-size: 12px;
          background: #c8c8c8;
        }
      }
      .item-right{
        width:225px;
        height:100px;
        padding: 15px 5px 15px 15px;
        box-sizing:border-box;
        & div{
          height:18px;
          width:205px;
          font-size:12px;
          color:#c8c8c8;
        }
        .ticket-name{
          font-size:16px;
          height:24px
        }
        .ticket-showtime{
          margin-top: 6px;
        }
        .ticket-cinemaname{
          margin-top:4px;
        }
      }
      .score{
        width:100px;
        height:100px;
        display:flex;
        justify-content:center;
        align-items:center;
        .link{
          user-select: none;
          color: #ffc600;
          background-color: transparent;
          height: 28px;
          line-height: 28px;
          padding: 0 12px;
          font-size: 12px;
          border-radius: 120px;
          border: 1px solid #ffc600
        }
      }
    }
  }
</style>
