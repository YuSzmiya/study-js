import { render } from "./view/html-util";

console.log("App.js: loaded");
export class App{
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    formElement.addEventListener("submit", (event) => {
      // submitイベントの本来の動作を止める
      event.preventDefault();
      // 追加するTodoアイテムの要素を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      // TodoアイテムをtodoListElementに追加する
      todoListElement.appendChild(todoItemElement);
      //コンテナ要素の中身をtodoリストをまとめるList要素で上書きする
      render(todoListElement, containerElement);
      // Todoアイテム数を+1し、表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      // 入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
