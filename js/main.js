

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 	-26.176459794989203, lng: 27.98989067704797 }; 
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, #showcase a, .thisbtn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Input Validation

function Mail(name, email, phone, message){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
}

function UI(){}

UI.prototype.showAlert = function(message, className) {

  var oldElement = document.getElementById('response');
 
    response.innerHTML = message;
    response.className = `text-center ${className}`;

    setTimeout(function(){
      response.className = 'bg-light p-1 ';
      response.innerHTML = '';
      // console.log(oldElement.classList);
    }, 4000);
  }

UI.prototype.clearFields = function() {

document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('phone').value = '';
document.getElementById('message').value = '';
}

const contactForm = document.getElementById('message-form');

contactForm.addEventListener('submit', function(e){
  const name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        message = document.getElementById('message').value;
        
  const inputs = document.getElementsByTagName("input");
  const ui = new UI();
  
    if(name === "" || email === "" || phone === "" || message === ""){
      ui.showAlert('Please Fill In All fields', 'error')
    }else {
      ui.showAlert('Message Sent!', 'success');

      const formData = new FormData(contactForm);

      fetch(contactForm.getAttribute('action'), {
        method:'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams(formData).toString()
      })  
    }
  ui.clearFields();
  e.preventDefault();
}); 
  
  











