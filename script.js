document.addEventListener('DOMContentLoaded', function () {
    // New Request Tab and Options
    const newRequestButton = document.querySelector('.new-request');
    const requestOptions = document.querySelector('.new-request-options');
    const statusMessage = document.querySelector('#status-message');
    const tabs = document.querySelectorAll('.tabs button');
    const requestOptionButtons = document.querySelectorAll('.request-option');

    // Toggle New Request Options
    newRequestButton.addEventListener('click', function (event) {
        event.stopPropagation();
        requestOptions.style.display = requestOptions.style.display === 'none' || !requestOptions.style.display ? 'block' : 'none';
        statusMessage.style.display = 'none';
    });

    // Handle Other Tabs
    tabs.forEach(function (tab) {
        if (!tab.classList.contains('new-request')) {
            tab.addEventListener('click', function () {
                requestOptions.style.display = 'none';
                statusMessage.style.display = 'block';
            });
        }
    });

    // Details Toggle
    document.querySelectorAll('details summary').forEach(function (summary) {
        summary.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default summary behavior
            const details = this.parentElement;
            details.toggleAttribute('open');
        });
    });

    // Request Option Buttons Handling
    requestOptionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const requestType = this.textContent.trim();
            alert(`You selected: ${requestType}`);
            
            // Optional: You can add more specific logic here
            switch(requestType) {
                case 'Book Reimbursement':
                    console.log('Book Reimbursement clicked');
                    break;
                case 'Tuition Reimbursement':
                    console.log('Tuition Reimbursement clicked');
                    break;
                case 'Professional Expense':
                    console.log('Professional Expense clicked');
                    break;
                case 'Direct Payment Program':
                    console.log('Direct Payment Program clicked');
                    break;
                case 'Deferred Tuition (DT)':
                    console.log('Deferred Tuition clicked');
                    break;
            }
        });
    });
});