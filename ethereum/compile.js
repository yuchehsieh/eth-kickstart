/**
 * 之前的做法，每次要得到 compile 後的 bytecode, ABI
 * 都需要再重新跑一次 compile which is not efficient。
 *
 * 可以改進的地方在：
 * 1. compile 一次後，把他存在專案的某處(build folder, for example)
 *    要得到 bytecode, ABI 就不用再重新 compile 一次
 * 2. 當要「重新 compile」表示 contract 做了一些改動
 * **/

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

/** step1: 移除 build folder **/
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

/** step2: 讀 contracts folder 底下的 Campaign **/
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

/** step3: compile source，output 包含 Campaign, CampaignFactory
            之後要個別取出以及存在 build folder 之下
 **/
const output = solc.compile(source, 1).contracts;

/** step4: 創建 build folder，把 output 的內容（Campaign, CampaignFactory）分別寫入 **/
fs.ensureDirSync(buildPath);
for(let contract in output) {
    const fileName = `${contract.replace(':','')}.json`;
    fs.outputJsonSync(
        path.resolve(buildPath, fileName),
        output[contract]
    );
}
