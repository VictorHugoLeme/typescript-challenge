let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let total = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        total += soma
        campoSaldo.innerHTML = total.toString();
        limparSoma();
    }
}

function limparSoma() { soma.value = ""; }

function limparSaldo() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

botaoLimpar?.addEventListener('click', () => { limparSaldo(); });

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */