var express = require("express");
var app = express();
app.use(express.static("./page/"));
app.listen(12306,function(){
	console.log("服务已启动");
});