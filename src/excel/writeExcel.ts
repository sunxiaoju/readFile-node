/*
 * Copyright By ZATI
 * Copyright By 3a3c88295d37870dfd3b25056092d1a9209824b256c341f2cdc296437f671617
 * All rights reserved.
 *
 * If you are not the intended user, you are hereby notified that any use, disclosure, copying, printing, forwarding or
 * dissemination of this property is strictly prohibited. If you have got this file in error, delete it from your system.
 */

/*
 * @Author: xiaoju.sun
 * @Date: 2021-06-27 20:42:32
 * @LastEditors: xiaoju.sun
 * @LastEditTime: 2021-06-28 13:40:51
 * @Description: 
 */
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
