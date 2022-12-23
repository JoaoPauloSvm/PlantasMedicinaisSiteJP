const elementoA = document.querySelector('.a');

fetch('./json/planta2.json')
  .then(response => response.json())
  .then(json => {
    // Ordem alfabetica
    json.vectors.sort((a, b) => a.title.localeCompare(b.title));

    for (let i = 0; i < 16; i++) {
      const vector = json.vectors[i];

      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';

      const img = document.createElement('img');
      img.src = `./img/${vector.image}`;
      img.classList.add('card-img-top');
      img.classList.add('tam');
      img.alt = vector.title;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.textContent = vector.title;
      h5.align = 'center';

      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('btn', 'btn-success', 'botao');
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', `#exampleModal${[i]}`);
      button.textContent = 'Saiba mais!';

      const modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.id = `exampleModal${[i]}`;
      modal.tabIndex = '-1';
      modal.setAttribute('aria-labelledby', 'exampleModalLabel');
      modal.setAttribute('aria-hidden', 'true');

      const modalDialog = document.createElement('div');
      modalDialog.classList.add('modal-dialog', 'modal-fullscreen-xxl-down');

      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      const modalHeader = document.createElement('div');
      modalHeader.classList.add('modal-header');

      const h1 = document.createElement('h1');
      h1.classList.add('modal-title', 'fs-5');
      h1.id = 'exampleModalLabel';
      h1.textContent = vector.title;

      const closeButton = document.createElement('button');
      closeButton.type = 'button';
      closeButton.classList.add('btn-close');
      closeButton.setAttribute('data-bs-dismiss', 'modal');
      closeButton.setAttribute('aria-label', 'Close');

      modalHeader.appendChild(h1);
      modalHeader.appendChild(closeButton);

      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      modalBody.innerHTML = `<ul>
      <li><b>Nome Ciêntifico: </b><i>${vector.nomeCientifico}</i></li>
      <li><b>Uso: </b>${vector.uso}</li>
      <li><b>Contraindicações: </b>${vector.contraindicacoes}</li>
      <li><b>Descrição: </b>${vector.text}</li>
      </ul>`;

      const modalFooter = document.createElement('div');
      modalFooter.classList.add('modal-footer');

      const closeModalButton = document.createElement('button');
      closeModalButton.type = 'button';
      closeModalButton.classList.add('btn', 'btn-secondary');
      closeModalButton.setAttribute('data-bs-dismiss', 'modal');
      closeModalButton.textContent = 'Fechar';

      modalFooter.appendChild(closeModalButton);

      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);

      modalDialog.appendChild(modalContent);
      modal.appendChild(modalDialog);

      cardBody.appendChild(h5);
      cardBody.appendChild(button);
      card.appendChild(img);
      card.appendChild(cardBody);

      elementoA.appendChild(card);
      elementoA.appendChild(modal);
    }
  });
