import { StaticImageData } from "next/image";

// Static images but if stored in an actual db would host and only keep a reference to an images url
import WhiteHelmet from "../public/assets/bag.png";
import RocketBeans from "../public/assets/beans.jpg";
import SpaceCups from "../public/assets/coffeecup.png";
import Machine from "../public/assets/coffeemaker.png"
import OtherMachine from "../public/assets/frother.png";
import Cap from "../public/assets/cap.png"

export type ShopItem = {
  id: number;
  image: StaticImageData;
  price: number;
  name: string;
  description: string;
  sizes?: string[];
};

const shopItems = [
  {
    id: 1,
    image: Cap,
    price: 45,
    name: "WorldRoam Cap",
    description: "Brewed for Global Adventures",
    sizes: ["S", "M", "L"],
  },

  {
    id: 2,
    image: RocketBeans,
    price: 35,
    name: "Wordly Beans",
    description: "Discover Your Global Lift",
  },
  {
    id: 3,
    image: SpaceCups,
    price: 18,
    name: "GlobeGrip",
    description: "Sip the World in Your Hands",
  },
  {
    id: 4,
    image: Machine,
    price: 399,
    name: "GlobalBrew Pro",
    description: "Elevate Your Coffee Journey",
  },
  {
    id: 5,
    image: OtherMachine,
    price: 25,
    name: "Frother",
    description: " Whisking Your Coffee to International Heights",
  },
  {
    id: 6,
    image: WhiteHelmet,
    price: 50,
    name: "Roam Bag",
    description: "Carry the World of Coffeee",
  },
];

const menuItems = [
  {
    category: "espresso",
    options: [
      {
        name: "Italian Espresso",
        description: "A bold shot inspired by Italian coffee culture. Rich and full-bodied with a lingering crema.",
        price: 4.25,
      },
      {
        name: "Brazilian Cerrado Cappuccino",
        description: "Velvety cappuccino made with Brazilian Cerrado beans. Nutty and chocolatey flavors.",
        price: 3.75,
      },
      {
        name: "Costa Rican Honey Process",
        description: "Sweetness of Costa Rican coffee with honey processing. Medium-dark roast with tropical fruit notes.",
        price: 3.75,
      },
      {
        name: "Turkish Cardamom Infusion",
        description: "Transport to Istanbul with strong coffee and aromatic cardamom. Traditionally brewed.",
        price: 3.75,
      },
      {
        name: "Mexican Spiced Mocha",
        description: "Fusion of rich chocolate, bold coffee, and a hint of chili. Delightful warmth and complexity. ",
        price: 5.25,
      },
      {
        name: "Japanese Matcha Latte",
        description: "Serene flavors of Japan with matcha and steamed milk. Balanced earthy and creamy tones.",
        price: 5.25,
      },
    ],
  },
  {
    category: "sandwiches",
    options: [
      {
        name: "Mediterranean Gyro Wrap",
        description: "Flavors of the Mediterranean with grilled lamb or chicken, tzatziki, tomatoes, onions, and lettuce.",
        price: 8.25,
      },
      {
        name: "New York Deli Reuben",
        description:
          "Classic New York Deli sandwich with corned beef, sauerkraut, Swiss cheese, and Russian dressing.",
        price: 8.5,
      },
      {
        name: "Mexican Street Corn Quesadilla",
        description:
          "Fusion of Mexican street food with grilled corn, cotija cheese, lime, and a hint of chili.",
        price: 8.5,
      },
      {
        name: "Cuban Sandwich",
        description:
          "Taste of Havana with roasted pork, ham, Swiss cheese, pickles, and mustard on pressed Cuban bread..",
        price: 10.25,
      },
    ],
  },
  {
    category: "salads",
    options: [
      {
        name: "Greek Salad",
        description:
          "Romaine lettuce, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta in a lemon-oregano vinaigrette.",
        price: 8.5,
      },
      {
        name: "Asian Sesame Chicken Salad",
        description:
          "Grilled sesame-crusted chicken, mixed greens, mandarin oranges, carrots, and wonton strips in soy-ginger vinaigrette.",
        price: 10,
      },
      {
        name: "Moroccan Quinoa Salad",
        description: "Quinoa, chickpeas, cucumber, dried apricots, and mint in a harissa-spiced vinaigrette.",
        price: 7,
      },
    ],
  },
  {
    category: "sweets",
    options: [
      {
        name: "French Macarons",
        description:
          "Almond meringue cookies with ganache or buttercream fillings. A perfect balance of sweetness and texture.",
        price: 5,
      },
      {
        name: "American Apple Pie Cupcake",
        description:
          "Spiced apple cupcake with cinnamon cream cheese frosting and a drizzle of caramel sauce.",
        price: 8,
      },
      {
        name: "Churro Ice Cream Sundae",
        description: "Crispy and cinnamon-sugar churros paired with a scoop of vanilla ice cream. Topped with chocolate sauce and whipped cream.",
        price: 12,
      },
    ],
  },
];

export { shopItems, menuItems };
