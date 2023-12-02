import { StaticImageData } from "next/image";

// Static images but if stored in an actual db would host and only keep a reference to an images url
import WhiteHelmet from "../public/assets/white-helmet.jpg";
import BlackHelmet from "../public/assets/black-helmet.jpg";
import RocketBeans from "../public/assets/rocket-beans.jpg";
import SpaceCups from "../public/assets/space-cups.jpg";
import Machine from "../public/assets/machine.jpg";
import OtherMachine from "../public/assets/other-machine.jpg";
import Cap from "../public/assets/cap.jpg";

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
    price: 50,
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
    price: 80,
    name: "GlobeGrip",
    description: "Sip the World in Your Hands",
  },
  {
    id: 4,
    image: Machine,
    price: 599,
    name: "GlobalBrew Pro",
    description: "Elevate Your Coffee Journey",
  },
  {
    id: 5,
    image: OtherMachine,
    price: 499,
    name: "Frother",
    description: " Whisking Your Coffee to International Heights",
  },
  {
    id: 6,
    image: WhiteHelmet,
    price: 200,
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
        description: "A bold and intense shot of espresso, inspired by the traditional coffee culture of Italy. Rich and full-bodied with a lingering crema.",
        price: 4.25,
      },
      {
        name: "Brazilian Cerrado Cappuccino",
        description: "Indulge in a velvety cappuccino made with Brazilian Cerrado beans. This medium roast brings out the nutty and chocolatey flavors, creating a smooth and creamy delight.",
        price: 3.75,
      },
      {
        name: "Costa Rican Honey Process",
        description: "Savor the sweetness of Costa Rican coffee with a honey-processed single origin. This medium-dark roast features a syrupy body, notes of tropical fruit, and a lingering caramel finish.",
        price: 3.75,
      },
      {
        name: "Turkish Cardamom Infusion",
        description: "Transport yourself to the bustling streets of Istanbul with our Turkish Cardamom Infusion. A blend of strong coffee and aromatic cardamom, traditionally prepared and brewed to perfection.",
        price: 3.75,
      },
      {
        name: "Mexican Spiced Mocha",
        description: "Add a touch of spice to your day with our Mexican Spiced Mocha. This fusion of rich chocolate, bold coffee, and a hint of chili creates a delightful warmth and complexity.",
        price: 5.25,
      },
      {
        name: "Japanese Matcha Latte",
        description: "Embrace the serene flavors of Japan with our Matcha Latte. A harmonious blend of Japanese matcha and steamed milk, offering a balanced combination of earthy and creamy tones.",
        price: 5.25,
      },
    ],
  },
  {
    category: "sandwiches",
    options: [
      {
        name: "Mediterranean Gyro Wrap",
        description: " Dive into the flavors of the Mediterranean with our Gyro Wrap. Grilled lamb or chicken, tzatziki sauce, fresh tomatoes, onions, and crisp lettuce wrapped in a warm pita.",
        price: 8.25,
      },
      {
        name: "New York Deli Reuben",
        description:
          "A classic tribute to the iconic New York Deli sandwich. Thinly sliced corned beef, sauerkraut, Swiss cheese, and Russian dressing on grilled rye bread.",
        price: 8.5,
      },
      {
        name: "Mexican Street Corn Quesadilla",
        description:
          "A fusion of flavors inspired by Mexican street food. Grilled corn, cotija cheese, lime, and a hint of chili, folded into a quesadilla with a side of salsa verde.",
        price: 8.5,
      },
      {
        name: "Caprese Panini",
        description:
          "Taste the freshness of Italy with our Caprese Panini. Sliced tomatoes, mozzarella, and basil pesto pressed between artisanal bread for a delightful, melty experience.",
        price: 5.5,
      },
      {
        name: "Indian Spiced Chickpea Wrap",
        description: "Spice things up with our Indian Spiced Chickpea Wrap. Curried chickpeas, fresh veggies, mint-cilantro chutney, and yogurt sauce in a soft flatbread.",
        price: 8.25,
      },
      {
        name: "Cuban Sandwich",
        description:
          " Transport your taste buds to Havana with our Cuban Sandwich. Roasted pork, ham, Swiss cheese, pickles, and mustard on pressed Cuban bread.",
        price: 10.25,
      },
      {
        name: "Japanese Teriyaki Chicken Sushi Burrito",
        description: "A unique blend of Japanese and Mexican cuisines. Teriyaki chicken, sushi rice, avocado, and crunchy vegetables wrapped in a sushi burrito with nori seaweed.",
        price: 9.5,
      },
    ],
  },
  {
    category: "salads",
    options: [
      {
        name: "Greek Salad",
        description:
          "Crisp romaine lettuce, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta cheese tossed in a lemon-oregano vinaigrette.",
        price: 8.5,
      },
      {
        name: "Asian Sesame Chicken Salad",
        description:
          "Grilled sesame-crusted chicken, mixed greens, mandarin oranges, shredded carrots, and crispy wonton strips, dressed in a soy-ginger vinaigrette.",
        price: 10,
      },
      {
        name: "Moroccan Quinoa Salad",
        description: "Quinoa, chickpeas, cucumber, dried apricots, and mint tossed in a harissa-spiced vinaigrette.",
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
          "A variety of almond meringue cookies with luscious ganache or buttercream fillings, offering a perfect balance of sweetness and texture.",
        price: 5,
      },
      {
        name: "American Apple Pie Cupcake",
        description:
          "A spiced apple cupcake topped with cinnamon cream cheese frosting and a drizzle of caramel sauce.",
        price: 5,
      },
      {
        name: "Churro Ice Cream Sundae",
        description: "Crispy and cinnamon-sugar goodness of churros paired with a scoop of vanilla ice cream, topped with chocolate sauce and whipped cream.",
        price: 14.5,
      },
    ],
  },
];

export { shopItems, menuItems };
