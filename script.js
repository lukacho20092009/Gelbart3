let startX = 0;
let endX = 0;

let currentModalMediaList = []; // NEW: List of all media URLs for the current product
let currentModalIndex = 0;      // NEW: Index of the currently displayed media in the modal

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const modal = document.getElementById('modal');
  const isModalOpen = modal && modal.style.display === "block";

  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) { 
    if (isModalOpen && currentModalMediaList.length > 1) { // If modal is open and has multiple items, handle modal swipe
        if (diffX > 0) { // Swipe right -> Previous
            showPrevMedia();
        } else { // Swipe left -> Next
            showNextMedia();
        }
    } else {
        // Original history navigation logic
        if (diffX > 0) {
          window.history.back();
        } else {
          window.history.forward();
        }
    }
}
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.print": "Print", 
    "nav.order": "Order",
    "nav.about": "About the Artist",
    "hero.title": "David Gelbakhiani Arts",
    "hero.subtitle": "Discover emotional and expressive paintings that capture the essence of color and soul.",
    "hero.cta": "View Gallery",
    "hero.atc":"Contact",
    "nav.print-on-cloth": "Print on Cloth" 
  },
  ka: {
    "nav.home": "მთავარი",
    "nav.gallery": "გალერეა",
    "nav.print": "პრინტი", 
    "nav.order": "შეკვეთა",
    "nav.about": "მხატვარის შესახებ",
    "hero.title": "დავით გელბახიანის ნამუშევრები",
    "hero.subtitle": "აღმოაჩინე ემოციური და უნიკალური ნახატები, რომლებიც გადმოსცემენ სულის ფერებს.",
    "hero.cta": "ნახე გალერეა",
    "hero.atc":"კონტაქტი",
    "nav.print-on-cloth": "ბეჭდვა ქსოვილზე" 
  },
  es: {
    "nav.home": "Casa",
    "nav.gallery": "Galería",
    "nav.print": "Impresión",
    "nav.order": "orden",
    "nav.about": "Acerca del artista",
    "hero.title": "Arte pescante gelbakhiano",
    "hero.subtitle": "Descubre pinturas emocionales y expresivas que capturan la esencia del color y el alma.",
    "hero.cta": "Ver Galería",
    "hero.atc":"Contacto",
    "nav.print-on-cloth": "Impresión en Tela"
  },
  ru: {
    "nav.home": "Главная",
    "nav.gallery": "Галерея",
    "nav.print": "Печать",
    "nav.order": "заказ",
    "nav.about": "Об художнике",
    "hero.title": "Давид Гелбахян искусство",
    "hero.subtitle": "Откройте для себя эмоциональные и выразительные картины, которые передают суть цвета и души.",
    "hero.cta": "Смотреть галерею",
    "hero.atc":"Kонтакт",
    "nav.print-on-cloth": "Печать на Ткани"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) el.innerText = translations[lang][key];
  });
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const lang = e.target.getAttribute("data-lang");
    setLanguage(lang);
    document.getElementById('lang-popup').style.display = 'none';
  });
});

const langSelector = document.querySelector('.lang-selector span');
if (langSelector) {
  langSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    const popup = document.getElementById('lang-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });
}

document.body.addEventListener('click', () => {
  const popup = document.getElementById('lang-popup');
  if(popup) popup.style.display = 'none';
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });
}

document.querySelectorAll('nav a, .cta-btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
      }
    }
  });
});

// =======================================================================================

const paintings = [

//   { id: 145,
//     title: 
//     '',
//     price: 270,
//     img: '',
//     desc: '',
//     sold: false,
//     variations: [],
//   },


//   { id: 144,
//     title: 
//     '',
//     price: 270,
//     img: '',
//     desc: '',
//     sold: false,
//     variations: [],
//   },

//   { id: 143,
//     title: 
//     '',
//     price: 270,
//     img: '',
//     desc: '',
//     sold: false,
//     variations: [],
//   },


  { id: 142,
    title: 
    'Choice',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050661/495228355_1020392793530659_7329616293878280550_n.jpg_m3urd2.jpg',
    desc: '"Choice". Acrylic. Cardboard. x in. ',
    sold: false,
    variations: [],
  },

  { id: 140,
    title: 
    'Fish',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050535/490013663_1001447945425144_8267193951766370608_n.jpg_nybzhr.jpg',
    desc: '"Fish". Acrylic. 24X20.',
    sold: false,
    variations: [],
  },


  { id: 139,
    title: 
    'Leave your own',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050459/485729075_989327923303813_321104010784237805_n.jpg_f9qauh.jpg',
    desc: '"Leave your own". Acrylic. 20X16.',
    sold: false,
    variations: [],
  },

  { id: 138,
    title: 
    'Crane',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050383/484783837_982247337345205_133239070343943402_n.jpg_qni4xo.jpg',
    desc: '"Crane". Acrylic. 47x24.',
    sold: false,
    variations: [],
  },


  { id: 137,
    title: 
    'Autumn in New York',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050332/484882558_982244584012147_6472198262883708510_n.jpg_pmlip2.jpg',
    desc: '"Autumn in New York". Canvas. Acrylic. 30X48.',
    sold: false,
    variations: [],
  },

  { id: 136,
    title: 
    'Don’t like the color of your road? Change it !',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050146/481998956_976921871211085_3212470584574450127_n.jpg_fc8zcs.jpg',
    desc: '"Don’t like the color of your road? Change it !". Acrylic. 22x14.',
    sold: false,
    variations: [],
  },


  { id: 135,
    title: 
    'Zebra',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050072/481275213_973953271507945_5916748162204753358_n.jpg_q9gib0.jpg',
    desc: '"Zebra". Acrylic. Cardboard. 20X30.',
    sold: false,
    variations: [],
  },

  { id: 134,
    title: 
    'Mammoth',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050020/481988075_973223638247575_1405888673680237369_n.jpg_twrop9.jpg',
    desc: '"Mammoth". Acrylic. 22x28. ',
    sold: false,
    variations: [],
  },


  { id: 133,
    title: 
    'Coffe lover',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049935/481658804_967827058787233_6223364705998456436_n.jpg_u8tqso.jpg',
    desc: '"Coffee lover". Black Ink. 17X12.',
    sold: false,
    variations: [],
  },
    
  
  { id: 132,
    title: 
    '...',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049863/480849261_967422088827730_1035764905723552686_n.jpg_wzzd6a.jpg',
    desc: '" ... " Ink. 17x12. ',
    sold: false,
    variations: [],
  },


  { id: 131,
    title: 
    'Seduction',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049809/480753627_967381348831804_8134988036048762168_n.jpg_kj8u1v.jpg',
    desc: '"Seduction". Acrylic. 20x16.',
    sold: false,
    variations: [],
  },

  { id: 130,
    title: 
    'Under the Water',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049721/474492689_1154275516038483_8458782853114769557_n.jpg_oc4pqx.jpg',
    desc: '"Under the Water". Acrylic. 22X14.',
    sold: false,
    variations: [],
  },


  { id: 129,
    title: 
    'Black Ink',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049660/474095464_1153672272765474_3739643540309009884_n.jpg_cups0b.jpg',
    desc: '"Black Ink." Cardboard. 22X14.',
    sold: false,
    variations: [],
  },
  { id: 128,
    title: 
    'Queen of the tribe ',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049606/473147617_1148392939960074_149670558178847596_n.jpg_pqlor8.jpg',
    desc: '" Queen of the tribe ". Acrylic. 22X14',
    sold: false,
    variations: [],
  },


  { id: 127,
    title: 
    'The way of Life.',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049541/473190758_1147872706678764_3036635893117487125_n.jpg_li2dky.jpg',
    desc: '" The Way of Life ". Acrylic. 22X14',
    sold: false,
    variations: [],
  },
  { id: 126,
    title: 
    '...',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049420/473081271_1147870333345668_8210986912755290916_n.jpg_s7vcok.jpg',
    desc: '"..." Acrylic. 22X14',
    sold: false,
    variations: [],
  },


  { id: 125,
    title: 
    'Picasso',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049340/473549003_1147868256679209_705389782388401291_n.jpg_faf6q7.jpg',
    desc: '"Picasso". Acrylic. 20x16. ',
    sold: false,
    variations: [],
  },

  { id: 124,
    title: 
    'Musrooms',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049245/473080026_1147865863346115_1834267442072244342_n.jpg_exqkly.jpg',
    desc: '"Mushrooms". Acrylic. 20X16 ',
    sold: false,
    variations: [],
  },


  { id: 123,
    title: 
    'Saint George',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049186/472569161_1144926456973389_6141060378720478751_n.jpg_ddbwqo.jpg',
    desc: '"Saint George." Ink. 70X50',
    sold: false,
    variations: [],
  },
  { id: 122,
    title: 
    '',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049140/471497539_1139552050844163_1476800818418822051_n.jpg_xshg40.jpg',
    desc: '"The King Tamar. Ink. 50X35. ',
    sold: false,
    variations: [],
  },


  { id: 121,
    title: 
    '',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049044/470227722_1132082254924476_7138227883281223088_n.jpg_rrtoaa.jpg',
    desc: 'The Autumn. Ink. 60X42',
    sold: false,
    variations: [],
  },

  { id: 120,
    title: 
    '',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048951/469126310_1123262155806486_9202785119650263821_n.jpg_g8jdd4.jpg',
    desc: '"The Golden Owl. Golden Acrylic. 70X50 ',
    sold: false,
    variations: [],
  },

  { id: 119,
    title: 
    'The Autumn',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048818/468916217_1123257822473586_7342104113277051853_n.jpg_ulwzfh.jpg',
    desc: '"The Autumn". Ink. 60X42',
    sold: false,
    variations: [],
  },

  { id: 118,
    title: 
    'The dancer',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048739/469146770_1123253269140708_7416312910516123945_n.jpg_pxiiye.jpg',
    desc: '"The dancer". Ink. 60x42',
    sold: false,
    variations: [],
  },

  { id: 117,
    title: 
    'Drunk with love',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048379/469337003_1122713349194700_6359968690384233418_n.jpg_dbycst.jpg',
    desc: '"Drunk with love". Ink. 60x40.',
    sold: false,
    variations: [],
  },


  { id: 116,
    title: 
    'Gaze',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048258/469105623_1122706395862062_5423493302374921426_n.jpg_h2v5sf.jpg',
    desc: '"The Gaze". Ink. 42X30',
    sold: false,
    variations: [],
  },


  { id: 115,
    title: 
    '',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048088/469115238_1122702562529112_6737868821185134812_n.jpg_kez2wo.jpg',
    desc: '"The Lord is one". Ink. 70X50',
    sold: false,
    variations: [],
  },

  { id: 114,
    title: 
    '"Surprise"',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047978/469065392_1122694332529935_7413470774904506736_n.jpg_dlo1yc.jpg',
    desc: '"Surprise". Ink. 42X30.',
    sold: false,
    variations: [],
  },

  { id: 113,
    title: 
    '113',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047934/469051355_1122690572530311_7380671146387344506_n.jpg_z14brx.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 112,
    title: 
    'Cheetah',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047825/469380787_1122686409197394_7832349485785654720_n.jpg_gevclg.jpg',
    desc: '"Cheetah". Ink. 30x21.',
    sold: false,
    variations: [],
  },

  { id: 111,
    title: 
    'Family on the Beach',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047719/469122421_1122682675864434_4076381040150500447_n.jpg_hovkx4.jpg',
    desc: '"Family on the Beach". Ink. 30x21.',
    sold: false,
    variations: [],
  },

  { id: 110,
    title: 
    'SeaHorse',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765036041/467896287_1115185069947528_6550787616294378087_n.jpg_v1lndl.jpg',
    desc: '"SeaHorse". Ink. A4.',
    sold: false,
    variations: [],
  },
  { id: 109,
    title: 
    'Gravity',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035816/468073922_1114644173334951_7417169700168004738_n.jpg_nqaqig.jpg',
    desc: '"Gravity". Ink. Size A4.',
    sold: false,
    variations: [],
  },

  { id: 108,
    title: 
    'The Sherekilebi',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035747/151324049_280411056758271_1673562133655503910_n.jpg_peqgic.jpg',
    desc: '"The Sherekilebi". Ink. 30x21.',
    sold: false,
    variations: [],
  },

  { id: 107,
    title: 
    'Father and Son',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035624/125192354_220773896055321_1749585992565096285_n.jpg_vjn0f7.jpg',
    desc: '"Father and Son". Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 106,
    title: 
    'Sneaked out to paint a picture',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035492/123639524_218675892931788_7716703223970509396_n.jpg_thq4zc.jpg',
    desc: '"Sneaked out to paint a picture". Mascara and pencil. 49X40',
    sold: false,
    variations: [],
  },

  { id: 105,
    title: 
    'Dynamics',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035407/123588509_217878889678155_5756797449401061845_n.jpg_f7fjwm.jpg',
    desc: '"Dynamics". Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 104,
    title: 
    'Mother and Child',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035294/120803198_210229570443087_3743276575646864438_n.jpg_xxrriu.jpg',
    desc: '"Mother and Child". Ink. 30X21.',
    sold: false,
    variations: [],
  },

  { id: 103,
    title: 
    'Free',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035230/119164018_205297380936306_6982562132064596130_n.jpg_sti4nl.jpg',
    desc: '"Free". Ink. 70X35.',
    sold: false,
    variations: [],
  },

  { id: 102,
    title: 
    '102',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035134/116678580_195532985246079_1171730058058132167_n.jpg_trhvou.jpg',
    desc: 'Ink. 60X9.',
    sold: false,
    variations: [],
  },

  { id: 101,
    title: 
    'Tri-angle',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035053/109538779_191393448993366_3596722291328497432_n.jpg_cassll.jpg',
    desc: '“Tri-angle”. Cardboard. 102X72.',
    sold: false,
    variations: [],
  },

  { id: 10,
    title: 
    'White Owl',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034931/89664976_155844622548249_6656279043337355264_n.jpg_v4eeo6.jpg',
    desc: '“White Owl”. Cardboard. 56X32.',
    sold: false,
    variations: [],
  },

  { id: 99,
    title: 
    'The Black and White Side of the Mask',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034843/87448870_148292546636790_5478191139204890624_n.jpg_fqcb2l.jpg',
    desc: '"The Black and White Side of the Mask". Ink. 70X30.',
    sold: false,
    variations: [],
  },

  { id: 98,
    title: 
    'With the Bells',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034683/86186953_145223776943667_9124431525251645440_n.jpg_gmaqba.jpg',
    desc: '"With the Bells". Ink. 50X25.',
    sold: false,
    variations: [],
  },

  { id: 97,
    title: 
    'Red',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034577/83432719_141876830611695_1686719874312699904_n.jpg_kony9b.jpg',
    desc: '“Red”. Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 96,
    title: 
    'My November ',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034479/83982439_138699994262712_6747923981757579264_n.jpg_hfavj8.jpg',
    desc: '"My November". Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 95,
    title: 
    'Guardian Angel',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034367/81407560_134320711367307_7289376554415554560_n.jpg_krrg8y.jpg',
    desc: '"Guardian Angel". Mascara. 41X30',
    sold: false,
    variations: [],
  },

  { id: 94,
    title: 
    'Polar Mother Bear',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034284/81154719_132544661544912_6962340513089323008_n.jpg_ze1v8r.jpg',
    desc: '“Polar Mother Bear”. ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 93,
    title: 
    'Pen-guin',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034187/80466047_131002488365796_3801957208502042624_n.jpg_mhoomy.jpg',
    desc: '“Pen-guin”. Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 92,
    title: 
    'The Owl Family',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034082/79686368_127157525416959_8487581196304252928_n.jpg_q3bljz.jpg',
    desc: '"The Owl Family". Mascara. A4.',
    sold: false,
    variations: [],
  },

  { id: 91,
    title: 
    'Black Cat',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033942/80025506_126634488802596_5116205849479479296_n.jpg_yksts1.jpg',
    desc: '“Black Cat”. Ink. A4.',
    sold: false,
    variations: [],
  },

  { id: 90,
    title: 
    'Squid',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033882/79972770_125506775582034_1727809040454516736_n.jpg_hcarri.jpg',
    desc: '“Squid”. A3. Ink.',
    sold: false,
    variations: [],
  },

  { id: 89,
    title: 
    'Time Machine',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033501/78462145_121121676020544_9212376890512244736_n.jpg_zr9xny.jpg',
    desc: '"Time Machine".',
    sold: false,
    variations: [],
  },


  { id: 88,
    title: 
    'Sinks',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033663/78893236_121121632687215_6500364463407890432_n.jpg_dmely9.jpg',
    desc: '"Sinks"',
    sold: false,
    variations: [],
  },


  { id: 87,
    title: 
    'Another World',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033456/79540032_121121616020550_2851183347613302784_n.jpg_zykfxq.jpg',
    desc: '"Another World". ',
    sold: false,
    variations: [],
  },


  { id: 86,
    title: 
    '86',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033410/78902873_120028259463219_8004750477650558976_n.jpg_hz5bh3.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 85,
    title: 
    '85',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033307/78914757_120027679463277_4183539368847212544_n.jpg_foklah.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 84,
    title: 
    '84',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033255/78341514_120027626129949_5133842793378086912_n.jpg_weupm9.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 83,
    title: 
    '83',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033189/80110216_120027559463289_4201050457319145472_n.jpg_bj85o1.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 82,
    title: 
    '82',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033120/78200900_120027476129964_4988109596632547328_n.jpg_fywj2w.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 81,
    title: 
    '81',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033078/78100615_120027369463308_6736425920514490368_n.jpg_g1ddwo.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 80,
    title: 
    '80',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032996/79077562_120023162797062_6214030766288928768_n.jpg_gy3hig.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 79,
    title: 
    '79',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032952/71029022_120022872797091_7875918441071247360_n.jpg_k0dfse.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 78,
    title: 
    '78',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032890/78722197_120022189463826_7290149824622493696_n.jpg_qyvz59.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 77,
    title: 
    '77',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032855/78576290_120022069463838_1954436000600031232_n.jpg_pctoid.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 76,
    title: 
    '76',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032812/78554966_119979579468087_6902303995641987072_n.jpg_sqtdea.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 75,
    title: 
    '75',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032776/74662484_117282519737793_3913007917267156992_n.jpg_l62nge.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 74,
    title: 
    '74',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032690/77212613_116642799801765_4827784476132114432_n.jpg_o5juul.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 73,
    title: 
    '73',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032655/78579339_116642346468477_700524499010846720_n.jpg_spdg1k.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 72,
    title: 
    '72',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032590/78376769_116642276468484_7794945310970609664_n.jpg_hwypyj.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 71,
    title: 
    '71',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032536/76960697_116641636468548_5686552591282995200_n.jpg_ij9iti.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 69,
    title: 
    '69',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032499/78542561_116641143135264_7683842031805792256_n.jpg_vwul8n.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 68,
    title: 
    '68',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032433/78289057_116640036468708_8240923500827639808_n.jpg_h3y41m.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 67,
    title: 
    '67',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032355/78111439_116639123135466_6853081230888402944_n.jpg_xycslz.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 66,
    title: 
    '66',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032311/78586861_116639069802138_6224580335544303616_n.jpg_azdee3.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 65,
    title: 
    '65',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031843/74463719_111292623670116_6057085681971232768_n.jpg_uytcyk.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 64,
    title: 
    '64',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031817/75650572_111291060336939_3572573506417721344_n.jpg_g2uora.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 63,
    title: 
    '63',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031769/76751611_111290007003711_2364215948388335616_n.jpg_wnpdab.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 62,
    title: 
    '62',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031735/75341052_111290017003710_7033570204936306688_n.jpg_xam6mh.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 61,
    title: 
    '61',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031688/77163035_111289480337097_8124329226233970688_n.jpg_u3nvqi.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 60,
    title: 
    '60',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031641/74157348_111289347003777_328428572802809856_n.jpg_e5krox.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 59,
    title: 
    '59',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031608/73388392_111289227003789_4863222049427947520_n.jpg_m8geu9.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 58,
    title: 
    '58',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031576/75029194_111289113670467_2770829388587991040_n.jpg_yql2b4.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 57,
    title: 
    '57',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031536/75196443_111288367003875_2737516604332965888_n.jpg_mfa7to.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 56,
    title: 
    '56',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031444/77259008_111288253670553_5512403027618693120_n.jpg_dx8nvn.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 55,
    title: 
    '55',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031413/74227306_111286200337425_2515316114792120320_n.jpg_nbbqaj.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 54,
    title: 
    '54',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031325/74232789_111285357004176_409244206452703232_n.jpg_rff5ri.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 53,
    title: 
    '53',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031289/76611028_111283250337720_3573771913962455040_n.jpg_ezipce.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 52,
    title: 
    '52',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031258/78615090_111283130337732_617221752879054848_n.jpg_pxhkeq.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 51,
    title: 
    '51',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031225/77391108_111282223671156_1871130419789824000_n.jpg_cpbjmi.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 50,
    title: 
    '50',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031197/69887779_111282147004497_6966340420427055104_n.jpg_rrnsdc.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 49,
    title: 
    '49',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031166/78480537_111281997004512_70202945555136512_n.jpg_xd2ih9.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 48,
    title: 
    '48',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031096/75246668_111282023671176_980770217426681856_n.jpg_i8lg6v.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 47,
    title: 
    '47',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031065/77293550_111281910337854_1270199868706521088_n.jpg_xvhsqq.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 46,
    title: 
    '46',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031028/73147491_111281550337890_3500732760983601152_n.jpg_tzrjlg.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 45,
    title: 
    '45',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030940/75653304_111280753671303_5827063288185225216_n.jpg_mh1o9e.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 44,
    title: 
    '44',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030895/72179333_111280680337977_2517368774152159232_n.jpg_ksa4ar.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 43,
    title: 
    '43',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030631/75407751_111280633671315_5191337368791023616_n.jpg_oj7rgp_dqxkke.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 42,
    title: 
    '42',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030424/75302685_111280293671349_2207029989419778048_n.jpg_fnvjdk.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 41,
    title: 
    '41',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030096/74981282_111280163671362_3452148911270002688_n.jpg_ml6wuo.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 40,
    title: 
    '40',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030040/78369790_111278890338156_8354023213935624192_n.jpg_lg0kvx.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 39,
    title: 
    '39',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029964/78196856_111278297004882_7092263175009075200_n.jpg_lgt9sd.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: ['https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030542/74347643_111280500337995_2799288954287816704_n.jpg_rcwekx.jpg',
        
],
  },


  { id: 38,
    title: 
    '38',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029896/77284170_111277970338248_3573199141418827776_n.jpg_byvtfz.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 37,
    title: 
    '37',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029866/76779542_111277787004933_990682834442125312_n.jpg_q6ydhf.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 36,
    title: 
    '36',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029819/73539244_111277663671612_2875623712982302720_n.jpg_r9qyvc.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 35,
    title: 
    '35',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029781/78399515_111277577004954_7007491498522443776_n.jpg_ql3lek.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 34,
    title: 
    '34',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029668/74169784_111277313671647_6110520529741938688_n.jpg_zdpkhh.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 33,
    title: 
    '33',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029623/76714075_111277203671658_1853668341189705728_n.jpg_zvdwsv.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 32,
    title: 
    '1',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029132/77258401_111277113671667_2852281008110174208_n.jpg_wtl7ic.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 31,
    title: 
    '31',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029098/76705067_111276900338355_6128363825344282624_n.jpg_yxqbvu.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 30,
    title: 
    '30',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029070/75552923_111276717005040_6716850786724216832_n.jpg_yzmpol.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 29,
    title: 
    '29',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029039/77111684_111276433671735_4140230902909239296_n.jpg_jlrnsy.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 28,
    title: 
    '28',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029003/76706766_111275927005119_4976833391925133312_n.jpg_mj6vdh.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 27,
    title: 
    '27',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028960/76609812_111275727005139_80708723323961344_n.jpg_qvjgnq.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 26,
    title: 
    '26',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028916/75513462_111274987005213_951705473654980608_n.jpg_eohtbb.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 25,
    title: 
    '25',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028885/77406093_111274750338570_5188783881884532736_n.jpg_ucufii.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 24,
    title: 
    '24',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028835/75521832_111274603671918_6487201638481133568_n.jpg_jpy3a8.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 23,
    title: 
    '23',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028760/76685751_111274470338598_6947738783924092928_n.jpg_pnj9te.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 22,
    title: 
    '22',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028732/76259751_111274307005281_5948953974714400768_n.jpg_s4kin9.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 21,
    title: 
    '21',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028698/76607491_111273793671999_8528040217729302528_n.jpg_oockgt.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 20,
    title: 
    '20',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028644/74448238_111269273672451_1145884737563262976_n.jpg_zzmbtc.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },


  { id: 19,
    title: 
    '19',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028620/77313767_111268793672499_5878363524324917248_n.jpg_tnao5f.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 18,
    title: 
    '18',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028578/78632429_111268800339165_1213324378469564416_n.jpg_jxsose.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 17,
    title: 
    '17',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028535/78283334_111268770339168_3141689283337781248_n.jpg_ovtye7.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 16,
    title: 
    '16',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028505/76648975_111268297005882_7615935515069513728_n.jpg_dnzvlw.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 15,
    title: 
    '15',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028466/75636127_111268190339226_2044083388385591296_n.jpg_ygcpdh.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 14,
    title: 
    '14',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028397/74271345_111251233674255_2324394948650074112_n.jpg_kcnns5.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 13,
    title: 
    '13',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028355/77173200_111249950341050_8899040003858890752_n.png_rce3iv.png',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 12,
    title: 
    '12',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028321/76693216_111249817007730_2878166217657417728_n.jpg_zw3g1b.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 11,
    title: 
    '11',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028148/78365923_111249577007754_1811237611948212224_n.jpg_xv3jos.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 10,
    title: 
    '10',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028045/75557494_111248580341187_6867369985786773504_n.jpg_ajzxpz.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 9,
    title: 
    ' 9 ',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027954/78098796_111247090341336_5962097635497082880_n.jpg_hreqgq.jpg',
    desc: 'The shimmer of modern city lights.',
    sold: false,
    variations: [],
  },

  { id: 8,
    title: 
    'Galaxy',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027874/77217129_111228250343220_3123467068540715008_n.jpg_wk4ac8.jpg',
    desc: '"Galaxy". Ink. A4',
    sold: true,
    variations: [],
  },

  { id: 7,
    title: 
    'Hands',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027801/75362363_111228040343241_2981416810546462720_n.jpg_skadzl.jpg',
    desc: '"Hands". White and Silver Ink. 70 X 35',
    sold: false,
    variations: [],
  },

  { id: 6,
    title: 
    'Eye of Wisdom',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027695/75224718_111228003676578_1693832765356638208_n.jpg_splpyd.jpg',
    desc: '"Eye of Wisdom". White Ink. A3',
    sold: false,
    variations: [],
  },

  { id: 5,
    title: 
    'Sink',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027622/70703762_111227217009990_5450566437837996032_n.jpg_txsaiq.jpg',
    desc: '"Sink". Ink. A4',
    sold: false,
    variations: [],
  },

  { id: 4,
    title: 
    'Woman and Man',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027568/75474030_111226997010012_9172469158204407808_n.jpg_hysbbr.jpg',
    desc: '"Woman and Man". Ink. A3',
    sold: false,
    variations: [],
  },

  { id: 3,
    title: 
    'Sink Spiral',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027428/76191766_111226177010094_851467688654929920_n.jpg_udwwyx.jpg',
    desc: '"Sink Spiral". White Ink. A3',
    sold: false,
    variations: [],
  },

  { id: 2,
    title: 
    'Summer City',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027223/72480660_111225327010179_2302704337308090368_n.jpg_enyqhw.jpg',
    desc: '"Summer City". Ink. A3.',
    sold: false,
    variations: [],
  },


  { id: 1,
    title: 
    'Ocean',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765026038/75594637_111220637010648_3788774609545854976_n.jpg_ngcd5r.jpg',
    desc: '"Ocean". White Ink. 35X70',
    sold: false,
    variations: [],
  },


  ];


const clothPrints = [
  { id: 1011,
    title: 
    'Hero Painting 1',
    price: 270,
    img: 'imgs/first-imgs/a4.png',
    desc: 'The shimmer of modern city lights.', sold: true,
    hidden: true,
    variations: ['imgs/1.jpg',
                 'imgs/2.jpg', 
                 'imgs/3.jpg'],

  },

  { id: 1010,
    title: 
    'Hero Painting 2',
    price: 270,
    img: 'imgs/first-imgs/a2.png',
    desc: 'The shimmer.', sold: false,
    variations: ['imgs/1.jpg', 
                 'imgs/2.jpg',
                 'imgs/3.jpg'],

  },

  { id: 1009,
    title: 
    'Golden tones',
    price: 270,
    img: 'imgs/first-imgs/a3.png', desc: 'Hero Painting 3', sold: true, 
    variations: ['imgs/gal-imgs/gal-1.jpg',
                 'imgs/gal-imgs/gal-2.jpg',
                 'imgs/gal-imgs/gal-3.jpg'],

  },

  { id: 1008,
    title: 
    'Hero Painting 4',
    price: 270,
    img: 'imgs/first-imgs/a4.png',
    desc: 'The shimmer of modern city.',
    sold: true,
    variations: ['imgs/1.jpg',
                 'imgs/2.jpg',
                 'imgs/3.jpg'],

  },

  { id: 1007,
    title: 
    'Hero Painting 5',
    price: 270,
    img: 'imgs/first-imgs/a5.png',
    desc: 'The shimmer of s.', 
    sold: false,
    variations: ['imgs/gal-imgs/gal-1.jpg',
                 'imgs/gal-imgs/gal-2.jpg',
                 'imgs/gal-imgs/gal-3.jpg'],
  },

  { id: 1006,
    title: 
    'Hero Painting 2',
    price: 270,
    img: 'imgs/first-imgs/a2.png',
    desc: 'The shimmer of modern city lights.', sold: false,
    variations: ['imgs/1.jpg', 
                 'imgs/2.jpg',
                 'imgs/3.jpg'],
  },

  { id: 1005,
    title: 
    'Golden tones.',
    price: 270,
    img: 'imgs/first-imgs/a1.png', desc: 'Hero Painting 3',
    sold: false, 
    variations: ['imgs/gal-imgs/gal-1.jpg',
                 'imgs/gal-imgs/gal-2.jpg',
                 'imgs/gal-imgs/gal-3.jpg'],
  },

  { id: 1004,
    title: 
    'Hero Painting 4',
    price: 270,
    img: 'imgs/first-imgs/a4.png',
    desc: 'The shimmer of modern city.',
    sold: false,
    variations: ['imgs/1.jpg',
                 'imgs/2.jpg',
                 'imgs/3.jpg'],
  },

  { id: 1003,
    title: 
    'Hero Painting 5',
    price: 270,
    img: 'imgs/first-imgs/a3.png',
    desc: 'The shimmer of modern city lights.', 
    sold: false,
    variations: ['imgs/gal-imgs/gal-1.jpg',
                 'imgs/gal-imgs/gal-2.jpg',
                 'imgs/gal-imgs/gal-3.jpg'],
  },

 { id: 1002,
    title: 
    'Hero Painting 6',
    price: 270,
    img: 'imgs/first-imgs/a1.png',
    desc: 'The shimmer of modern city lights.',
    sold: true,
    variations: ['imgs/1.jpg',
                 'imgs/2.jpg',
                 'imgs/3.jpg'],
  },

    { id: 1000,
    title: 
    'Hero Painting 2',
    price: 270,
    img: 'imgs/first-imgs/a6.png',
    desc: 'The shimmer of modern city lights.', sold: false,
    variations: ['imgs/1.jpg', 
                 'imgs/2.jpg',
                 'imgs/3.jpg'],
  },               
                 
];


const heroImages = document.querySelectorAll('.hero-image-wrapper .hero-img');
heroImages.forEach(img => {
  img.addEventListener('click', () => {
    const paintingId = img.getAttribute('data-id');
    if (paintingId) window.location.href = `painting.html?id=${paintingId}`;
  });
});

/**
 * @param {string} path 
 * @returns {boolean}
 */
function isVideo(path) {
  if (!path) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  const lowerCasePath = path.toLowerCase();
  return videoExtensions.some(ext => lowerCasePath.endsWith(ext));
}

function renderGallery(dataArray, listId, detailsPage = 'painting.html') {
  const galleryList = document.getElementById(listId);
  if (!galleryList) return;

  const isCloth = listId === 'cloth-gallery-list';

  const signatureText = isCloth
    ? `<p class="signature-note" style="font-size: 0.8em; margin-top: 5px; color: #f0f0f0;">
         All prints come with the artist's original signature.
       </p>`
    : '';

  dataArray
    .filter(p => !p.hidden)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      if (p.sold) card.classList.add('sold');

      const mediaElement = `<img    class="lazy-img"
 class="gallery-img" src="${p.img}" alt="${escapeHtml(p.title)}" data-id="${p.id}">`;

      card.innerHTML = `
        ${mediaElement}
        <div class="overlay">
          <h3>${escapeHtml(p.title)}</h3>
          <p>$${p.price}</p>
          ${signatureText}
        </div>
        ${p.sold ? '<div class="sold-label">SOLD</div>' : ''}
      `;

      card.addEventListener('click', (e) => {
        window.location.href = `${detailsPage}?id=${p.id}`;
      });

      galleryList.appendChild(card);
    });
}

document.querySelectorAll(".lazy-img").forEach(img => {
    img.onload = () => {
        img.src = img.dataset.full; 
    };
});


function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

try {
  renderGallery(paintings, 'gallery-list', 'painting.html');
  renderGallery(clothPrints, 'cloth-gallery-list', 'painting.html');
} catch (err) {

}

function findProductData(id) {
  if (!id && id !== 0) return null;
  const nid = Number(id);
  let data = Array.isArray(paintings) ? paintings.find(p => Number(p.id) === nid) : undefined;
  if (!data && Array.isArray(clothPrints)) {
    data = clothPrints.find(p => Number(p.id) === nid);
  }
  return data || null;
}

const mainPainting = document.getElementById('main-painting');
const mainPaintingVideo = document.getElementById('main-painting-video');
const mainPaintingWrapper = document.getElementById('main-painting-wrapper');
const carouselBox = document.getElementById('carousel-box');

/**
 * @param {string} src 
 */
function setMainMedia(src) {
    if (isVideo(src)) {
        if (mainPaintingVideo) {
            mainPaintingVideo.src = src;
            mainPaintingVideo.style.display = 'block';
            mainPaintingVideo.play();
        }
        if (mainPainting) mainPainting.style.display = 'none';
    } else {
        if (mainPainting) {
            mainPainting.src = src;
            mainPainting.style.display = 'block';
        }
        if (mainPaintingVideo) {
            mainPaintingVideo.pause();
            mainPaintingVideo.style.display = 'none';
        }
    }
}

if (mainPaintingWrapper) {
  const id = new URLSearchParams(window.location.search).get("id");
  const product = findProductData(id);

  if (product) {
    setMainMedia(product.img); 

    mainPaintingWrapper.addEventListener('click', () => openModalProduct(product));


    if (carouselBox) {
      carouselBox.innerHTML = "";

      const variants = (Array.isArray(product.variations) ? product.variations : [])
        .concat(Array.isArray(product.videos) ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 
     
      variants.forEach(src => {
        const isMediaVideo = isVideo(src);
        
        const mediaElement = document.createElement(isMediaVideo ? "video" : "img");
        mediaElement.src = src;
        mediaElement.alt = product.title || 'variant';
        mediaElement.className = 'variant-img';
        
        if(isMediaVideo) {
            mediaElement.setAttribute('preload', 'metadata');
            mediaElement.setAttribute('poster', product.img); 
            mediaElement.setAttribute('playsinline', ''); 
        }
        
        mediaElement.addEventListener('click', (e) => {
          e.stopPropagation();
          
          if(isMediaVideo) {
              setMainMedia(src); 
          } else {
              setMainMedia(src); 
          }
          
          openModalImage(src, product.title, `$${product.price}`, product.desc); 
        });
        carouselBox.appendChild(mediaElement);
      });
    }
  }
}

const paintingImg = document.getElementById('painting-img');
const paintingVideo = document.getElementById('painting-video');
const paintingImgWrapper = document.querySelector('.painting-image'); 
const paintingTitle = document.getElementById('painting-title');
const paintingPrice = document.getElementById('painting-price');
const paintingDesc = document.getElementById('painting-desc');


/**
 * @param {string} src 
 */
function setDetailsMainMedia(src) {
    if (isVideo(src)) {
        if (paintingVideo) {
            paintingVideo.src = src;
            paintingVideo.style.display = 'block';
            paintingVideo.play();
        }
        if (paintingImg) paintingImg.style.display = 'none';
    } else {
        if (paintingImg) {
            paintingImg.src = src;
            paintingImg.style.display = 'block';
        }
        if (paintingVideo) {
            paintingVideo.pause();
            paintingVideo.style.display = 'none';
        }
    }
}


if (paintingImgWrapper && paintingTitle && paintingPrice && paintingDesc) {
  const id = new URLSearchParams(window.location.search).get("id");
  const product = findProductData(id);

  if (product) {
    setDetailsMainMedia(product.img); 

    paintingTitle.innerText = product.title || '';
    paintingPrice.innerText = `$${product.price || 0}`;
    paintingDesc.innerText = product.desc || '';

    const isClothProduct = Array.isArray(clothPrints) && clothPrints.some(p => Number(p.id) === Number(product.id));
    
    if (isClothProduct && !document.querySelector('.signature-highlight')) {
      const signatureNote = document.createElement('p');
      signatureNote.className = 'signature-highlight';
      signatureNote.style.cssText = `
        font-size: 1.1em;
        margin-top: 15px;
        padding: 10px;
        border: 1px dashed #FF6B6B;
        color: #FF6B6B;
        background-color: #FFF0F0;
        font-weight: bold;
        text-align: center;
        border-radius: 5px;
      `;
      signatureNote.innerText = "⭐ All prints come with the artist's original signature. ⭐";
      paintingDesc.after(signatureNote);
    }

    paintingImgWrapper.addEventListener('click', () => {
        let currentSrc = paintingImg.style.display === 'block' ? paintingImg.src : paintingVideo.src;
        openModalImage(currentSrc, product.title, `$${product.price}`, product.desc);
    });
    
    // ⭐ ვარიანტების რენდერირების ლოგიკა ⭐
    const detailsVariantsContainer = document.getElementById('details-variants');
    const fallbackVariantsContainer = document.getElementById('carousel-box'); 
    const containerToUse = detailsVariantsContainer || fallbackVariantsContainer;


    if (containerToUse) {
      containerToUse.innerHTML = ''; 
      
      // ⭐⭐ ჩასწორებული ლოგიკა Details Page-ის ვარიანტებისთვის ⭐⭐
      const variants = (product.variations && product.variations.length ? product.variations : [])
        .concat(product.videos && product.videos.length ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 
      // ⭐⭐ ჩასწორებული ლოგიკის დასასრული ⭐⭐


      variants.forEach(src => {
        const isMediaVideo = isVideo(src);
        
        const v = document.createElement(isMediaVideo ? "video" : "img");
        v.src = src;
        v.alt = product.title || 'variant';
        v.className = 'variant-img';
        
        if(isMediaVideo) {
            v.setAttribute('preload', 'metadata');
            v.setAttribute('poster', product.img); 
            v.setAttribute('loop', '');
            v.setAttribute('muted', '');
            v.setAttribute('playsinline', ''); 
        }

        v.addEventListener('click', () => {
            setDetailsMainMedia(src); 
            openModalImage(src, product.title, `$${product.price}`, product.desc); 
        });
        containerToUse.appendChild(v);
      });
    }

    // ⭐ ლოგიკის დასასრული ⭐


    if (product.sold) {
      const soldBadge = document.createElement('div');
      soldBadge.className = 'sold-label';
      soldBadge.innerText = 'SOLD';

      const wrapper = paintingImgWrapper;
      wrapper.appendChild(soldBadge);
    }
  }
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.innerText = new Date().getFullYear();
// 1. HTML ელემენტების ინიციალიზაცია (კავშირი)
const range = document.getElementById("sizeRange");
const sizeValue = document.getElementById("sizeValue");
const priceValue = document.getElementById("priceValue");
const resValue = document.getElementById("resValue");
const painting = document.getElementById("paintingSlider"); 
const unitSelect = document.getElementById("unitSelect");

// 2. საბაზისო მნიშვნელობები
let baseSize = 30; 
let basePrice = 100; 
let pricePer10cm = 10; 
let baseResolution = { width: 3000, height: 2000 }; 

// 3. ფუნქცია: მიმდინარე ზომის მიღება (სმ-ში)
function getSizeCM() {
    if (!range) return baseSize;
    return parseInt(range.value, 10) || baseSize;
}

// 4. ფუნქცია: ზომის ტექსტის განახლება (სმ ან ფუტი)
function updateSize() {
    if (!sizeValue || !unitSelect) return;
    const sizeCM = getSizeCM();
    
    // შეცვლილი ლოგიკა: ერთეულის მიწერა (ან "cm" ან "ft")
    if (unitSelect.value === "cm") {
        sizeValue.textContent = sizeCM + " cm";
    } else {
        // 1 ფუტი = 30.48 სმ
        sizeValue.textContent = (sizeCM / 30.48).toFixed(2) + " ft";
    }
}

// 5. ფუნქცია: ყველაფრის განახლება (ფასი, რეზოლუცია, ვიზუალური ზომა)
function updateEverything() {
    if (!priceValue || !resValue || !painting) return;
    const newSize = getSizeCM();
    
    // განაახლეთ ზომის ჩვენება (სმ ან ფუტით)
    updateSize();

    // --- ფასის გაანგარიშება ---
    const sizeDifference = newSize - baseSize;
    const added = (sizeDifference / 10) * pricePer10cm;
    const newPrice = basePrice + added;
    priceValue.textContent = newPrice.toFixed(2);

    // --- ნახატის ვიზუალური ზომის გაზრდა ---
    const scale = 1 + sizeDifference / 200;
    painting.style.transform = `scale(${scale})`;

    // --- რეზოლუციის გაანგარიშება ---
    const resolutionScale = newSize / baseSize;
    
    const newW = Math.round(baseResolution.width * resolutionScale);
    const newH = Math.round(baseResolution.height * resolutionScale);
    resValue.textContent = `${newW} x ${newH}`;
}

// 6. ივენთების მიბმა (Listener-ები)
if (range) {
    range.addEventListener("input", updateEverything);
}

if (unitSelect) {
    unitSelect.addEventListener("change", updateEverything); 
}

// 7. საწყისი მნიშვნელობების დაყენება ჩატვირთვისას
updateEverything();

const aboutBtn = document.querySelector('.about-btn');
if (aboutBtn) {
  aboutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const gallery = document.querySelector('#gallery');
    if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
  });
}


// NEW FUNCTION: Updates the modal content (media and text) based on currentModalIndex
function updateModalContent() { 
    if (currentModalMediaList.length === 0) return;

    const mediaSrc = currentModalMediaList[currentModalIndex];
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');

    const isMediaVideo = isVideo(mediaSrc);

    if (modalImg) modalImg.style.display = 'none';
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.style.display = 'none';
    }

    if (isMediaVideo) {
        if (modalVideo) {
            modalVideo.src = mediaSrc;
            modalVideo.style.display = 'block';
            modalVideo.play();
        }
    } else {
        if (modalImg) {
            modalImg.src = mediaSrc;
            modalImg.style.display = 'block';
        }
    }
    
    // Logic for updating text (handling cloth video case)
    const isCloth = Array.isArray(clothPrints) &&
                  clothPrints.some(p => 
                      (p.variations && p.variations.includes(mediaSrc)) || 
                      (p.videos && p.videos.includes(mediaSrc)) || 
                      (p.img === mediaSrc)
                  );
    
    const currentProductId = new URLSearchParams(window.location.search).get("id");
    const currentProduct = findProductData(currentProductId);

    if (isCloth && isMediaVideo) { 
        // Cloth video: remove info text
        if (modalTitle) modalTitle.innerText = '';
        if (modalPrice) modalPrice.innerText = '';
        if (modalDesc) modalDesc.innerText = '';
    } else if (currentProduct) {
        // Any other case on product detail page: show product info
        if (modalTitle) modalTitle.innerText = currentProduct.title || '';
        if (modalPrice) modalPrice.innerText = `$${currentProduct.price || 0}`;
        if (modalDesc) modalDesc.innerText = currentProduct.desc || '';
    }
}

