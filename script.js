document.addEventListener('DOMContentLoaded', function () {
    /* Select New Request Button and Options */
    var newRequestButton = document.querySelector('.new-request');
    var requestOptions = document.querySelector('.new-request-options');

    /* Select all tabs and the status message element */
    var tabs = document.querySelectorAll('.tabs button'); /* Select all tab buttons */
    var statusMessage = document.querySelector('#status-message'); /* Select status message element */

    /* Toggle visibility of New Request options when the "New Request" tab is clicked */
    newRequestButton.addEventListener('click', function (event) {
        event.stopPropagation(); /* Prevent other event handlers from triggering */
        requestOptions.style.display = requestOptions.style.display === 'none' || !requestOptions.style.display ? 'block' : 'none';
        statusMessage.style.display = 'none'; /* Ensure the status message is hidden */
    });

    /* Handle clicks on Active, Approved, and Closed tabs */
    tabs.forEach(function (tab) {
        if (!tab.classList.contains('new-request')) { /* Exclude the "New Request" tab */
            tab.addEventListener('click', function () {
                requestOptions.style.display = 'none'; /* Hide the request options */
                statusMessage.style.display = 'block'; /* Show the status message */
            });
        }
    });

    /* Add toggle functionality to all <summary> elements inside <details> */
    document.querySelectorAll('details summary').forEach(function (summary) {
        summary.addEventListener('click', function () {
            var details = this.parentElement;
            var isOpen = details.open;
            details.open = !isOpen; /* Toggle open state of <details> */
        });
    });

    /* Add functionality for the "Deferred Tuition (DT)" button */
    var deferredTuitionButton = document.querySelector('.request-option:nth-child(5)'); /* Select the 5th button specifically */
    deferredTuitionButton.addEventListener('click', function () {
        alert('Deferred Tuition details will go here.'); /* Replace with your logic */
    });
});
