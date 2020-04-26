/**
 * 之前的做法，每次要得到 compile 後的 bytecode, ABI
 * 都需要再重新跑一次 compile which is not efficient。
 *
 * 可以改進的地方在：
 * 1. compile 一次後，把他存在專案的某處(build folder, for example)
 *    要得到 bytecode, ABI 就不用再重新 compile 一次
 * 2. 當要「重新 compile」表示 contract 做了一些改動
 * **/