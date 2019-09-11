import Mock from 'mockjs';

Mock.mock('/api/headerList.json', ["区块链", "小程序", "vue", "毕业", "PHP", "故事", "flutter", "理财", "美食", "投稿", "手帐", "书法", "PPT", "穿搭", "打碗碗花"]);
Mock.mock('/api/home-data.json', {
  "success": true,
  "data": {
    "topicList": [{
      "id": 1,
      "title": "社会热点",
      "imgUrl": "//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }, {
      "id": 2,
      "title": "手绘",
      "imgUrl": "//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  "articleList": [{
    "id": 1,
    "title": "摄影技巧大公开（上），用光篇",
    "imgUrl": "//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "摄影本来就是光的游戏，有光，才有色彩，才有我们所看到的影像, 而快门的选择，是用光的关键，从这三个角度出发，讲讲如何拍出好照片，今天就先从第一个角..."
  }, {
    "id": 2,
    "title": "摄影技巧大公开（上），用光篇",
    "imgUrl": "//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "摄影本来就是光的游戏，有光，才有色彩，才有我们所看到的影像, 而快门的选择，是用光的关键，从这三个角度出发，讲讲如何拍出好照片，今天就先从第一个角..."
  }, {
    "id": 3,
    "title": '摄影技巧大公开（上），用光篇',
    "imgUrl": '//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    "desc": '摄影本来就是光的游戏，有光，才有色彩，才有我们所看到的影像, 而快门的选择，是用光的关键，从这三个角度出发，讲讲如何拍出好照片，今天就先从第一个角...'
  }, {
    "id": 4,
    "title": '摄影技巧大公开（上），用光篇',
    "imgUrl": "//upload-images.jianshu.io/upload_images/14978365-97f6492ba6438b2c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "摄影本来就是光的游戏，有光，才有色彩，才有我们所看到的影像, 而快门的选择，是用光的关键，从这三个角度出发，讲讲如何拍出好照片，今天就先从第一个角..."
  }
  ],
  "recommendList": [{
    "id": 1,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
  }, {
    "id": 2,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  }]
  }
});
Mock.mock('/api/home-list.json', {
  "success": true,
  "data": [{
    "id": 5,
    "title": "丢掉“什么都要做“的妄想，建立专属你的任务管理系统。",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/3982462-64a4c4508908149a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "◆ ◆ ◆ 文 | 李家小猫 相对于我们能做到的，我们知道得已经太多。 刚刚看完《每天最重要的3件事》，正如其书名就涵盖了书中最重要的内容。这些..."
  }, {
    "id": 6,
    "title": "丢掉“什么都要做“的妄想，建立专属你的任务管理系统。",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/3982462-64a4c4508908149a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "◆ ◆ ◆ 文 | 李家小猫 相对于我们能做到的，我们知道得已经太多。 刚刚看完《每天最重要的3件事》，正如其书名就涵盖了书中最重要的内容。这些..."
  }, {
    "id": 7,
    "title": "丢掉“什么都要做“的妄想，建立专属你的任务管理系统。",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/3982462-64a4c4508908149a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "◆ ◆ ◆ 文 | 李家小猫 相对于我们能做到的，我们知道得已经太多。 刚刚看完《每天最重要的3件事》，正如其书名就涵盖了书中最重要的内容。这些..."
  }, {
    "id": 8,
    "title": "丢掉“什么都要做“的妄想，建立专属你的任务管理系统。",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/3982462-64a4c4508908149a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    "desc": "◆ ◆ ◆ 文 | 李家小猫 相对于我们能做到的，我们知道得已经太多。 刚刚看完《每天最重要的3件事》，正如其书名就涵盖了书中最重要的内容。这些..."
  }]
});

Mock.mock('/api/detail.json', {
  "success": true,
  "data": {
    "title": "“永别了，我的驾照”北京上海汽车先后变革，还没考驾照的有福了",
    "content": "<p>车是人类历史上最伟大的发明之一，它让各地的距离变得很短，让人们生活更加方便。近日，无人驾驶的消息掀起了浪潮！消息来源于，百度CEO李彦宏坐上了自家研发的无人汽车，奔驰在北京的五环，意味着无人驾驶取得重大进步。未来无人驾驶技术成为可能!</p><img alt='bus' src='https://upload-images.jianshu.io/upload_images/9487966-a43466f41558b867?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp' /><p>还没有考驾照的朋友们有福了，随着无人驾驶技术的发展，国内外都对该技术给出了极大的支持。在之前，许多研发这项技术的汽车公司都会选择去欧美国家路段参加测试，进行回馈跟踪和调试。但是现在国内车企都的不用花费时间精力和金钱跑到国外去测试了，因为北京和上海已经开辟测试路段，这也意味着无人驾驶的时代要来了。</p>"
  }
});
