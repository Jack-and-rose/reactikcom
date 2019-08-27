var express = require("express")
var app = express();
var router = express.Router();

app.get('/', function(req, res) {
    res.send('hello');
});
// 黑洞系统
router.use("/qy",require('./qy'));

// 菜单
router.use("/menu",require('./menu'));

app.use("/admin",router)

app.listen(3001)