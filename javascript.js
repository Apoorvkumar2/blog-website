const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const newPost = document.createElement('article');
      newPost.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
      `;

      const recentPostsSection = document.querySelector('section:nth-child(2)');
      recentPostsSection.appendChild(newPost);
      form.reset();
    });
