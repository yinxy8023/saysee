<template>
  <div id="app">
    <label for='my_file' class="theme-color">
  修改头像
  </label>
  <input type="file" ref="upload" name="avatar" id='my_file' style="display:none;" accept="image/jpg" @change="changeAvatar" />
  </div>
</template>
<script src="../../../image.js"></script>
<script>
import {ChangeAvatar} from "../../../image.js";
export default {
  methods: {
    changeAvatar (event) {
      let img = event.target.files[0];
      let size = img.size;
      if (size > 3145728) {
        alert('请选择3M以内的图片！');
        return false;
      }
      let Form = new FormData();
      Form.append('avatar', img, this.avatar_name);
      var url="img/changeavatar";
      this.axios.post(url,{params:Form})
      .then(res=>{//成功回调
         console.log(res)
      })
      .catch(err=>{//失败回调
          console.log(err)
      })
    }
  }
}
</script>
