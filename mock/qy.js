var Mock = require("mockjs")
var express = require("express")
var router = express.Router();
// 黑洞IP列表
router.use("/traction",function (req,res) {
    console.log(req.body);
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'key|+1': 1,
                'circuit__uuid__exact|1': ['侯旗-黑洞测试线路10G','侯旗-黑洞测试线路100M','线路8G---Roger'],
                'ip|1':['192.168.1.2','192.168.1.3','192.168.1.5'],
                'startTime':Mock.Random.date(),
                'des':Mock.Random.sentence( 7, 20 ),
                'option|1':['查看','修改']
            }]
        }
    );
    return res.json(data);
});

//IP段流量监控
router.use("/ipscanner",function (req,res) {
    console.log(req.body);
    //调用mock方法模拟数据
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'ipscanner|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        }
    );
    return res.json(data);
});

module.exports = router;