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
];
