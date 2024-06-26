// Counter initialization and storage
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Function to update counter display
function updateCounter() {
  document.getElementById('clickCounter').textContent = clickCount;
}

// Function to handle Instagram button click
document.getElementById('instagramButton').addEventListener('click', function() {
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  updateCounter();
});

// Function to check and handle code submission
function checkCode() {
  let userInput = document.getElementById('codeInput').value.trim();
  if (userInput === "0112") {
    // Code is correct
    document.getElementById('codeInput').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none'; // Hide submit button
    document.getElementById('clickCounter').style.display = 'block';
    document.getElementById('resetButton').style.display = 'block'; // Show reset button
    updateCounter();
  } else {
    // Incorrect code
    document.getElementById('resetButton').style.display = 'none'; // Hide reset button
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('errorMessage').textContent = 'Incorrect Code!';
    setTimeout(function() {
      document.getElementById('errorMessage').style.display = 'none';
    }, 2000); // Hide error message after 2 seconds
  }
  return false; // Prevent form submission
}

// Function to show confirm and cancel buttons
function showConfirmCancelButtons() {
  document.getElementById('instagramButton').style.display = 'none';
  document.getElementById('clickCounter').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('confirmButton').style.display = 'block';
  document.getElementById('cancelButton').style.display = 'block';
}

// Function to reset the counter and show notification
function confirmReset() {
  clickCount = 0;
  localStorage.setItem('clickCount', clickCount);
  updateCounter();
  showNotification("Counter reset successfully!");
  hideConfirmCancelButtons();
}

// Function to hide confirm and cancel buttons and show original buttons
function cancelReset() {
  hideConfirmCancelButtons();
}

// Helper function to hide confirm and cancel buttons and show original buttons
function hideConfirmCancelButtons() {
  document.getElementById('instagramButton').style.display = 'block';
  document.getElementById('clickCounter').style.display = 'block';
  document.getElementById('resetButton').style.display = 'block';
  document.getElementById('confirmButton').style.display = 'none';
  document.getElementById('cancelButton').style.display = 'none';
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000); // Hide after 3 seconds
}
