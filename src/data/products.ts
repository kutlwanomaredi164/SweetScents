export interface ProductTier {
  label: string;
  price: number;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'boolean' | 'quantity' | 'text';
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'ROSES' | 'MIXED' | 'LUXURY' | 'CUSTOM' | 'SPECIAL';
  occasion: string[];
  basePrice: number;
  description: string;
  shortDescription: string;
  image: string;
  tiers: ProductTier[];
  availableAddOns: string[];
  isFeatured?: boolean;
  tag?: string;
}

export const ADD_ONS: AddOnOption[] = [
  {
    id: 'initial',
    name: 'Initial Pin / Letter',
    price: 150,
    description: 'Custom pearl or glitter monogram initial pinned into the florals',
    type: 'text',
    icon: '✦'
  },
  {
    id: 'words',
    name: 'Custom Ribbon Words',
    price: 250,
    description: 'Personalized words or heartfelt quote printed along luxury satin ribbon',
    type: 'text',
    icon: '✎'
  },
  {
    id: 'gyps',
    name: 'Gypsophila (Baby\'s Breath)',
    price: 150,
    description: 'An airy, romantic cloud of delicate white baby\'s breath blooms',
    type: 'boolean',
    icon: '❀'
  },
  {
    id: 'balloon',
    name: 'Foil Heart Balloon',
    price: 40,
    description: 'Delicate metallic heart balloon tied to your bouquet stem',
    type: 'boolean',
    icon: '🎈'
  },
  {
    id: 'pins',
    name: 'Diamond Floral Pins',
    price: 5,
    description: 'Sparkling diamond-cut crystal pins placed in flower centers (per pin)',
    type: 'quantity',
    icon: '💎'
  },
  {
    id: 'ferrero',
    name: 'Ferrero Rocher Topper',
    price: 120,
    description: 'Nestled golden Ferrero Rocher hazelnut chocolates atop arrangement',
    type: 'boolean',
    icon: '✨'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'colour-roses',
    name: 'Colour Roses',
    category: 'ROSES',
    occasion: ['Romance', 'Birthdays', 'Celebrations', 'Just Because'],
    basePrice: 400,
    shortDescription: 'Lush pastel and seasonal colour roses hand-tied with signature silk ribbons.',
    description: 'A breathtaking arrangement of vibrant and pastel roses hand-selected for freshness and velvety bloom. Wrapped in our signature multi-layered matte blush paper with trailing satin ribbons.',
    image: '/src/assets/images/regenerated_image_1791402111628.png',
    tiers: [
      { label: '20 Roses', price: 400 },
      { label: '40 Roses', price: 600 },
      { label: '60 Roses', price: 800 },
      { label: '80 Roses', price: 1000 },
    ],
    availableAddOns: ['initial', 'words', 'gyps', 'balloon', 'pins'],
    isFeatured: true,
    tag: 'Bestseller'
  },
  {
    id: 'red-white-roses',
    name: 'Red & White Roses',
    category: 'ROSES',
    occasion: ['Romance', 'Special Moments', 'Celebrations'],
    basePrice: 450,
    shortDescription: 'Classic deep crimson and ivory white roses with delicate baby\'s breath.',
    description: 'The epitome of romantic sophistication. Rich crimson roses harmonised with crisp ivory stems, framed with baby\'s breath and wrapped in dramatic burgundy and blush textures.',
    image: '/src/assets/images/regenerated_image_1791403600486.png',
    tiers: [
      { label: '20 Roses', price: 450 },
      { label: '40 Roses', price: 650 },
      { label: '60 Roses', price: 850 },
      { label: '80 Roses', price: 1050 },
    ],
    availableAddOns: ['initial', 'words', 'gyps', 'balloon', 'pins'],
    isFeatured: true,
    tag: 'Romantic Icon'
  },
  {
    id: 'mixed-bouquet',
    name: 'Mixed Seasonal Bouquet',
    category: 'MIXED',
    occasion: ['Birthdays', 'Just Because', 'Celebrations'],
    basePrice: 300,
    shortDescription: 'Artisanal seasonal blooms curated with eucalyptus and fresh florals.',
    description: 'An organic, free-flowing display of seasonal garden blooms, eucalyptus greenery, and textured accents. Customisable to suit your specific palette and budget.',
    image: '/src/assets/images/regenerated_image_1791403602557.png',
    tiers: [
      { label: 'Delicate Petite', price: 300 },
      { label: 'Classic Garden', price: 500 },
      { label: 'Grand Botanical', price: 750 },
      { label: 'Luxe Abundance', price: 1000 },
    ],
    availableAddOns: ['words', 'gyps', 'balloon'],
    isFeatured: true,
    tag: 'Custom Budget'
  },
  {
    id: 'chrysanthemums',
    name: 'Chrysanthemums Arrangement',
    category: 'MIXED',
    occasion: ['Birthdays', 'Just Because', 'Celebrations'],
    basePrice: 300,
    shortDescription: 'Long-lasting, full-bodied chrysanthemum stems in delicate pastel hues.',
    description: 'Celebrated for their extraordinary longevity and lush petal volume. Beautifully bundled in minimalist wraps for a vibrant, cheerful presentation.',
    image: '/src/assets/images/hero_luxury_bouquet_1791395570007.jpg',
    tiers: [
      { label: '20 Stems', price: 300 },
      { label: '40 Stems', price: 400 },
      { label: '60 Stems', price: 500 },
      { label: '80 Stems', price: 600 },
    ],
    availableAddOns: ['words', 'gyps', 'balloon'],
    isFeatured: false,
    tag: 'Long Lasting'
  },
  {
    id: 'ferrero-chocolate-roses',
    name: 'Ferrero Rocher & Rose Bouquet',
    category: 'SPECIAL',
    occasion: ['Romance', 'Birthdays', 'Special Moments'],
    basePrice: 650,
    shortDescription: 'Crisp roses interwoven with golden Ferrero Rocher chocolates.',
    description: 'The ultimate indulgent romance. Luxurious fresh roses paired with individually nestled Ferrero Rocher chocolates for a treat that dazzles the eyes and the tastebuds.',
    image: '/src/assets/images/custom_gift_bouquet_1791395602816.jpg',
    tiers: [
      { label: '16 Chocolates & Roses', price: 650 },
      { label: '24 Chocolates & Roses', price: 950 },
      { label: '36 Chocolates & Grand Roses', price: 1400 },
    ],
    availableAddOns: ['initial', 'words', 'balloon', 'pins'],
    isFeatured: false,
    tag: 'Gourmet'
  },
  {
    id: 'burnt-away-bouquet',
    name: 'Burnt-Away Secret Bouquet',
    category: 'SPECIAL',
    occasion: ['Romance', 'Special Moments'],
    basePrice: 750,
    shortDescription: 'Interactive reveal center that safely burns away to unveil your private note.',
    description: 'A theatrical and magical experience. The centerpiece features a custom flash paper layer that lights safely in seconds to reveal your hidden love letter or proposal message beneath fresh florals.',
    image: '/src/assets/images/regenerated_image_1791403604952.png',
    tiers: [
      { label: 'Signature Surprise (with Note)', price: 750 },
      { label: 'Deluxe Reveal & Grand Florals', price: 1100 },
    ],
    availableAddOns: ['initial', 'words', 'pins'],
    isFeatured: false,
    tag: 'Viral Sensation'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    image: '/src/assets/images/hero_luxury_bouquet_1791395570007.jpg',
    title: 'Signature Blush Garden Wrap',
    caption: 'Soft blush roses with silk burgundy ribbons for an intimate birthday celebration in Sandton.',
    tag: 'Roses & Eucalyptus'
  },
  {
    id: 'g2',
    image: '/src/assets/images/product_colour_roses_1791395582031.jpg',
    title: '40 Pastel Colour Roses',
    caption: 'Gradated peach and rose hues with customized initial diamond pin.',
    tag: 'Colour Roses'
  },
  {
    id: 'g3',
    image: '/src/assets/images/product_red_white_roses_1791395592044.jpg',
    title: 'Crimson & Ivory Romance',
    caption: 'Romantic anniversary arrangement delivered to Menlyn, Pretoria.',
    tag: 'Red & White'
  },
  {
    id: 'g4',
    image: '/src/assets/images/custom_gift_bouquet_1791395602816.jpg',
    title: 'Ferrero Luxe Special Edition',
    caption: 'Golden chocolates nestled in fresh roses with gold-foil lettering ribbon.',
    tag: 'Special Gifts'
  },
  {
    id: 'g5',
    image: '/src/assets/images/hero_luxury_bouquet_1791395570007.jpg',
    title: '60 Roses Grandeur',
    caption: 'A showstopping statement bouquet hand-delivered with white glove care.',
    tag: 'Grandeur'
  },
  {
    id: 'g6',
    image: '/src/assets/images/product_colour_roses_1791395582031.jpg',
    title: 'Delicate Baby’s Breath Cloud',
    caption: 'A dreamy gypsophila accent that adds ethereal lightness to classic stems.',
    tag: 'Add-Ons'
  }
];

