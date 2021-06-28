const path = require('path');
const fs = require('fs');
const xlsx = require('node-xlsx');

const { SheetDefine }  = require('../interface/common.interface');

// 从命令行中获取地址信息
let xlsxPath: string | undefined = process.argv[2];
// 读取excel中的数据
const xlsxSheets = xlsx.parse(xlsxPath);
// 每一个sheet的list
const sheetsList = [];

xlsxSheets.forEach(sheet => {
  const list: [SheetDefine?] = [];

  console.log('sheet名字', sheet.name);
  
  // 每一个sheet的数据
  const sheetData = sheet.data;
  for (let i = 1; i < sheetData.length; i++){
    // 获取每一行的数据信息,返回的事一个数组，从A开始对应的数据数组中的0
    const row = sheetData[i];

    if (row && row.length > 0) {
      list.push({
        name: row[0],
        mobile: row[1],
        email: row[2],
        desc: row[5]
      })
    }
  }
  sheetsList.push(list);
})
console.log('=========================')

console.log('excel文件信息', sheetsList);

console.log('=========================')


