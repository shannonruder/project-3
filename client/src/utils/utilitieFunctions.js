import { forEach } from 'lodash';

function uniqueImg(arr) {
  const cache = {}
  arr.forEach(ele => {
    const url = ele.image.url
    if (!cache[url]) cache[url] = ele
  })
  const res = []
  forEach(cache, (value, key) => {
    res.push({
      ...value, key
    })
  })
  return res
}

export default {
  uniqueImg
}