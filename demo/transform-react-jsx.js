const fs = require('fs');
const babel = require('@babel/core');

/* 第一步：模拟读取文件内容。 */
fs.readFile('./source-code.js', (e, data) => {
  console.log('data:\n', data);
  console.log('\n');
  const code = data.toString('utf-8');
  console.log('code:\n', code);
  console.log('\n');
  /* 第二步：转换 jsx 文件 */
  const result = babel.transformSync(code, {
    plugins: ['@babel/plugin-transform-react-jsx']
  });
  console.log('result:\n', result);
  console.log('\n');
  // /* 第三步：模拟重新写入内容。 */
  fs.writeFile('./code.js', result.code, function() {});
});
