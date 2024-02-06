document.addEventListener('DOMContentLoaded', function() {   
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', downloadContract);

    const populateButton = document.getElementById('populateBtn');
    populateButton.addEventListener('click', function() {
        populateContract();
        changeInputBackground();
        checkMandatoryFields();
    });


    function populateContract() {
        const clientName = document.getElementById('clientNameInput').value;
        const startDate = document.getElementById('startDateInput').value;
        const endDate = document.getElementById('endDateInput').value;
        const paymentAmount = document.getElementById('paymentAmountInput').value;
        const serviceDescription = document.getElementById('serviceDescriptionInput').value;
    
        const clientNamePlaceholder = document.getElementById('clientNamePlaceholder');
        const startDatePlaceholder = document.getElementById('startDatePlaceholder');
        const endDatePlaceholder = document.getElementById('endDatePlaceholder');
        const paymentAmountPlaceholder = document.getElementById('paymentAmountPlaceholder');
        const serviceDescriptionPlaceholder = document.getElementById('serviceDescriptionPlaceholder');
    
        clientNamePlaceholder.innerText = clientName || "[INSERT CLIENT NAME]";
        startDatePlaceholder.innerText = startDate || "[insert start date]";
        endDatePlaceholder.innerText = endDate || "[insert end date]";
        paymentAmountPlaceholder.innerText = paymentAmount || "[Insert Payment Amount]";
        serviceDescriptionPlaceholder.innerText = serviceDescription || "[Service Description]";
    }
    
    function changeInputBackground() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.backgroundColor = 'white';
        });
    }

    // Function to download the contract
    function downloadContract() {
        const pdf = new jsPDF();

    // Get the content of your contract container element
    const contractContent = document.querySelector('.contract-container');

    // Add the content to the PDF document
    pdf.html(contractContent, {
        callback: function (pdf) {
            // Save the PDF as a blob
            const blob = pdf.output('blob');

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'contract.pdf';

            // Trigger the download
            link.click();
        }
    });
    }

    function checkMandatoryFields() {
        const clientName = document.getElementById('clientNameInput').value;
        const startDate = document.getElementById('startDateInput').value;
        const endDate = document.getElementById('endDateInput').value;
        const paymentAmount = document.getElementById('paymentAmountInput').value;
        const serviceDescription = document.getElementById('serviceDescriptionInput').value;

        if (clientName && startDate && endDate && paymentAmount && serviceDescription) {
            // If all mandatory fields are filled, enable the download button
            downloadBtn.removeAttribute('disabled');
        } else {
            // If any mandatory field is empty, disable the download button
            downloadBtn.setAttribute('disabled', 'disabled');
        }
    }

});

    // const populateButton = document.getElementById('populateBtn');
    // populateButton.addEventListener('click', populateContract);

// document.addEventListener('DOMContentLoaded', function() {


//     function updateClientName() {
//         const clientNameInput = document.getElementById('clientNameInput');
//         const clientNamePlaceholder = document.getElementById('clientNamePlaceholder');
//         clientNamePlaceholder.innerText = clientNameInput.value || "[INSERT CLIENT NAME]";
//     }

//     function updatePaymentAmount() {
//         const paymentAmountInput = document.getElementById('paymentAmountInput');
//         const paymentAmountPlaceholder = document.getElementById('paymentAmountPlaceholder');
//         paymentAmountPlaceholder.innerText = paymentAmountInput.value || "[Insert Payment Amount]";
//     }

//     function updateServiceDescription() {
//         const serviceDescriptionInput = document.getElementById('serviceDescriptionInput');
//         const serviceDescriptionPlaceholder = document.getElementById('serviceDescriptionPlaceholder');
//         serviceDescriptionPlaceholder.innerText = serviceDescriptionInput.value || "[Service Description]";
//     }

//     function updateStartDate() {
//         const startDateInput = document.getElementById('startDateInput');
//         const startDatePlaceholder = document.getElementById('startDatePlaceholder');
//         startDatePlaceholder.innerText = startDateInput.value || "[insert start date]";
//     }

