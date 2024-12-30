function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  const resultField = document.getElementById('result');
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = 'Error';
  }
}

function toggleTheme() {
  const body = document.body;
  const video = document.getElementById('background-video');
  const toggleButton = document.getElementById('theme-toggle');

  if (body.classList.contains('kurumi-theme')) {
    body.classList.remove('kurumi-theme');
    body.classList.add('arona-theme');
    video.src = "https://i.imgur.com/GumIkSy.mp4";
    toggleButton.style.backgroundImage = "url('https://i.imgur.com/wedWg0h.png')";
  } else {
    body.classList.remove('arona-theme');
    body.classList.add('kurumi-theme');
    video.src = "https://i.imgur.com/btbvvwh.mp4";
    toggleButton.style.backgroundImage = "url('https://i.imgur.com/uAdeaYN.png')";
  }
}
