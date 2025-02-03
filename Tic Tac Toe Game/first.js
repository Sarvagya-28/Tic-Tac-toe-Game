let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let New = document.querySelector("#New");
let para = document.querySelector(".msg");
let div = document.querySelector(".msg-container");
let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.innerText= "";
        box.disabled = false;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText ="O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0= true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    })
})


const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if ((pos1val === pos2val) && (pos2val === pos3val)){
                div.classList.remove("hide");
                para.innerText =`The Winner is ${pos1val}`;
                div.prepend(para);
                disableboxes();
                break;
            }
            else{
                if(count == 9){
                   Draw();
                }
            }
        }   
    }
}

const Draw = () => {
    div.classList.remove("hide");
    para.innerText =`This Game was a Draw`;
    div.prepend(para);
    disableboxes();
}

reset.addEventListener("click", () => {
    turn0= true;
    enableboxes();
})

New.addEventListener("click", () => {
    turn0= true;
    enableboxes();
    div.classList.add("hide");
})


