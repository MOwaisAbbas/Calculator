const input = document.querySelectorAll("input")[0];
const buttons = document.querySelectorAll("button");
let str = "";
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (!input.value) {
            str = '';
            input.value = str;
        }
        if (e.target.innerHTML === "=") {
            if (input.value === "") {
                str = '';
                input.value = str;
            } else {
                str = eval(str);
                input.value = str;
            }
        } else if (e.target.innerHTML === "DEL") {
            str = str.slice(0, str.length - 1)
            input.value = str;
        } else if (e.target.innerHTML === "AC") {
            str = '';
            input.value = str;
        }  else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})