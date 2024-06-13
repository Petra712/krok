document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const counterDisplay = document.getElementById('counter');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  let intervalId;

  const updateDisplay = () => {
      counterDisplay.textContent = count;
  };

  const startCounting = () => {
      intervalId = setInterval(() => {
          count++;
          updateDisplay();
      }, 100); // Update every 1 second
  };

  stopButton.addEventListener('click', () => {
      clearInterval(intervalId);
  });

  resetButton.addEventListener('click', () => {
      count = 0;
      updateDisplay();
  });

  // Start the counter automatically when the page loads
  startCounting();
});
