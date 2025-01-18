function validarFormulario() {
    // Limpar mensagens anteriores
    document.getElementById('erro-email').innerText = '';
    document.getElementById('erro-senha').innerText = '';
    document.getElementById('mensagem-resposta').innerText = '';

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let valido = true;

    // Expressão regular para validar o formato de e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Lista de domínios válidos (exemplo)
    const dominiosValidos = ['gmail.com', 'outlook.com', 'yahoo.com','icloud.com','hotmail.com'];

    // Validar e-mail
    if (!formatoEmail.test(email)) {
        document.getElementById('erro-email').innerText = 'Por favor, insira um e-mail válido.';
        valido = false;
    } else {
        const dominioEmail = email.split('@')[1];
        if (!dominiosValidos.includes(dominioEmail)) {
            document.getElementById('erro-email').innerText = 'Por favor, insira um e-mail com um domínio válido.';
            valido = false;
        }
    }

    // Validar senha
    if (senha.length < 6) {
        document.getElementById('erro-senha').innerText = 'A senha deve ter pelo menos 6 caracteres.';
        valido = false;
    }

    // Mostrar mensagem de sucesso ou redirecionar
    if (valido) {
        document.getElementById('mensagem-resposta').innerText = 'Login realizado com sucesso!';
        document.getElementById('mensagem-resposta').className = 'success-message';

    } else {
        document.getElementById('mensagem-resposta').innerText = 'Erro ao realizar login. Verifique os campos.';
        document.getElementById('mensagem-resposta').className = 'error';
    }
}
