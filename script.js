const senhaCorreta = 25;

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("mensagemErro");
  const enigma = document.getElementById("enigma");
  const surpresa = document.getElementById("surpresa");
  const musica = document.getElementById("musica");
  const titulo = document.getElementById("titulo");
  const intro = document.getElementById("intro");

  if (senha == senhaCorreta) {
    erro.textContent = "";

    enigma.style.display = "none";
    titulo.style.display = "none";
    intro.style.display = "none";

    surpresa.style.display = "block";

    musica.volume = 0.3;
    musica.play();

    iniciarNeve();
  } else {
    alert("Senha incorreta, tente novamente!!!")
  }
}

function iniciarNeve() {
  const neve = document.querySelector(".neve");

  for (let i = 0; i < 60; i++) {
    const floco = document.createElement("span");
    floco.style.left = Math.random() * window.innerWidth + "px";
    floco.style.animationDuration = (Math.random() * 3 + 3) + "s";
    floco.style.opacity = Math.random();
    floco.style.transform = `scale(${Math.random()})`;

    neve.appendChild(floco);

    setTimeout(() => floco.remove(), 8000);
  }
}
