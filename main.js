// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém a referência à seção onde os posts do blog serão adicionados dinamicamente
    const blogSection = document.getElementById('blog-posts');

    // Array de objetos representando posts do blog
    const posts = [
        { title: 'Primeiro Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in efficitur facilisis.' },
        { title: 'Segundo Post', content: 'Sed accumsan velit vel ipsum vulputate, at gravida justo suscipit. Integer eget eros vitae purus dictum vulputate.' }
    ];

    // Itera sobre cada post no array
    posts.forEach(post => {
        
        // Cria um elemento <article> para representar um post
        const article = document.createElement('article');

        // Cria elementos <h2> para o título do post
        const title = document.createElement('h2');

        // Cria um elemento <p> para o conteúdo do post
        const content = document.createElement('p');

        // Define o texto do elemento <h2> com o título do post atual
        title.textContent = post.title;

        // Define o texto do elemento <p> com o conteúdo do post atual
        content.textContent = post.content;

        // Adiciona o elemento <h2> como filho do elemento <article>
        article.appendChild(title);

        // Adiciona o elemento <p> como filho do elemento <article>
        article.appendChild(content);

        // Adiciona o elemento <article> à seção de posts do blog
        blogSection.appendChild(article);
    });
});