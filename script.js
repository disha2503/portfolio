// ------------------header and about--------------------- //
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    // Toggle nav menu
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  
    // Close nav menu
    navClose.addEventListener('click', function() {
      navMenu.classList.remove('show');
    });
  
    // Function to add 'active' class to current link
    function setActiveLink(link) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  
    // Handle click events to set active link and scroll to section
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
          setActiveLink(this);
          navMenu.classList.remove('show'); // Close the menu after clicking a link
        }
      });
    });
  
    // Update active link on scroll
    window.addEventListener('scroll', function() {
      let currentSectionId = '';
  
      // Determine which section is in view
      navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= (sectionTop - headerHeight) && window.scrollY < (sectionTop + sectionHeight - headerHeight)) {
            currentSectionId = sectionId;
          }
        }
      });
  
      // Set active class based on current section
      setActiveLink(document.querySelector(`.nav__link[href="#${currentSectionId}"]`));
    });
  });
  


//  ---------------------home----------------
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.github').addEventListener('click', function() {
        window.open('https://github.com/disha2503', '_blank');
    });
});
function downloadResume() {
    // Define the file path
    var filePath = 'resume/disha_resume.pdf';
    
    // Create an anchor element
    var a = document.createElement('a');
    a.href = filePath;
    a.download = 'disha_resume.pdf'; // Specify the file name

    // Append the anchor element to the body
    document.body.appendChild(a);
    
    // Click the anchor element to trigger the download
    a.click();

    // Remove the anchor element from the body
    document.body.removeChild(a);
}

// --------------projects-----------------//

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dbms').addEventListener('click', function() {
        window.open('https://github.com/disha2503/Student-Attendance-System', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.crime').addEventListener('click', function() {
        window.open('https://github.com/disha2503/Crime-Rate-Prediction', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.email').addEventListener('click', function() {
        window.open('https://github.com/disha2503/Email-spam-classifier', '_blank');
    });
});


// -----------------------experience--------------------------------
function openCertificate(url) {
    // Open the certificate image in a new tab/window
    window.open(url, '_blank');
}
// -------------------------contact----------------
// function sendEmail() {
//     console.log("sendEmail function called");  // Debug log

//     // Use `getElementById` to get the form elements
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     console.log("Form values:", name, email, message);  // Debug log

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "dishashetty197@gmail.com",
//         Password: "your_actual_password",  // Replace with your actual SMTP password
//         To: 'dishashetty197@gmail.com',
//         From: email,
//         Subject: "Enquiry form",
//         Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message
//     }).then(
//         function(response) {
//             console.log("Email sent successfully:", response);  // Debug log
//             alert("Message sent successfully!");
//             document.getElementById("contact-form").reset();
//         }
//     ).catch(
//         function(error) {
//             console.error("Failed to send email:", error);  // Debug log
//             alert("Failed to send the message. Please try again later. Error: " + error);
//         }
//     );
// }


// ---------------------footer----------------//

// Function to handle smooth scrolling with offset
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-top');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get target id without the '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the offset considering the height of the header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight;

                // Scroll to the target element with offset
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});