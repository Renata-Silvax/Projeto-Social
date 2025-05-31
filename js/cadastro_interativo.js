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



const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault(); //Evita o envio padrão do formulário

    //Pegando os valores dos campos
    const nome = document.getElementById('inome').value.trim()
    const email = document.getElementById('iemail').value.trim()
    const senha = document.getElementById('idsenha').value.trim()
    const data = document.getElementById('data').value.trim()
    const sexo = document.querySelector('input[name="sexo"]:checked');
    //Pega os <input> que têm o atributo name igual a "sexo"
    //E retorna apenas o <input> que está atualmente selecionado (checked)

    if (nome && email && senha && data && sexo) {

        //Se todos os campo estiver preenchido, vai redirecionar para a próxima página  
        location.href = 'pag_principal_oficial.html'

        //Caso contrário aparece uma mensagem para preencher 
    } else {
        alert('Por favor, verifique se todos os campos estão preenchidos!')
    }
});