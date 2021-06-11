const router = require('koa-router')();
const sysinfo = require('../controller/sysinfo');

router.post('/api/sysinfo/info',sysinfo.info);

module.exports = router;