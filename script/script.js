const outputBox = document.querySelector(".output-box");
const customerName = document.querySelector(".name-input-box");
const amount = document.querySelector(".amount-input-box");
const inputButton = document.querySelector(".input-button");
const amountDisplay = document.querySelector(".amount-diplay");
const array = [];

function showDetails() {
    outputBox.innerHTML = "";
    outputBox.innerHTML = `<div class="d-flex flex-row justify-content-between title">
                                <span class="fs-4 fw-bolder text-start">S.No</span>
                                <span class="fs-4 fw-bolder">Customer</span>
                                <span class="fs-4 fw-bolder">Amount</span>
                            </div>`
    for (let i = 0; i < array.length; i++) {
        let userName = array[i].name;
        let userAmount = array[i].amount;
        outputBox.innerHTML += `<div class="d-flex flex-column flex-md-row  justify-content-between align-items-center user-box rounded-3">
                                    <div class=" d-flex justify-content-between align-items-center display-box py-2 px-3 rounded-3">
                                        <span class="text-white fs-4 pe-2 fw-bolder ms-md-5">${i + 1}.</span>
                                        <h3 class="text-white text-start">${userName}</h3>
                                        <p class="text-white fs-3 fw-bolder mt-2 amount-diplay me-1"><i class="fa-solid fa-indian-rupee-sign fs-4 pe-2"></i>${userAmount}</p>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                         <div id="editInputBox" class="display-box"><input type="number" placeholder="Enter amount" class="py-2 me-2 edit-amount"></div>
                                         <div class="pe-2 edit-button" onclick="editBox(${i})"><i class="fa-solid fa-pen-to-square text-white fs-2"></i></div>
                                    </div>
                                </div>`;
    }
    customerName.value = "";
    amount.value = "";
}

inputButton.addEventListener('click', () => {

    if (customerName.value === "") {
        alert("Please enter a name");
        return;
    } else if (amount.value === "") {
        alert("Please enter a valid amount");
        return;
    }

    const userDetail = {
        name: customerName.value.trim().toUpperCase(),
        amount: amount.value.trim()
    }
    array.push(userDetail);

    showDetails();
});

function editBox(i) {
    const editAmount = document.querySelectorAll(".edit-amount")[i];
    document.querySelectorAll("#editInputBox")[i].classList.toggle("display-box");
    editAmount.addEventListener('keyup', (e) => {
        if (e.key === "Enter") {
            updateAmount(i);
            editAmount.value = "";
        }
    });

    function updateAmount(i) {
        array[i].amount = Number(array[i].amount) + Number(editAmount.value);
        console.log(array[i].amount);
        showDetails();
    }

}
