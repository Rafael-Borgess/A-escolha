function sortearOpcao() {
    const opcao1 = document.getElementById('opcao1').value;
    const opcao2 = document.getElementById('opcao2').value;
    const opcao3 = document.getElementById('opcao3').value;

    const opcoes = [opcao1, opcao2, opcao3];
    const opcaoSorteada = opcoes[Math.floor(Math.random() * opcoes.length)];

    document.getElementById('opcoes').style.display = 'none';
    document.getElementById('resultado').innerHTML = opcaoSorteada;
    document.getElementById('resultado').classList.remove('oculto');
}
