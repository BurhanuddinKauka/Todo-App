let inputValue = document.querySelector('.input-box');
let todoContainer = document.querySelector('.todo-container');
let themeIcon = document.querySelectorAll('.theme-toggle-btn');
let submitBtn = document.querySelector('.submit');

let arr = [];

let buttonToggle = true;

function changingThemeColor() {
    
}

changingThemeColor();

// function changingThemeIcons() {
//     themeToggleBtn.forEach(btn => {
//         btn.addEventListener('click', () => {
//             btn.classList.toggle("light-theme")
//             if (btn.dataset.dark) {
//                 alert("dark")
//             }
//             alert("light")
                
//         })
//     })
// }




submitBtn.addEventListener('click', () => {
    arr.push(inputValue.value);
    let innerTodoItems = "";

    arr.forEach(item => {
        innerTodoItems += `
            <div class="todo-items">
                <input type="checkbox" id="checkbox" class="checkbox" name="checkbox">
                <label for="checkbox" class="checkbox-text">${item}</label>
            </div>
        `
        todoContainer.innerHTML = innerTodoItems;
    })
    inputValue.value = "";
})




