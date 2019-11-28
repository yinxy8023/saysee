const express=require('express');
const fileUpload = require('express-fileupload');
var imgRouter=express.Router();
imgRouter.use(fileUpload());

imgRouter.post('/changeavatar', function(req, res) {
  console.log(req.files); // the uploaded file object
  let avatar = req.files.avatar;

  // Use the mv() method to place the file somewhere on your server
  avatar.mv('saveimg/'+req.files.avatar.name+'.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});
module.exports=imgRouter;