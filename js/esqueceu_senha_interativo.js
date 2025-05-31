const revelaSenha1 = document.getElementById('toggleIconeRevelaSenha1');
const senha = document.getElementById('idSenha');

revelaSenha1.addEventListener('click', function () {

    const type = senha.type === "password" ? "text" : "password";
    senha.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});


const revelaSenha2 = document.getElementById('toggleIconeRevelaSenha2');
const novaSenha = document.getElementById('novaSenha');

revelaSenha2.addEventListener('click', function () {
    
    const type = novaSenha.type === "password" ? "text" : "password";
    novaSenha.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const senha = document.getElementById('idSenha').value.trim();
    const novaSenha = document.getElementById('novaSenha').value.trim();

    if (senha && novaSenha) {
        // Redireciona para a próxima página se os campos estiverem preenchidos
        location.href = 'sua_pagina_aqui.html'; // Colocar página
    } else {
        // Alerta se não estiverem preenchidos
        alert('Por favor, verifique se todos os campos estão preenchidos!');
    }
});
