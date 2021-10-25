import Mock from 'mockjs';

//获取登录
Mock.mock(/\/api\/user\/login/, 'get', {
  status: 200,
  message: 'success',
  data: {
    id: '@string(10)', // 随机字符串id
    name: '@cname()', // 中文名称
  },
});

//获取用户列表数据
Mock.mock(/\/api\/user\/userList/, 'get', {
  status: 200,
  message: 'success',
  'data|5-10': [
    // data|n-m 随机生成 多少个
    {
      'id|+1': 1, // 模拟自增+1
      id: '@increment(1)', // 自增的数字
      name: '@cname()', // 中文名称
      introduce: '@cword(10,20)', // 中文字
      img: '@dataImage(64x64)', // 图片
    },
  ],
});
