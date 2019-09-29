# rz-des
nodejs中的加密解密方法

### Install
```js
npm install --save rz-des
bower install rz-des
yarn add rz-des
```

### use
```js
const Des = require('rz-des')
or
import Des from 'rz-des'

const $util = new Des({
  alg: 'aes-128-cbc',
  key: 'asd123adaqwex123',
  iv:  'asd123adaqwex123'
});

console.log($util.encrypt('1234567812345678'));
```

### params 
```js
params: {
  key:'asd123adaqwex123', // 必传
  alg:'aes-128-cbc', // ... 注意不同算法规则的key 和 iv 的不同
  iv:'asd123adaqwex123'
}
```