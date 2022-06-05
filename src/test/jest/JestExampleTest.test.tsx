/*
Jest単体のテスト例。
入力を受けて出力を返すだけの副作用のない関数のテストならJestだけで簡単に書ける。
toBeのような関数をmatcherと言い、めちゃくちゃ種類がある。
以下公式ドミュメント参照のこと。
https://jestjs.io/ja/docs/expect
*/

export const sum = (first: number, second: number) => {
  return first + second;
};

// プリミティブな値の比較をしたい時のテスト
test("足し算のテスト", () => {
  expect(sum(1, 2)).toBe(3);
});

interface Person {
  name: string;
  age: number;
}

export const addAgeKey = (personNameObject: Pick<Person, "name">): Person => {
  return {
    ...personNameObject,
    age: 20,
  };
};

// オブジェクトを比較したい時のテスト
test("ageを足すテスト", () => {
  const testObject = {
    name: "hoge",
  };
  const expected = {
    name: "hoge",
    age: 20,
  };
  // オブジェクトの比較をしたい時はtoEqual
  // 再帰的にvalueの比較をする。要するにオブジェクト同士のkeyを一つずつ検証する。
  expect(addAgeKey(testObject)).toEqual(expected);
});
