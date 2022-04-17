const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value  //inputelement ??

  // card を作成
  const card = document.createElement("div") //<div></div>ができあがる
  card.className = "card"  //classname?? //  <div> class = "card"</div>になる

  // todo を作成
  const todo = document.createElement("div") ///新しいtodo 要素ができた
  todo.className = "todo"  /// ??  <div>class = "todo" </div>になる
  todo.textContent = text /// vtodo の中身変更 <div class = "todo"> text </div>になる

  // todo を card の中に追加する
  card.append(todo)  //append??

  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

const deleteButton = document.createElement("div")
deleteButton.className = "delete"

// 削除ボタンを押したときの処理を登録
deleteButton.onclick = function() {
  // カードを削除する
  card.remove()
}
card.append(deleteButton)

return card
}
