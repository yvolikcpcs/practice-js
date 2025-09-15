const { asyncPool } = require('./asyncPool.js');

test('runs in batches and preserves order', async () => {
  const urls = ['a', 'b', 'c'];
  const fetcher = (u) => Promise.resolve(`done:${u}`);
  const result = await asyncPool(urls, 2, fetcher);
  expect(result).toEqual(['done:a', 'done:b', 'done:c']);
});

test('handles rejections', async () => {
  const urls = ['a', 'b'];
  const fetcher = (u) => (u === 'a' ? Promise.reject('fail') : Promise.resolve('ok'));
  const result = await asyncPool(urls, 2, fetcher);
  expect(result).toEqual(['fail', 'ok']);
});
