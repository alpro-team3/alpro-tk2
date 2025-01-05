function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  const resultField = document.getElementById('result');
  const resultValue = resultField.value.trim();

  if (resultValue === '') {
    resultField.value = 'ERROR ☹';
    return;
  }

  try {
    resultField.value = eval(resultValue);
  } catch (error) {
    resultField.value = 'ERROR ☹';
  }
}


function toggleTheme() {
  const body = document.body;
  const video = document.getElementById('background-video');
  const toggleButton = document.getElementById('theme-toggle');

  if (body.classList.contains('kurumi-theme')) {
    body.classList.remove('kurumi-theme');
    body.classList.add('arona-theme');
    video.src = "https://cdn.discordapp.com/attachments/1182122295171485769/1323324962219753595/arona.webm?ex=677419e9&is=6772c869&hm=3912d712516ab54cfb2cc8da99035a9b295945ba530495734a73f7661c28af8d&";
    toggleButton.style.backgroundImage = "url('https://i.imgur.com/wedWg0h.png')";
  } else {
    body.classList.remove('arona-theme');
    body.classList.add('kurumi-theme');
    video.src = "https://cdn.discordapp.com/attachments/1182122295171485769/1323327109564731392/kurumi.webm?ex=67741be9&is=6772ca69&hm=ea71d2f3ec9762bdad8a2e8397153923ac64ed412a36142ffb55207bb619b615&";
    toggleButton.style.backgroundImage = "url('https://i.imgur.com/uAdeaYN.png')";
  }
}
