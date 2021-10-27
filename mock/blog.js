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
];
