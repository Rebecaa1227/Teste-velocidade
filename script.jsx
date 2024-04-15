const btnTestar = document.querySelector('#btn-testar');
const resultado = document.querySelector('#resultado');

btnTestar.addEventListener('click', () => {
  const inicioTeste = performance.now();
  fetch('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
    .then(() => {
      const fimTeste = performance.now();
      const duracao = (fimTeste - inicioTeste) / 1000;
      const larguraBanda = 1 / duracao;
      resultado.textContent = `Sua largura de banda é de ${larguraBanda.toFixed(2)} Mbps`;
    });
});