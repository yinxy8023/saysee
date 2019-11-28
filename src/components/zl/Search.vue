<template>
  <div>
    <mt-search v-model="value">
      <mt-cell id="search"
        v-for="(item,i) of list.data"
        :title="item.title"
        :value="item.value" :key="i">
      </mt-cell>
    </mt-search>
  </div>
</template>
<script>
import articlejson from "../../json/article.json"
export default {
  data(){
    return{
      value:"",
      list:articlejson
    }
  }
}
</script>
<style scoped>
.app-container>.mint-search>.mint-searchbar {
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 10px;
    z-index: 1;
    border:1px solid #fff;
    border-radius: 50px;
    background-color: #fff !important;
}
.mint-searchbar-inner{
  border:1px solid #f0f0f0;
  border-radius: 50px;
  background-color: #999;
}
mt-search #search{
  background: #fff !important;
}
</style>
