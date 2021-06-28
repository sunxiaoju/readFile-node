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
 * @LastEditTime: 2021-06-28 13:37:50
 * @Description:
 */
// const swpath = require('path');
var wfs = require('fs');
var wxlsx = require('node-xlsx');
var excelPath = process.argv[2];
var data = [{
        name: '第一个sheet',
        data: [['0a', '0b', '0c'], ['1a', '1b', '1c'], ['0a', '0b', '0c'], ['1a', '1b', '1c']]
    }, {
        name: '第二个sheet',
        data: [['0a', '0b', '0c'], ['1a', '1b', '1c'], ['0a', '0b', '0c'], ['1a', '1b', '1c']]
    }];
if (!wfs.existsSync(excelPath)) {
    wfs.writeFileSync(excelPath, wxlsx.build(data), "binary");
}
