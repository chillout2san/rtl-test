import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Example from "./ThirdTestingLibraryExample";

/*
ここではtoEnabledというmatcherを使えば、要素が有効かどうかチェックできるということを学ぶ。
加えてuserEventを使って、ボタンをクリックする等のユーザーの振る舞いが記述できることを学ぶ。
*/

test("toBeEnabledのテスト", () => {
  render(<Example />);
  const element = screen.getByRole("button", {
    name: "ON",
  });
  // ちなみにnot.toBeDisabled()と書いても構わない。
  // 分かりにくいので、個人的にはnotを使いたくない。
  expect(element).toBeEnabled();
});

test("toBeDisabledのテスト", () => {
  render(<Example />);
  const element = screen.getByRole("button", {
    name: "OFF",
  });
  expect(element).toBeDisabled();
});

test("userEventのテスト", () => {
  render(<Example />);
  const element = screen.getByRole("button", {
    name: "ON",
  });
  // onボタンのクリックを模擬的に行える。
  // ちなみによくfireEventと比較されるが、とりあえずuserEvent使っておくと良さそう。
  userEvent.click(element);
  expect(element).toBeDisabled();
});
