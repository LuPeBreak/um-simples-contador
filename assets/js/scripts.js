(() => {
  const buttonIncrement = document.querySelector(".button-increment");
  const buttonDecrement = document.querySelector(".button-decrement");

  const currentNumber = document.querySelector(".current-number");
  const keepGoingText = document.querySelector(".keep-going-text");

  var counter = 0;

  buttonIncrement.addEventListener("click", () => {
    currentNumber.innerHTML = ++counter;
    switch (counter) {
      case 10:
        keepGoingText.innerHTML = "Continue Voce esta quase la";
        break;
      case 20:
        keepGoingText.innerHTML = "So mais um pouco!";
        break;
      case 40:
        keepGoingText.innerHTML = "Quaseeeee!";
        break;
      case 80:
        keepGoingText.innerHTML = "Bora que voce consegue!";
        break;
      case 100:
        keepGoingText.innerHTML = "PARABEEEENS continue clicando falta pouco!";
        break;
      case 1000:
        keepGoingText.innerHTML =
          "Ja parei de motivar a 900 clicks, porque continuou? foi esperto e usou um macro?( ou mudou o codigo? ) de toda forma ou voce persistiu ou pensou em como vencer PARABENS!";
        break;
    }
  });

  buttonDecrement.addEventListener("click", () => {
    if (counter <= 0) return;

    counter -= 1;
    currentNumber.innerHTML = counter;
    switch (counter) {
      case 0:
        keepGoingText.innerHTML =
          "Tente contar para cima primeiro! do chao nao passa";
        break;
      case 10:
        keepGoingText.innerHTML = "Assim voce ta quase perdendo";
        break;
      case 20:
        keepGoingText.innerHTML = "Poxa voce estava quase la";
        break;
      case 40:
        keepGoingText.innerHTML = "era Quaseeeee!";
        break;
      case 80:
        keepGoingText.innerHTML =
          "Bora que voce consegue! nao desista volte a clicar no +";
        break;
      case 100:
        keepGoingText.innerHTML = "Percebeu que era golpe?";
        break;
    }
  });
})();
