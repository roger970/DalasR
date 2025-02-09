// Alterna a visibilidade da descrição do serviço
document.querySelectorAll('.descricao-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const descricao = this.closest('.servico').querySelector('.descricao');
        descricao.classList.toggle('ativa');
    });
});