export const FAQS = [
  {
    question: 'How far in advance should I order?',
    answer: 'All orders must be placed at least 4 days in advance. This ensures we can source the freshest, hand-graded stems and prepare your customized packaging and ribbons with the highest level of detail.'
  },
  {
    question: 'How do I place an order?',
    answer: 'Browse our collection, configure your desired stems and add-ons, then click "Order via WhatsApp". Your complete order details will be pre-formatted into a message directly to our WhatsApp line (068 354 3182) where our florist will confirm date and delivery.'
  },
  {
    question: 'Is a deposit required?',
    answer: 'Yes, a 50% non-refundable deposit is required to secure your order and book your delivery date on our calendar. The balance is settled prior to or upon dispatch.'
  },
  {
    question: 'Do you offer custom bouquets?',
    answer: 'Absolutely! We love crafting custom floral pieces. You can choose specific flower varieties, colour palettes, special requests (such as Ferrero Rocher, money bouquets, or burnt-away secret reveal notes), and tailor everything to your taste.'
  },
  {
    question: 'Can I customise my bouquet to my budget?',
    answer: 'Yes! Our Mixed Bouquets and Custom arrangements are specifically designed to be flexible. Let us know your target budget and preferred colour scheme, and we will create a magnificent design that maximizes your floral value.'
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes, we provide personal delivery throughout Johannesburg (JHB) and Pretoria (PTA). Delivery fees vary depending on your specific location and suburb. Use our Delivery Checker below or enquire on WhatsApp.'
  },
  {
    question: 'Do you make special gift bouquets?',
    answer: 'Yes! We specialise in memorable gift bouquets including Ferrero Rocher chocolate bouquets, Burnt-Away secret message bouquets, elegant vase arrangements, and money bouquets.'
  }
];

export const SUBURBS_DATABASE = [
  { name: 'Sandton', region: 'Johannesburg', fee: 'R150 - R200', time: 'Morning / Afternoon slots' },
  { name: 'Rosebank', region: 'Johannesburg', fee: 'R150 - R200', time: 'Morning / Afternoon slots' },
  { name: 'Fourways', region: 'Johannesburg', fee: 'R180 - R220', time: 'Morning / Afternoon slots' },
  { name: 'Bryanston', region: 'Johannesburg', fee: 'R180 - R220', time: 'Morning / Afternoon slots' },
  { name: 'Midrand', region: 'Midway / Centurion', fee: 'R150 - R200', time: 'Flexible delivery' },
  { name: 'Centurion', region: 'Pretoria', fee: 'R150 - R200', time: 'Morning / Afternoon slots' },
  { name: 'Pretoria East', region: 'Pretoria', fee: 'R180 - R250', time: 'Scheduled slots' },
  { name: 'Menlyn', region: 'Pretoria', fee: 'R180 - R220', time: 'Morning / Afternoon slots' },
  { name: 'Hatfield', region: 'Pretoria', fee: 'R180 - R220', time: 'Morning / Afternoon slots' },
  { name: 'Brooklyn', region: 'Pretoria', fee: 'R180 - R220', time: 'Morning / Afternoon slots' },
  { name: 'Randburg', region: 'Johannesburg', fee: 'R160 - R210', time: 'Morning / Afternoon slots' },
  { name: 'Bedfordview', region: 'Johannesburg East', fee: 'R180 - R240', time: 'Scheduled slots' },
  { name: 'Roodepoort', region: 'Johannesburg West', fee: 'R190 - R250', time: 'Scheduled slots' },
  { name: 'Waterfall City', region: 'Johannesburg North', fee: 'R160 - R200', time: 'Morning / Afternoon slots' },
];
