// JSON 데이터 구조
const categories = {
  "bath": {
    "main_list": [
      { "src": "/portfolio/lush/img/bathbomb_600x.webp", "alt": "배쓰밤 이미지", "text": "배쓰밤" },
      { "src": "/portfolio/lush/img/BUBBLE_600x.webp", "alt": "버블바 이미지", "text": "버블바" },
      { "src": "/portfolio/lush/img/Luxus_600x.webp", "alt": "러쉬멜트 이미지", "text": "러쉬멜트" }
    ],
    "side_list": ["전체", "배쓰오일", "펀"]
  },
  "shower": {
    "main_list": [
      { "src": "/portfolio/lush/img/Duschgel_600x.webp", "alt": "샤워젤 이미지", "text": "샤워젤" },
      { "src": "/portfolio/lush/img/Bodylotion_afde3b4d-6991-4fd0-8899-17fd1ae2f454_600x.webp", "alt": "바디로션 이미지", "text": "바디로션" },
      { "src": "/portfolio/lush/img/Seifen_6087457d-5e31-4ab6-8d16-be4ed32d6761_600x.webp", "alt": "바디솝 이미지", "text": "바디솝" }
    ],
    "side_list": ["전체", "스크럽 & 버터", "샤워 밤", "샤워 오일", "워시카드"]
  },
  "body": {
    "main_list": [
      { "src": "/portfolio/lush/img/Bodylotion_afde3b4d-6991-4fd0-8899-17fd1ae2f454_600x.webp", "alt": "로션 이미지", "text": "로션" },
      { "src": "/portfolio/lush/img/Massage_600x.webp", "alt": "마사지바 이미지", "text": "마사지 바" },
      { "src": "/portfolio/lush/img/Haende_563ca55d-ddda-4e86-b93a-69517d4c214c_600x.webp", "alt": "핸드크림 이미지", "text": "핸드 & 풋" }
    ],
    "side_list": ["전체", "더스팅 파우더", "채러티 팟"]
  },
  "hair": {
    "main_list": [
      { "src": "/portfolio/lush/img/Shampoo_600x.webp", "alt": "샴푸바 이미지", "text": "샴푸바" },
      { "src": "/portfolio/lush/img/Haare_Conditioner_a13e866e-3ef1-4e13-8a13-c1570e9aa67c_600x.webp", "alt": "컨디셔너 이미지", "text": "컨디셔너" },
      { "src": "/portfolio/lush/img/Haarmaske_2ee21b0e-e2cf-468d-84cb-ee065b71fa53_600x.webp", "alt": "트리트먼트 이미지", "text": "트리트먼트" }
    ],
    "side_list": ["전체", "샴푸", "드라이 샴푸", "스타일링"]
  },
  "face": {
    "main_list": [
      { "src": "/portfolio/lush/img/Gesichtspeeling_5f99d554-b203-4099-8c74-69a131b582d3_600x.webp", "alt": "클렌저 이미지", "text": "클렌저" },
      { "src": "/portfolio/lush/img/Gesichtsmasken_b49291ea-1567-455e-bba9-bcf7d6e7a012_600x.webp", "alt": "페이스마스크 이미지", "text": "페이스 마스크" },
      { "src": "/portfolio/lush/img/Gesichtscreme_adb6f612-aa96-4c88-949b-906bad2b9aaa_600x.webp", "alt": "모이스춰라이저 이미지", "text": "모이스춰라이저" }
    ],
    "side_list": ["전체", "토너", "립", "쉐이빙 크림", "국내제조", "국산 콩"]
  },
  "makeup": {
    "main_list": [
      { "src": "/portfolio/lush/img/2_20211215152809.png", "alt": "파운데이션 이미지", "text": "파운데이션" },
      { "src": "/portfolio/lush/img/2_20211215152358.png", "alt": "아이메이크업 이미지", "text": "아이 메이크업" },
      { "src": "/portfolio/lush/img/2_20211215152514.png", "alt": "립 이미지", "text": "립" }
    ],
    "side_list": ["전체", "페이스 파우더", "스킨 틴트", "비건 브러쉬"]
  },
  "fragrance": {
    "main_list": [
      { "src": "/portfolio/lush/img/Body-Spray_600x.webp", "alt": "보디스프레이 이미지", "text": "보디 스프레이" },
      { "src": "/portfolio/lush/img/Parfuem_14cb04cf-3c3f-429a-a4cd-6016250873b2_600x.webp", "alt": "퍼퓸 이미지", "text": "퍼퓸" },
      { "src": "/portfolio/lush/img/candle_dd1580f8-1652-41e6-bd9f-47c534840380_600x.webp", "alt": "캔들 이미지", "text": "캔들" }
    ],
    "side_list": ["전체", "코어 레인지", "솔리드 퍼퓸", "러쉬 멜트"]
  },
  "gift": {
    "main_list": [
      { "src": "/portfolio/lush/img/1_20211215154409.png", "alt": "기프트 이미지", "text": "기프트" },
      { "src": "/portfolio/lush/img/2_20211215155139.png", "alt": "악세서리 이미지", "text": "악세서리" },
      { "src": "/portfolio/lush/img/Verpackungen_600x.webp", "alt": "낫랩 이미지", "text": "낫랩" }
    ],
    "side_list": ["전체", "1-3만원대", "4-6만원대", "7만원 이상", "스웨그", "북"]
  }
};
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('dropdown');
  const gnbItems = document.querySelectorAll('#gnb li');
  let activeItem = null; // 현재 활성화된 GNB 항목을 추적하기 위한 변수

  // GNB 항목에 hover 이벤트 추가
  gnbItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      const category = item.getAttribute('data-category');
      const dropdownContent = document.getElementById(`${category}_content`);

      // 모든 dropdown_content 숨기기
      document.querySelectorAll('.dropdown_content').forEach(content => {
        content.style.display = 'none';
      });

      // 현재 항목의 드롭다운 표시
      dropdownContent.style.display = 'flex';
      dropdown.style.display = 'block';

      // GNB 항목의 active 상태 관리
      if (activeItem) {
        activeItem.classList.remove('active');
      }
      item.classList.add('active');
      activeItem = item;
    });
  });

  // 드롭다운 메뉴에서 마우스를 떠나면 GNB의 + 기호를 제거
  dropdown.addEventListener('mouseleave', function () {
    dropdown.style.display = 'none';

    // GNB 항목의 active 상태 제거
    if (activeItem) {
      activeItem.classList.remove('active');
      activeItem = null;
    }
  });

  // 드롭다운 메뉴에 마우스가 있을 때도 active 상태 유지
  dropdown.addEventListener('mouseenter', function () {
    if (activeItem) {
      activeItem.classList.add('active');
    }
  });

  // JSON 데이터를 기반으로 드롭다운 콘텐츠 동적 생성
  Object.keys(categories).forEach(category => {
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown_content';
    dropdownContent.id = `${category}_content`;

    // 메인 리스트 생성
    const mainList = document.createElement('div');
    mainList.className = 'main_list';

    categories[category].main_list.forEach(item => {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;

      const overlayText = document.createElement('div');
      overlayText.className = 'overlay-text';
      overlayText.innerText = item.text;

      imageContainer.appendChild(img);
      imageContainer.appendChild(overlayText);
      mainList.appendChild(imageContainer);
    });

    // 사이드 리스트 생성
    const sideList = document.createElement('div');
    sideList.className = 'side_list';

    categories[category].side_list.forEach(linkText => {
      const link = document.createElement('a');
      link.href = "#";
      link.innerText = linkText;
      sideList.appendChild(link);
    });

    dropdownContent.appendChild(mainList);
    dropdownContent.appendChild(sideList);
    dropdown.appendChild(dropdownContent);
  });
});

