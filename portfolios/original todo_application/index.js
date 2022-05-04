// まずは送信された値のリストへの出力を実装
// 次にリロードされても残るような機能を実装
const submit = document.getElementById("submit");
const text = document.getElementById("text");
const ul = document.getElementById("ul");
const todoLists = JSON.parse(localStorage.getItem("todoLists"));

window.onload = function(){
    document.onkeypress = enterForbidden;

    function enterForbidden(){
        if(window.event.keyCode == 13){
            return false;
        }
    }
    if(todoLists){
        todoLists.forEach(todo =>{
            add(todo);
        })
    }
}
submit.addEventListener("click" , function(event){
     event.preventDefault();
    add();
    save();
});

function add(todo){
    let todoText = text.value
    if(todo){
        todoText = todo;
    }
    const li = document.createElement("li");
    li.setAttribute("class" , "d-flex justify-content-between align-items-center");
    const p = document.createElement("p");
    p.textContent = todoText;
    p.classList.add("mb-0");
    li.appendChild(p);
    // 編集、削除ボタンの追加
    // ---編集ボタン---
    const editButton = document.createElement("input");
    editButton.setAttribute("type" , "button");
    editButton.setAttribute("class" , "btn btn-primary me-2 edit-component");
    editButton.setAttribute("value" , "編集")
    const buttons = document.createElement("div");
    buttons.setAttribute("class" , "")
    buttons.appendChild(editButton);
    li.appendChild(buttons);
    // ---編集ボタン---
    
    // 編集機能
    editButton.addEventListener('click' , function(){
        let editedText = prompt(todoText);
        if (editedText){
            p.textContent = editedText;
            save();
        }else{
            alert("フォームに入力されていません")
        }
    })

    // /編集機能

    // ---削除ボタン---
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type" , "button");
    deleteButton.setAttribute("id" , "delete")
    deleteButton.setAttribute("class" , "btn btn-secondary edit-component");
    deleteButton.setAttribute("value" , "削除")
    buttons.appendChild(deleteButton);

    //  削除機能
    deleteButton.addEventListener("click" , function(){
        if(window.confirm("本当に削除しますか")){
            let buttonParent = deleteButton.parentNode;
            let divParent = buttonParent.parentNode;
            divParent.remove();
            save();
        }

    })

    // ---削除ボタン---
    if(todoText){
        li.classList.add("list-group-item");        
        ul.appendChild(li);
        text.value = "";
    }
}

function save(){
    const lists = document.querySelectorAll("li");
    let todoLists = [];
    lists.forEach(list=>{
        let todo = list.textContent;
        todoLists.push(todo);
    })
    
    localStorage.setItem("todoLists" , JSON.stringify(todoLists));
}

// 削除機能の実装


// 開発ログ
// 4/16日時点　リロードしても削除されない機能を追加した。　次回は削除機能をつくる　そのあとにチェックボックス機能を作る　→時間が一定以上経ったら勝手に消える機能作れたらいいね

// 編集機能の追加
// 編集後に編集ボタンと削除ボタンがなくなる現象→save()にボタンのデータが保存されていないため

// 開発ログ 4/24 
// classList.addと、setAttributeが混同しているのに一貫性がない