<template>
  <div class="binding">
    <div class="bindingbtn">
      <input type="text" v-model="city"/>
    </div>
    <div v-show="isshow">
      <p v-for="item in selectCitys" :key="item">{{item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isshow:true,
      city:"",
      citys:['北京','北海','东北','上海','武汉','东京','广州','广元市','上饶','上水市'],
      selectCitys:[]
    }
  },
  methods:{

  },
  watch:{
    city:function(val, oldVal){
      if(val.length==0){
         this.isshow = false
       }else{
          this.isshow = true;
          var citys = []
          this.citys.forEach((item,index) => {
              if(item.indexOf(val)>=0){
                  citys.unshift(item)
              }
          })
          this.selectCitys = citys;
       }
    }
  }
}
</script>
<style scoped>
ul{
  border:1px solid red;
}
li{
  height:40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.bindingbtn input{
  border:1px solid #333;
  height:44px;
  line-height:44px;
}
</style>
