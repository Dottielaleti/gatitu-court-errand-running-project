document.querySelectorAll('.header1 a').forEach(link =>{
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkClicked = document.querySelector(this.getAttribute('href'));
    if(linkClicked) {
      linkClicked.scrollIntoView({behavior: 'smooth'});
    }
    else{
      console.log("Target not found:", this.getAttribute('href'));
    }
  });
});

const requestButton = document.getElementById('requestButton');
const requestSection = document.getElementById('requestErrand');requestButton.addEventListener('click', () => {
  requestSection.scrollIntoView({behavior: 'smooth'});
});

const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', () => {
  window.open('https://wa.me/254708875610', '_blank');

});

const errandForm = document.getElementById('errandForm');
errandForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
  const name = document.querySelector('.name').value.trim();
  const phoneNumber = document.querySelector('.phone-number').value.trim();
  const errandDetails = document.querySelector('.errand-details').value.trim();
  const deliveryTime = document.querySelector('.delivery-time').value.trim();

  if(name && phoneNumber && errandDetails && deliveryTime) {

    const message = `New Errand Request:
    Name: ${name}
    Phone Number: ${phoneNumber}
    Errand Details: ${errandDetails}
    Preferred Delivery Time: ${deliveryTime}`;

    const waLink = `https://wa.me/254708875610?text=${encodeURIComponent(message)}`;

    window.open(waLink, '_blank');

    alert('Thank you, ' + name + '! Your errand request has been submitted.');
  } else {
    alert('Please fill in all the fields before submitting your request.');
  }

});

