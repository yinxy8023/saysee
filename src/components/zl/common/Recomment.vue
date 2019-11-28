<template>
    <div class="app-recomment">
        <div class="recomment-text"><h2>选择感兴趣的内容</h2></div>
        <div class="recomment-p"><span>根据兴趣,生成私人订制的"我说"</span></div>
        <!--第一层-->
        <div class="top">
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/bb.jpg"><p>亲子</p></div>
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/mx.jpg"><p>时尚穿搭</p></div> 
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/dg.jpg"><p>美食</p></div> 
            </div>
        <!--第二层-->
        <div class="top">
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/we.jpg"><p>旅行</p></div>
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/recomment.jpg"><p>写真</p></div>
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/yy.jpg"><p>音乐</p></div>
        </div>
        <!--第三层-->
        <div class="top">
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/hll.jpg"><p>明星</p></div>
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/xh.jpg"><p>鲜花</p></div>
            <div class="text"><input type="checkbox" ><img src="../../../assets/img/ss.jpg"><p>婚礼</p></div>
        </div>
        <div class="btn"> <router-link to="/Index"><button>至少关注4个兴趣</button></router-link></div>
    </div>
</template> 
<script>
export default {
           data(){
               return{

                disabled:false
               }
             
           },
    //  methods:{
            
    //           changeItem(){
    //               //功能:为商品复选框添加修改事件,如果图片状态true大于等于4个 提交按钮生效
    //               input.cb=false;

    //               //1:创建变量sum累加和
    //               var sum=0;
    //               //2:创建循环遍历数组中所有元素cb
    //               for(var item of input){
    //                   if(item.cb){sum++}
    //               }
    //               //3:如果状态为true sum++
    //               if(sum>=4){
    //                    //4:sum大于等于4
    //               //5:提交按钮状态为true
    //                   this.disabled=true
    //               }else{
    //                   this.disabled=false;
    //               }
                 
    //           }
    //           }
}
</script>

<style scoped>
input{
    margin-left: 0;
    position: relative;
    top: 35px;
    left: 95px;
    z-index: 1000;
    border-radius: 50%;
   }

h2{
    margin-bottom: 15px;
    
}

.top{
    
    width:100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    flex-wrap: nowrap;
    margin-bottom: 0px; 
    padding: 0px;
    }

    

.top div{
    width: 33.33%;
    
    overflow: hidden;
    border-radius:12px;
    padding:3px;
}
img {width:100%;
     height: 122px;
     border-radius:6%;
      
    
      /* position:relative; */
      
}
h2{
    text-align: center;
}
p{
   text-align: center;
   color:black;
   
}
span{
    padding-left: 74px;
    color:gray;
    padding-bottom: 15px;
}
p[data-v-c5069db6] {
   margin-bottom: -3px;
   margin-top: 10px;
}
button{
    width:45%;
    border-radius:20px;
    padding:8px;
    margin: 6px;
    color: aliceblue;
    border: none;
    background:#fa866e;
}
.btn{
    text-align: center;
    margin-top: 15px;
}
p{
   
    margin: 0;
   
}

</style>
