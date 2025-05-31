const observando = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('element_aparece');
        }
    });
});

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

// Função para observar as seções com um atraso
const atraso = () => {
    sections.forEach((section, index) => {

        const delay = index * 100; // 100ms de ataraso por seção
        setTimeout(() => {
            observando.observe(section);
        }, delay);
    });
};

// Observando o header 
observando.observe(header);

// Iniciando a observação das seções com atraso
atraso();

