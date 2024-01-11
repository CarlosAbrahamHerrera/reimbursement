document.addEventListener('DOMContentLoaded', function() {
    var newRequestButton = document.querySelector('.new-request');
    var requestOptions = document.querySelector('.new-request-options');

    newRequestButton.addEventListener('click', function() {
        requestOptions.style.display = requestOptions.style.display === 'none' ? 'block' : 'none';
    });
   

    // Handle click on Active, Approved, and Closed tabs
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            requestOptions.style.display = 'none'; // Hide the request options
            statusMessage.style.display = 'block'; // Show the status message
        });
    });

    // Add event listeners for new request options here if needed
});
// ... existing code ...

document.querySelectorAll('.info-header').forEach(function(header) {
    header.addEventListener('click', function() {
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        this.querySelector('.caret').textContent = this.nextElementSibling.style.display === 'none' ? '▼' : '▲';
    });
});

// Add functionality for the new "Deferred Tuition (DT)" button
var deferredTuitionButton = document.querySelector('.request-option');
deferredTuitionButton.addEventListener('click', function() {
    // Logic to show information about Deferred Tuition (DT)
});
