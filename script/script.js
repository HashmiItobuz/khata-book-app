const outputBox = document.querySelector(".output-box");
const customerName = document.querySelector(".name-input-box");
const amount = document.querySelector(".amount-input-box");
const inputButtton = document.querySelector(".input-button");
const amountDisplay = document.querySelector(".amount-diplay");
const array = [];

inputButtton.addEventListener('click', () => {
    const userDetail = {
        name: customerName.value,
        amount: amount.value
    }

    array.push(userDetail);
    showDetails();
    console.log(array);
   
});

function showDetails() {
    outputBox.innerHTML = "";
    outputBox.innerHTML = ` <div class="d-flex flex-row justify-content-between title">
                                <span class="fs-4 fw-bolder text-start">S.No</span>
                                <span class="fs-4 fw-bolder">Consumer</span>
                                <span class="fs-4 fw-bolder">Amount</span>
                            </div>`
    for (let i = 0; i < array.length; i++) {
        let userName = array[i].name;
        let userAmount = array[i].amount;
        outputBox.innerHTML += `<div class="d-flex  justify-content-between align-items-center user-box rounded-3">
                                <div class=" d-flex justify-content-between align-items-center display-box py-2 px-3 rounded-3">
                                    <span class="text-white fs-4 pe-2 fw-bolder ms-5">${i + 1}.</span>
                                     <h3 class="text-white text-start">${userName}</h3>
                                     <p class="text-white fs-3 fw-bolder pt-2 amount-diplay"><i class="fa-solid fa-indian-rupee-sign fs-4 pe-2"></i>${userAmount}</p>
                                </div>
                                <div class="pe-2 editButton" onclick="editBox(${i})"><i class="fa-solid fa-pen-to-square text-white fs-2"></i></div>
                                <div class="editInputBox d-none"><input type="number" placeholder="Enter amount" class="py-2 me-2 edit-amount"></div>
                                </div>`;
    }
    customerName.value = "";
    amount.value = "";
}

const editInputBox = document.querySelector(".editInputBox");
function editBox() {
    alert();
    document.querySelector(".editButton").style.display = "none";
    document.querySelector(".editInputBox").style.display = "block";
    let editAmount = document.querySelector(".edit-amount");
    editAmount.addEventListener("keyup", (e)=> {
        console.log("Hii");
        if(e.key === "Enter"){
        console.log(userAmount);
        console.log(editAmount.value);
        userAmount[i] = Number(userAmount) + Number(editAmount.value);
        console.log(userAmount);
        }
    })
    showDetails();
}