//     function updateEndDate() {
//         const endDateInput = document.getElementById('endDateInput');
//         const endDatePlaceholder = document.getElementById('endDatePlaceholder');
//         endDatePlaceholder.innerText = endDateInput.value || "[insert end date]";
//     }

//     // Function to download the contract
//     function downloadContract() {
//         // Create a new jsPDF instance
//         const pdf = new jsPDF();
        
//         // Get the content of your contract container element
//         const contractContent = document.querySelector('.contract-container');

//         // Add the content to the PDF document
//         pdf.html(contractContent, {
//             callback: function (pdf) {
//                 // Save the PDF as a blob
//                 const blob = pdf.output('blob');
                
//                 // Create a temporary link element
//                 const link = document.createElement('a');
//                 link.href = URL.createObjectURL(blob);
//                 link.download = 'contract.pdf';

//                 // Trigger the download
//                 link.click();
//             }
//         });
//     }

//     // Add event listener to the download button
//     const downloadButton = document.getElementById('downloadBtn');
//     downloadButton.addEventListener('click', downloadContract);

// });





//Function to update the page number dynamically
// function updatePageNumber() {
//     const totalPages = calculateTotalPages();
//     const pageNumberElement = document.getElementById('pageNumber');
//     pageNumberElement.innerText = `Page 1 of ${totalPages}`;
// }

// // Function to calculate the total number of pages (dummy implementation)
// function calculateTotalPages() {
//     // Replace this with your logic to calculate the total number of pages
//     return 1; // For example, assume there are 5 pages
// }

// Call the function initially
// updatePageNumber();

// Add event listener for changes that might affect the page number
//window.addEventListener('resize', updatePageNumber);
// You might need to add more event listeners based on your form content changes
// For example, you can add event listeners for input changes, form submission, etc.


// function downloadContract() {

//     // Create a new jsPDF instance
//     const pdf = new jsPDF();
    
//     // Get the content of your contract form
//     const contractContent = document.querySelector('.contract-container').innerHTML;

//     // Add the content to the PDF document
//     pdf.html(contractContent, {
//         callback: function (pdf) {
//             // Save the PDF as a blob
//             const blob = pdf.output('blob');
            
//             // Create a temporary link element
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = 'contract.pdf';

//             // Trigger the download
//             link.click();
//         }
//     });


//     // Check if all mandatory fields are filled
//     const clientName = document.getElementById('clientName').value;
//     const paymentAmount = document.getElementById('paymentAmount').value;
//     const serviceDescription = document.getElementById('serviceDescription').value;
//     const startDate = document.getElementById('startDate').value;
//     const endDate = document.getElementById('endDate').value;

//     if (!clientName || !paymentAmount || !serviceDescription || !startDate || !endDate) {
//         alert("Please fill in all mandatory fields before downloading the contract.");
//     } else {
//         // Download the contract (dummy download link)
//         const dummyDownloadLink = document.createElement('a');
//         dummyDownloadLink.href = '#'; // Replace with the actual download link
//         dummyDownloadLink.download = 'BMF_Contract.pdf';
//         dummyDownloadLink.click();
//     }
// }

// // Add event listener to the download button
// const downloadButton = document.getElementById('downloadBtn');
// downloadButton.addEventListener('click', downloadContract);

// // // Function to download the contract template
// function downloadContractTemplate() {
//     // Replace 'contract_template.pdf' with the actual URL of your contract template file
//     const contractTemplateUrl = 'https://www.google.com/contract_template.pdf';

//     // Create a temporary anchor element to trigger the download
//     const downloadLink = document.createElement('a');
//     downloadLink.href = contractTemplateUrl;
//     downloadLink.download = 'contract_template.pdf';
//     downloadLink.click();
// }

// // Call downloadContractTemplate when needed, for example, when the page loads
// window.addEventListener('load', downloadContractTemplate);


// window.onload