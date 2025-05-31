const revelaSenha = document.getElementById('toggleIconeRevelaSenha')
const senha = document.getElementById('idsenha')

revelaSenha.addEventListener('click', function () {

    //Se a senha for do tipo texto
    const type = senha.type === "password" ? "text" : "password"

    senha.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    //cortar o ollho
});


const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('inome').value.trim();
    const senha = document.getElementById('idsenha').value.trim();

    if (nome && senha) {
        // Redireciona para a próxima página se os campos estiverem preenchidos
        location.href = ' '; //ligar página
    } else {
        // Alerta se não estiverem preenchidos
        alert('Por favor, verifique se todos os campos estão preenchidos!');
    }
});
