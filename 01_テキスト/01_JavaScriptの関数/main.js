// 練習問題 １
// eslint-disable-next-line no-unused-vars
function plus1(x) {
  return x + 1
}
// 関数名: plus1
// 引数: x
// 返り値: x + 1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (n) {
  return n * 3 + 1
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (n) {
  return 10 * n + 1
}
// f3: 2, 14, 107, 1010, 10013, ...
function f3(n) {
  return f1(n) + f2(n)
}
// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const mutiply = function (x, y) {
  return x * y
}
console.log(mutiply(6, 7))

const plusRound = function (x, y) {
  return Math.round(x + y)
}
console.log(plusRound(3.1, 2.6))
