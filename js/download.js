// Select the "Download CV" button and add an event listener
document.getElementById('downloadCvBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Create a temporary anchor element to trigger the download
    var link = document.createElement('a');
    link.href = 'assets/Ravindu Jayathilaka - CV.pdf'; // Path to the CV file
    link.download = 'Ravindu Jayathilaka - CV.pdf'; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
