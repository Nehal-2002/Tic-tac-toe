let turn = "X";
let winval = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            winval = true;
            document.getElementsByClassName("win")[0].innerText = boxtext[e[1]].innerText + " win";
            document.getElementsByClassName("dance")[0].getElementsByTagName("img")[0].style.visibility = "visible";
        }
    })

}



// Game logic   
let box = document.getElementsByClassName("boxes");
for (let i = 0; i < box.length; i++) {

    box[i].addEventListener('click', () => {
        if ((box[i].childNodes[0].innerText === "") && winval === false) {
            box[i].childNodes[0].innerText = turn;
            turn = changeTurn();
            document.getElementsByClassName("win")[0].innerText = turn + "'s Turn";
            checkWin();
        }
    })
}

const clr = () => {
    document.getElementsByClassName("win")[0].innerText = "Welcome to this game";
    let x = document.getElementsByClassName("boxtext");
    for (let i = 0; i < x.length; i++) {
        x[i].innerText = "";
    }
    document.getElementsByClassName("dance")[0].getElementsByTagName("img")[0].style.visibility = "hidden";
    winval = false;
    turn = "X";
}