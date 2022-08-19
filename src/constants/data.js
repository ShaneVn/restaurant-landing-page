import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const orderTitleListOne = [
  {
    category: "Pizza",
    id: 1,
  },
  { category: "Salad", id: 2 },
  { category: "Pasta", id: 3 },
];

const orderTitleListTwo = [
  {
    category: "Dessert",
    id: 1,
  },
  { category: "Appetizer", id: 2 },
];

const pizzaMenu = [
  {
    img: images.product01,
    alt: "Pizza",
    name: "Supreme Pizza",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$19.99",
    button: "Add to Cart",
    id: 1,
  },
  {
    img: images.product02,
    alt: "Pizza",
    name: "Hawaiian Paradise",
    desc: " Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$16.99",
    button: "Add to Cart",
    id: 2,
  },
  {
    img: images.product03,
    alt: "Pizza",
    name: "Veggie Overload",
    desc: " Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$14.99",
    button: "Add to Cart",
    id: 3,
  },
];

const saladMenu = [
  {
    img: images.salad01,
    alt: "Salad",
    name: "Supreme Salad",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$19.99",
    button: "Add to Cart",
    id: 1,
  },
  {
    img: images.salad02,
    alt: "Salad",
    name: "Cobb salad",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$16.99",
    button: "Add to Cart",
    id: 2,
  },
  {
    img: images.salad03,
    alt: "Salad",
    name: "Toss Green Salad",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$14.99",
    button: "Add to Cart",
    id: 3,
  },
];

const pastaMenu = [
  {
    img: images.pasta01,
    alt: "Salad",
    name: "Amazing Pasta",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$19.99",
    button: "Add to Cart",
    id: 1,
  },
  {
    img: images.pasta02,
    alt: "Salad",
    name: "Delicious Pasta",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$16.99",
    button: "Add to Cart",
    id: 2,
  },
  {
    img: images.pasta03,
    alt: "Salad",
    name: "Awesome Pasta",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$14.99",
    button: "Add to Cart",
    id: 3,
  },
];

const dessertMenu = [
  {
    img: images.sweet01,
    alt: "Sweet",
    name: "Amazing Dessert",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$19.99",
    button: "Add to Cart",
    id: 1,
  },
  {
    img: images.sweet02,
    alt: "Sweet",
    name: "Delicious Dessert",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$16.99",
    button: "Add to Cart",
    id: 2,
  },
  {
    img: images.sweet03,
    alt: "Sweet",
    name: "Awesome Dessert",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$14.99",
    button: "Add to Cart",
    id: 3,
  },
];

const appetizerMenu = [
  {
    img: images.appetizer01,
    alt: "Appetizer",
    name: "Amazing Appetizer",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$19.99",
    button: "Add to Cart",
    id: 1,
  },
  {
    img: images.appetizer02,
    alt: "Appetizer",
    name: "Delicious Appetizer",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$16.99",
    button: "Add to Cart",
    id: 2,
  },
  {
    img: images.appetizer03,
    alt: "Appetizer",
    name: "Awesome Appetizer",
    desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
    price: "$14.99",
    button: "Add to Cart",
    id: 3,
  },
];

const data = {
  wines,
  cocktails,
  awards,
  orderTitleListOne,
  pizzaMenu,
  saladMenu,
  pastaMenu,
  dessertMenu,
  orderTitleListTwo,
  appetizerMenu,
};

export default data;
