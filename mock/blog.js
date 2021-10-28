const blogs = [
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
  {
    id: 1,
    name: 'golang gc解密',
    description: 'golang gc',
    img: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
    tags: 'go-gc-git',
  },
];

module.exports = [
  {
    url: '/blog/detail/count',
    type: 'get',
    response: () => {
      return {
        data: [1024, 211, 232123, 21321],
      };
    },
  },
  {
    url: '/blog/weekvisit',
    type: 'get',
    response: () => {
      return {
        data: [5, 5, 3, 2, 1, 2, 9],
      };
    },
  },
  {
    url: `/blog/list/page/`,
    type: 'get',
    response: () => {
      return {
        data: blogs,
      };
    },
  },
];
