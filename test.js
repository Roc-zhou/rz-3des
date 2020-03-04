import Des from './index'

const $util = new Des({
  key: '751f621ea5c8f930',
  iv: '751f621ea5c8f930'
});

console.log('aes-128-cbc 加密 ---- ' + $util.encrypt('1234567812345678'));
console.log('aes-128-cbc 解密 ---- ' + $util.decrypt('4tDvLDtxvwJ7deC2FM4uVt5w2XtTJE6VF6wAVw6AWDE='));

const $util2 = new Des({
  alg: 'des-ede3-cbc',
  key: '0123456789asdf0123456789',
  iv: '12345678'
});

console.log('des-ede3-cbc 加密 ---- ' + $util2.encrypt('1234567812345678'));
console.log('des-ede3-cbc 解密 ---- ' + $util2.decrypt('IMX7ME18VyzSgS6OPr1szG9j81u3sS+1'));
