// // Seleção de elementos
// const multiplicationFomr = document.querySelector("#multiplication-form");
// ;const numberInput = document.querySelector("#number")
// const multiplicationInput = document.querySelector("#multiplicador");

// const multiplicationTitle = document.querySelector("#multiplication-title span")

// const multiplicationTable = document.querySelector("#multiplication-operations");

// // Funções
// const createTable = (number, multiplicatorNumber) => {
//     multiplicationTable.innerHTML = "";

//     for (i =1; i <= multiplicatorNumber; i++) {
//         const result = number * i;

//         const template = `<div class="row">
//                  <div class="operation> ${number} x ${i} = </div>
//                  <div class="result">${result}</div>
//             </div>`
        
//         const parser = new DOMParser()

//         const htmlTemplate = parser.parseFromString(template, "text/html")

//         const row = htmlTemplate.querySelector(".row");

//         multiplicationTable.appendChild(row);
//     }
//     multiplicationTitle.innerText = number;
// }

// // Enventos

// multiplicationFomr.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const multiplicationNumber = +numberInput.value;

//     const multiplicatorNumber = +multiplicationInput.value;

//     if (!multiplicationNumber || !multiplicationNumber) return;

//     createTable(multiplicationNumber, multiplicatorNumber)
// })



// Seleção de elementos
const multiplicationFomr = document.querySelector("#multiplication-form");
;const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicador");

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i =1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const row = document.createElement("div")
        row.className = "row"

        const operation = document.createElement("div")
        operation.className = "operation"
        operation.textContent = `${number} x ${i} = `


        const result2 = document.createElement("div")
        result2.className = "result"
        result2.textContent = result

        row.append(operation, result2)

        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
}

// Enventos

multiplicationFomr.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})