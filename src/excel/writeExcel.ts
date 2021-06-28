// const swpath = require('path');
const wfs = require('fs');
const wxlsx = require('node-xlsx');

const excelPath = process.argv[2];
const data = [{
  name: '第一个sheet',
  data: [['aaaa', '0b', '0c'], ['1a', '1b', '1c'], ['0a', '0b', '0c'], ['1a', '1b', '1c']]
}, {
  name: '第二个sheet',
  data: [['0a', '0b', '0c'], ['1a', '1b', '1c'], ['0a', '0b', '0c'], ['1a', '1b', '1c']]
}]

// 如果excelPath 地址不存在，则创建一个自动创建一个文件，如果存在，直接覆盖从写
wfs.writeFileSync(excelPath, wxlsx.build(data), "binary");
