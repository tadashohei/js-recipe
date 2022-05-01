const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")

const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  const text = memoinput.value /// 書かれた内容を取得した

  const card = document.createElement("div") /// <div  class="card">""</div>
  card.classname = "card" /// jsから枠を追加 classnameはcard
  card.textContent = text /// 書かれた内容を表示<div class ="card">"text"</div>

  memocontainer.append(text)
  console.dir(memoinput)
  console.log(memoinput.value)
  memoinput.value = ""
}
