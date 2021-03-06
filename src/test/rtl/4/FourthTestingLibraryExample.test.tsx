import { render, screen } from "@testing-library/react";
import Example from "./FourthTestingLibraryExample";
import axios from "axios";
import testData from "./testData.json";

/*
ここではaxiosのようなfetcherをmock化する方法について学ぶ。
*/

// axiosをjestのmockとして使うことを記載。
jest.mock("axios");

test("axiosのmock化のテスト", async () => {
  // as jest.MockとキャストしないとTypeScriptに怒られます。
  // 色々方法あるみたいです。(https://stackoverflow.com/questions/69659726/property-mockresolvedvalue-does-not-exist-on-type-t-any-r-axiosresponse)
  // mockResolvedValueでaxiosの戻り値をmockできます。
  (axios.get as jest.Mock).mockResolvedValue({
    data: testData,
  });
  // 上記のmockResolvedValueをしてからレンダリングするように注意。(mockデータないのでデータ取れないので)
  render(<Example />);
  const element = await screen.findAllByRole("listitem");
  // 少なくとも一つは描画されているかをテストする。
  expect(element[0]).toBeInTheDocument();
  // 全部描画できているかをテストする。どっちでも良さそう。
  expect(element).toHaveLength(testData.length);
});

test("axiosのmock化のテスト2", async () => {
  // ただ実際はコンポーネント内でいくつかAPIコールしているのが普通だと思います。
  // その場合は以下のように書けばurlに応じてtestDataの出し分けが出来ます。
  (axios.get as jest.Mock).mockImplementation((url) => {
    if (url === "https://jsonplaceholder.typicode.com/users") {
      return Promise.resolve({ data: testData });
    }
  });
  render(<Example />);
  const element = await screen.findAllByRole("listitem");
  expect(element[0]).toBeInTheDocument();
  expect(element).toHaveLength(testData.length);
});
