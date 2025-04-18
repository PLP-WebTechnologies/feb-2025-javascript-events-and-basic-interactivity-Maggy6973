
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    let isValid = true;
  
   
    if (username === '') {
      document.getElementById('usernameError').textContent = 'Username is required.';
      isValid = false;
    } else {
      document.getElementById('usernameError').textContent = '';
    }
  
    
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById('userForm').reset();
    }
  });
  
  
  document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FFDDC1', '#C1FFD7', '#C1D4FF', '#FFD1C1', '#D1C1FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });