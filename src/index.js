const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const firstHeading = document.querySelector('h1');
firstHeading.textContent = "Bu DOM Mükemmel";

const anchors = document.querySelectorAll(".container a");
anchors[0].textContent = "Servisler";
anchors[1].textContent = "Ürünler";
anchors[2].textContent = "Vizyon";
anchors[3].textContent = "Özellikler";
anchors[4].textContent = "Hakkımızda";
anchors[5].textContent = "İletişim";

for (let i = 0; i < anchors.length; i++){
anchors[i].className = "italic";
}

const sirketLogo = document.querySelector(".logo");
sirketLogo.src = "http://localhost:9000/img/logo.png";

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = "Başlayın";

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = "http://localhost:9000/img/cta.png";

const fourthHeader = document.querySelectorAll(".text-content h4");
let counter = 0;
for (let i = 0; i < fourthHeader.length; i++) {
  fourthHeader[i].textContent = Object.values(siteContent["ana-içerik"])[counter];
  counter += 2;
}
counter = 0;
counter = 1;
const mainP = document.querySelectorAll('.main-content p');

for (let i = 0; i < mainP.length; i++) {
  mainP[i].textContent = Object.values(siteContent["ana-içerik"])[counter];
  counter += 2;
}

counter = 0;

const middleImage = document.querySelector(".middle-img");
middleImage.src = "http://localhost:9000/img/accent.png";

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'İletişim';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = `100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye`;
contactP[1].textContent = `+90 (123) 456-7899`;
contactP[2].textContent = `satis@birsirketsitesi.com.tr`;

const footerAnchor = document.querySelector('footer a');
footerAnchor.textContent = `Copyright Bir Şirket Sitesi 2022`;
footerAnchor.className = 'bold';

