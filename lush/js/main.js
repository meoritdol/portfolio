const productsData = {
  "best1": [
    {
      "frontImage": "/portfolio/lush/img/20230524181430L.png",
      "backContent": {
        "name": "마스크 오브 매그너민티",
        "price": "₩22,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20230106173535L.png",
      "backContent": {
        "name": "더티 보디 스프레이",
        "price": "₩60,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20211008101413L.png",
      "backContent": {
        "name": "슬리피 보디 스프레이",
        "price": "₩60,000",
        "buttonText": "VIEW"
      }
    }
  ],
  "best2": [
    {
      "frontImage": "/portfolio/lush/img/20220722121317L.png",
      "backContent": {
        "name": "슬리피 샤워젤",
        "price": "₩19,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20220929153226L.png",
      "backContent": {
        "name": "대디오 샴푸",
        "price": "₩19,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20211008092622L.png",
      "backContent": {
        "name": "와사비 샴푸",
        "price": "₩26,000",
        "buttonText": "VIEW"
      }
    }
  ],
  "best3": [
    {
      "frontImage": "/portfolio/lush/img/20240730180307L(2).png",
      "backContent": {
        "name": "올리브 샤워젤",
        "price": "₩17,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20211007171137L.png",
      "backContent": {
        "name": "챠콜 솝",
        "price": "₩22,000",
        "buttonText": "VIEW"
      }
    },
    {
      "frontImage": "/portfolio/lush/img/20220929153226L.png",
      "backContent": {
        "name": "더티 샤워젤",
        "price": "₩17,000",
        "buttonText": "VIEW"
      }
    }
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  Object.keys(productsData).forEach(sectionKey => {
    const container = document.querySelector(`.${sectionKey}`); // 해당 섹션에 맞는 컨테이너 선택
    const products = productsData[sectionKey];

    products.forEach(product => {
      // 각 제품을 담을 div 생성
      const item = document.createElement('div');
      item.className = 'item';

      // 앞면 div 생성
      const front = document.createElement('div');
      front.className = 'front';
      const frontImage = document.createElement('img');
      frontImage.src = product.frontImage;
      frontImage.alt = product.backContent.name;
      front.appendChild(frontImage);

      // 뒷면 div 생성
      const back = document.createElement('div');
      back.className = 'back';
      const backContent = document.createElement('div');
      backContent.className = 'back-content';

      const name = document.createElement('p');
      name.innerText = product.backContent.name;
      const price = document.createElement('p');
      price.innerText = product.backContent.price;
      const button = document.createElement('button');
      button.innerText = product.backContent.buttonText;

      backContent.appendChild(name);
      backContent.appendChild(price);
      backContent.appendChild(button);
      back.appendChild(backContent);

      // 앞면과 뒷면을 아이템에 추가
      item.appendChild(front);
      item.appendChild(back);

      // 컨테이너에 아이템 추가
      container.appendChild(item);
    });
  });
});
const sectionsData = {
  "section3": [
    {
      "imageSrc": "/portfolio/lush/img/web_turtle_power_solid_body_scrub_ecom_9037_2024_400x.jpg",
      "altText": "터틀 바디스크럽"
    },
    {
      "imageSrc": "/portfolio/lush/img/web_super_milk_shower_gel_2024_400x.jpg",
      "altText": "밀크 샤워솝"
    },
    {
      "imageSrc": "/portfolio/lush/img/web_goongala_shampoo_bar_ecom_9037_2024_400x.jpg",
      "altText": "군가라 샴푸바"
    },
    {
      "imageSrc": "/portfolio/lush/img/web_guardian_of_the_forest_shower_gel_2024_400x.jpg",
      "altText": "가디언 샤워솝"
    }
  ],
  "section4": [
    {
      "imageSrc": "/portfolio/lush/img/web_peace_love_and_pizza_bath_bomb_TMNT_9037_2024_400x.webp",
      "altText": "피자 배쓰밤"
    },
    {
      "imageSrc": "/portfolio/lush/img/web_krang_shower_jelly_ecom_9037_2024_600x.webp",
      "altText": "크랑 샤워젤리"
    },
    {
      "imageSrc": "/portfolio/lush/img/web_green_machine_bubble_bar_ecom_9037_2024_600x.webp",
      "altText": "그린머신 버블바"
    },
    {
      "imageSrc": "/portfolio/lush/img/Four-brothers_600x.webp",
      "altText": "터틀 배쓰밤4"
    }
  ]
};

Object.keys(sectionsData).forEach(sectionId => {
  const container = document.querySelector(`.${sectionId} .items`);
  const items = sectionsData[sectionId];

  items.forEach(itemData => {
    // div.item 생성
    const item = document.createElement('div');
    item.className = 'item';

    // 이미지 생성 및 추가
    const img = document.createElement('img');
    img.src = itemData.imageSrc;
    img.alt = itemData.altText;

    // VIEW 버튼 생성 및 추가
    const button = document.createElement('button');
    button.className = 'view-button';
    button.innerText = 'VIEW';

    // 이미지와 버튼을 div.item에 추가
    item.appendChild(img);
    item.appendChild(button);

    // div.item을 컨테이너에 추가
    container.appendChild(item);
  });
});
