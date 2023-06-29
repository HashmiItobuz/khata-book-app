const outputBox = document.querySelector(".output-box");
const customerName = document.querySelector(".name-input-box");
const amount = document.querySelector(".amount-input-box");
const inputButtton = document.querySelector(".input-button");
const amountDisplay = document.querySelector(".amount-diplay");
const array = [];

inputButtton.addEventListener('click', () => {

    if(customerName.value === "") {
        alert("Please enter a name");
        return;
    }else if(amount.value === "") {
        alert("Please enter a valid amount");
        return;
    }

    const userDetail = {
        name: customerName.value,
        amount: amount.value
    }

    array.push(userDetail);
    showDetails();
});

function showDetails() {
    outputBox.innerHTML = "";
    outputBox.innerHTML = `<div class="d-flex flex-row justify-content-between title gap-">
                                <span class="fs-4 fw-bolder text-start">S.No</span>
                                <span class="fs-4 fw-bolder">Consumer</span>
                                <span class="fs-4 fw-bolder">Amount</span>
                            </div>`
    for (let i = 0; i < array.length; i++) {
        let userName = array[i].name;
        let userAmount = array[i].amount;
        outputBox.innerHTML += `<div class="d-flex  justify-content-between align-items-center user-box rounded-3">
                                <div class=" d-flex justify-content-between align-items-center display-box py-2 px-3 rounded-3">
                                    <span class="text-white fs-4 pe-2 fw-bolder ms-md-5">${i + 1}.</span>
                                     <h3 class="text-white text-start">${userName.trim().toUpperCase()}</h3>
                                     <p class="text-white fs-3 fw-bolder pt-2 amount-diplay"><i class="fa-solid fa-indian-rupee-sign fs-4 pe-2"></i>${userAmount.trim()}</p>
                                </div>
                                <div class="pe-2 editButton" onclick="editBox(${i})"><i class="fa-solid fa-pen-to-square text-white fs-2"></i></div>
                                <div id="editInputBox" class="displayBox"><input type="number" placeholder="Enter amount" class="py-2 me-2 edit-amount"></div>
                                </div>`;
    }
    customerName.value = "";
    amount.value = "";
}

function editBox(i){
    const editAmount = document.querySelectorAll(".edit-amount")[i];
    document.querySelectorAll("#editInputBox")[i].classList.toggle("displayBox");
    editAmount.addEventListener('keyup', (e)=> { 
        if(e.key === "Enter") {
            updateAmount(i);
            editAmount.value = "";
        }
    })

    function updateAmount(i) {
        array[i].amount = Number(array[i].amount) + Number(editAmount.value);
        showDetails();
    }

}
