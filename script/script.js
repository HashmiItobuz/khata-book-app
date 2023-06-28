const outputBox = document.querySelector(".output-box");
const customerName = document.querySelector(".name-input-box");
const amount = document.querySelector(".amount-input-box");
const inputButtton = document.querySelector(".input-button");

const array = [];

inputButtton.addEventListener('click', () => {
    console.log("Hiii");
    const userDetail = {
        name: customerName.value,
        amount: amount.value
    }

    array.push(userDetail);
    showDetails();
    console.log(array);
    function showDetails() {
        outputBox.innerHTML = "";
        outputBox.innerHTML = ` <div class="d-flex flex-row justify-content-between title">
                                    <span class="fs-4 fw-bolder text-start">S.No</span>
                                    <span class="fs-4 fw-bolder">Consumer</span>
                                    <span class="fs-4 fw-bolder">Amount</span>
                                </div>`
        for(let i=0; i<array.length; i++) {
            let userName = array[i].name;
            let userAmount = array[i].amount;
            outputBox.innerHTML += `<div class=" d-flex justify-content-between align-items-center user-box py-2 px-3 rounded-4">
                                        <span class="text-white fs-4 pe-2 fw-bolder">${i+1}.</span>
                                         <h3 class="text-white text-start">${userName}</h3>
                                         <p class="text-white fs-3 fw-bolder pt-2"><i class="fa-solid fa-indian-rupee-sign fs-4 pe-2"></i>${userAmount}</p>
                                    </div>`;            
        }
        customerName.value ="";
        amount.value="";
    }
});
