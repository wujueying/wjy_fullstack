module.exports = {
    async info(ctx, next){
        ctx.body = {
            msg: "OK",
            code: "0000",
            data: [{
              meta_description: '掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货,其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时,掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户,我们相信你也可以在这里有所收获。',
              meta_keyword: '视觉计算机,计算机视觉,计算机视觉算法,计算机视觉技术,计算机视觉的应用,计算机视觉与图像处理',
              ico: 'https://b-gold-cdn.xitu.io/favicons/v2/favicon-32x32.png',
              footer: '<p>Copyright 2021 前端技术博客</p><p>Designed & Powerd by lianxiaozhuang </p><p><a href="https://www.baidu.com" target="_blank">京ICP备000000号</a></p>'
            }]
          };
          ctx.status = 200      
    }
}