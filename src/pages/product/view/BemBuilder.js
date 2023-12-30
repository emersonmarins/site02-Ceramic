class BemBuilder {
  createElement(tag, classNames, attributes, textContent) {
    const element = document.createElement(tag);
    this.applyClasses(element, classNames);
    this.applyAttributes(element, attributes);
    if (textContent) {
      this.applyTextContent(element, textContent);
    }
    return element;
  }

  applyClasses(element, classNames) {
    if (Array.isArray(classNames)) {
      classNames.forEach(className => element.classList.add(className));
    } else if (classNames) {
      element.classList.add(classNames);
    }
  }

  applyAttributes(element, attributes) {
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
  }

  applyTextContent(element, textContent) {
    element.textContent = textContent;
  }

  buildProductMainGallery(images) {
    const gallery = this.createElement('div', ['product-main__gallery', 'product-gallery']);
    const mainImage = this.createElement('img', 'product-gallery__main-image', {
      src: images[0],
      alt: 'imagem principal do produto'
    });
    gallery.appendChild(mainImage);

    const thumbnails = this.createElement('div', 'product-gallery__thumbnails');
    images.forEach((image, index) => {
      if (index >= 0) { // skipping first image as it is the main image
        const thumbnail = this.createElement('img', 'product-gallery__thumbnail', {
          src: image,
          alt: `imagem secundária do produto ${index}`
        });
        thumbnails.appendChild(thumbnail);
      }
    });
    gallery.appendChild(thumbnails);
    return gallery;
  }

  // Methods for creating 'product-main__info', 'product-main__details', etc would be similarly defined

  build(element) {

    // Product Main
    const productMain = this.createElement('div', 'product-main');

    // Product Main Gallery - for demonstration, sample image URLs are used
    const gallery = this.buildProductMainGallery([
      `${element.url}`,
      `${element.url.replace(/[0-9]+/i, '01')}`,
      `${element.url.replace(/[0-9]+/i, '02')}`,
      `${element.url.replace(/[0-9]+/i, '03')}`
    ]);
    productMain.appendChild(gallery);

    // Product Main Info

    const info = this.createElement('div', ['product-main__info', 'product-info'])
    productMain.appendChild(info);
    const infoName = this.createElement('h1', 'product-info__name', null, `${element.title}`)
    info.appendChild(infoName);

    // Product Info Price Block
    const infoPriceBlock = this.createElement('div', 'product-info__price-block')
    info.appendChild(infoPriceBlock);

    const infoPrice = this.createElement('p', 'product-info__price', null, `R$ ${element.price}`)
    infoPriceBlock.appendChild(infoPrice);
    const infoPriceSpan = this.createElement('span', null, null, 'com PIX')
    infoPrice.appendChild(infoPriceSpan);

    const infoDescontPix = this.createElement('p', ['product-info__descont', 'product-info__descont--green'], null, '10% de desconto')
    infoPriceBlock.appendChild(infoDescontPix);

    // Info Installtment
    const infoInstalltment = this.createElement('p', 'product-info__installment')
    infoPriceBlock.appendChild(infoInstalltment);
    infoInstalltment.innerHTML = `ou <strong>3x</strong> de <strong>R$ ${(Number(element.price) / 3).toFixed(2)}</strong> | Total parcelado: <strong>R$ ${element.price}</strong>`

    const infoCurrentPrice = this.createElement('p', 'product-info__current-price', null, `R$ ${element.currentPrice}`)
    infoPriceBlock.appendChild(infoCurrentPrice);
    const infoText = this.createElement('p', 'product-info__text', null, 'no boleto ou em 1x no cartão crédito/débito')
    infoPriceBlock.appendChild(infoText);
    const infoDescontCard = this.createElement('p', ['product-info__descont', 'is-green'], null, '5% de desconto')
    infoPriceBlock.appendChild(infoDescontCard);
    const infoQuantityTitle = this.createElement('p', 'product-info__quantity-title', null, 'Quantidade')
    infoPriceBlock.appendChild(infoQuantityTitle);

    // Info Quantity
    const infoQuantity = this.createElement('div', 'product-info__quantity')
    infoPriceBlock.appendChild(infoQuantity);

    const btnDecrease = this.createElement('button', 'product-info__quantity-decrease')
    infoQuantity.appendChild(btnDecrease);
    const iconDecrease = this.createElement('i', ['bi', 'bi-dash-circle-fill'])
    btnDecrease.appendChild(iconDecrease);

    const infoQuantityInput = this.createElement('input', 'product-main__quantity-input', {
      type: 'text',
      value: '1'
    })
    infoQuantity.appendChild(infoQuantityInput);

    const btnIncrease = this.createElement('button', 'product-info__quantity-increase')
    infoQuantity.appendChild(btnIncrease);
    const iconIncrease = this.createElement('i', ['bi', 'bi-plus-circle-fill'])
    btnIncrease.appendChild(iconIncrease);

    // Button ADD CART
    const infoButtonAddCart = this.createElement('button', ['product-info__button', 'product-info__button--addCart'], null, 'ADICIONAR AO CARRINHO')
    infoPriceBlock.appendChild(infoButtonAddCart);
    const infoButtonAddCartIcone = this.createElement('i', ['product-info__icon--cart', 'bi', 'bi-cart3'])
    infoButtonAddCart.appendChild(infoButtonAddCartIcone);

    // Calc Frete
    const infoButtonFrete = this.createElement('div', 'product-info__frete-calc', null, 'calcular frete')
    infoPriceBlock.appendChild(infoButtonFrete);
    const infoButtonFreteInput = this.createElement('input', 'product-info__frete-input', {
      type: 'text',
      placeholder: 'Digite seu CEP'
    })
    infoPriceBlock.appendChild(infoButtonFreteInput);

    // Product Main Details

    const details = this.createElement('div', ['product-main__details', 'product-details'])
    productMain.appendChild(details);

    const detailsDescription = this.createElement('div', 'product-details__description')
    details.appendChild(detailsDescription);
    const detailsDescriptionTitle = this.createElement('h3', 'product-details__description-title', null, 'Descrição do Produto')
    detailsDescription.appendChild(detailsDescriptionTitle);
    const detailsDescriptionText = this.createElement('p', null, null, `${element.description}`)
    detailsDescription.appendChild(detailsDescriptionText);

    const detailsSpecifications = this.createElement('div', 'product-details__specifications')
    details.appendChild(detailsSpecifications);
    const detailsSpecificationsTitle = this.createElement('h3', 'product-details__specifications-title')
    detailsSpecifications.appendChild(detailsSpecificationsTitle);

    // Create Table
    const detailsSpecificationsTable = this.createElement('table', ['product-details__table', 'product-details'])
    detailsSpecifications.appendChild(detailsSpecificationsTable);
    const tbody = this.createElement('tbody')
    detailsSpecificationsTable.appendChild(tbody);

    const dataTableSpecifications = [
      {
        name: 'Uso',
        value: 'Resistente a micro-ondas, Resistente a lava-louças'
      },
      {
        name: 'tipo',
        value: 'raso'
      },
      {
        name: 'Linha',
        value: 'Lorem ipsum'
      },
      {
        name: 'Material',
        value: 'Porcelana'
      },
      {
        name: 'Tipo da embalagem',
        value: 'Papelão pardo'
      },
      {
        name: 'Formato',
        value: 'Orgânico'
      },
      {
        name: 'Decoração',
        value: 'Estampado'
      },
      {
        name: 'Cor',
        value: 'Branco, Marrom'
      },      {
        name: 'Garantia',
        value: '90 dias (Defeitos de fabricação)'
      }
    ]
    dataTableSpecifications.forEach((element, index) => {
      let tr = undefined;
      if (index % 2 === 0) {
        tr = this.createElement('tr', ['product-details__row', 'product-details__row--pair']) 
      } else {
        tr = this.createElement('tr', ['product-details__row', 'product-details__row']) 
      }
      tbody.appendChild(tr);
      const th = this.createElement('th', 'product-details__field-name', null, element.name) 
      const td = this.createElement('td', 'product-details__field-value', null, element.value) 
      tr.appendChild(th);
      tr.appendChild(td);
    });

    return productMain;
  }
}

// Usage:
const bemBuilder = new BemBuilder();
export { bemBuilder };