// NEW FUNCTION: Show the next media item in the modal
function showNextMedia() { 
    if (currentModalMediaList.length > 1) {
        currentModalIndex = (currentModalIndex + 1) % currentModalMediaList.length;
        updateModalContent();
    }
}

// NEW FUNCTION: Show the previous media item in the modal
function showPrevMedia() { 
    if (currentModalMediaList.length > 1) {
        currentModalIndex = (currentModalIndex - 1 + currentModalMediaList.length) % currentModalMediaList.length;
        updateModalContent();
    }
}


function openModalProduct(product) {
  if (!product) return;
  
    // Initialize media list for swipe (Index.html or Main Image Click)
    currentModalMediaList = [product.img]
        .concat(Array.isArray(product.variations) ? product.variations : [])
        .concat(Array.isArray(product.videos) ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 

    let currentSrc;
    if (mainPainting && mainPainting.style.display === 'block') {
        currentSrc = mainPainting.src;
    } else if (mainPaintingVideo && mainPaintingVideo.style.display === 'block') {
        currentSrc = mainPaintingVideo.src;
    } else if (paintingImg && paintingImg.style.display === 'block') { 
        currentSrc = paintingImg.src;
    } else if (paintingVideo && paintingVideo.style.display === 'block') { 
        currentSrc = paintingVideo.src;
    } else {
        currentSrc = product.img; 
    }
    
    currentModalIndex = currentModalMediaList.indexOf(currentSrc);
    if(currentModalIndex === -1) currentModalIndex = 0; // Default to first item

  // openModalImage will handle the final display
  openModalImage(currentSrc, product.title || '', `$${product.price || 0}`, product.desc || '');
}

function openModalImage(mediaSrc, title, price, desc) { 
    const modal = document.getElementById('modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    
    // Fallback/Detail Page Initialization (if not called via openModalProduct)
    if (window.location.pathname.includes('painting.html')) {
        const currentProductId = new URLSearchParams(window.location.search).get("id");
        const currentProduct = findProductData(currentProductId);
        if (currentProduct) {
             currentModalMediaList = [currentProduct.img]
                .concat(currentProduct.variations && currentProduct.variations.length ? currentProduct.variations : [])
                .concat(currentProduct.videos && currentProduct.videos.length ? currentProduct.videos : [])
                .filter((value, index, self) => self.indexOf(value) === index); 
            
            currentModalIndex = currentModalMediaList.indexOf(mediaSrc);
            if(currentModalIndex === -1) currentModalIndex = 0; 
            
            // Set text initially based on passed data (if available)
            if (modalTitle) modalTitle.innerText = title || '';
            if (modalPrice) modalPrice.innerText = price || '';
            if (modalDesc) modalDesc.innerText = desc || '';
        }
    } else if (currentModalMediaList.length === 0) {
        // If coming from index.html (e.g. hero image click) but openModalProduct was somehow bypassed
         currentModalMediaList = [mediaSrc];
         currentModalIndex = 0;
         if (modalTitle) modalTitle.innerText = title || '';
         if (modalPrice) modalPrice.innerText = price || '';
         if (modalDesc) modalDesc.innerText = desc || '';
    }


    // Display modal
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    
    // Update content based on the (now set) global state
    updateModalContent(); 
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const modalVideo = document.getElementById('modal-video');
  if (modalVideo) modalVideo.pause();

  modal.style.display = "none";
  document.body.style.overflow = '';
  currentModalMediaList = []; 
  currentModalIndex = 0;
}

(function modalInit() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

// NEW: Attach listeners to the navigation buttons
(function modalNavButtonsInit() {
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from closing the modal
            showPrevMedia();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from closing the modal
            showNextMedia();
        });
    }
})();

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('scrollToContact');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      const target = document.getElementById('contact');
      if (!target) {
        console.warn('Element with id="contact" not found.');
        return;
      }
      // თუ ბრაუზერი უჭერს CSS scroll-behavior-ს, ჩააქროლებს სმუზად.
      // სხვა შემთხვევაში გამოვიყენებთ window.scrollTo და smooth behaviour.
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });