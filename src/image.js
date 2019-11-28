let ChangeAvatar = (img) => this.axios({
  url: '/img/changeavatar',
  method: 'post',
  anync: true,
  contentType: false,
  processData: false,
  data: img
});
export{
	ChangeAvatar
}