
  // Cargar el archivo data.json utilizando una solicitud AJAX
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      // Obtener el contenedor donde se mostrarán los resultados
      const summaryContainer = document.querySelector('.summary');

      // Recorrer el arreglo de objetos y crear el contenido HTML dinámicamente
      data.forEach((result) => {
        const resultHTML = `
          <div class="item">
            <div>
            <img src="${result.icon}" alt="${result.category} icon">
            <h3>${result.category}</h3>
            </div>
            <p> <strong>${result.score}</strong> / 100</p>
          </div>
        `;

        // Agregar el contenido generado al contenedor
        summaryContainer.innerHTML += resultHTML;
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
