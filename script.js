function handleSubmit(event) {
  event.preventDefault(); 
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registered Successfully!");

  window.location.href = 'login.html'; 
}
