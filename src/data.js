import foodImg from "./assets/food.png";
import happyDog from "./assets/happydog.png";
import dogBowls from "./assets/dog-bowls.png";
import kibbleImg from "./assets/kibble.png";
import dogFood from "./assets/dog-food.png";
import petFood from "./assets/pet-food.png"
import petBowl from "./assets/pet-bowl.png"
import dogVet from "./assets/vet.png";
import shield from "./assets/shield-check.svg";


export const featuresData = {

  features: [
    {
      image: dogFood,
      title: "Real Food",
      desc: "Wholesome recipes for dogs with real meat and veggies."
    },
    {
      image: petFood,
      title: "Made Fresh",
      desc: "We prioritize maintaining the integrity of whole foods and nutrition."
    },
    {
      image: petBowl,
      title: "Premium Ingredient",
      desc: "Unmatched safety and quality for your dog’s health."
    },
    {
      image: dogVet,
      title: "Vet Developed",
      desc: "We raise the bar for dog nutrition, surpassing expectations."
    }
  ],
  image: foodImg
};

export const ctaData = {
  buttonText: "Get your dog’s healthy meal today!",
  image: shield,
  guaranteeText: "30-day money back guarantee",
  paymentIcons: [
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_Pay_logo.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Pay_Logo.png"
  ]
};

export const nutritionData = {
  title: "Nutrition is the foundation for longer, healthier lives in dogs.",
  description:
    "Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.",
  stats: [
    {title: "Key Points:"},
    { percent: "97%", text: "Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor." },
    { percent: "84%", text: "Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption." },
    { percent: "92%", text: "Our dog food's high protein and fat digestibility contribute to ideal stool quality." }
  ],
  buttonText: "Give your furry friend wholesome nutrition",
  image: happyDog
};

export const gastroData = {
  title: "Improve overall gastrointestinal health for better nutrient absorption",
  description:
    "Our unique scientific blend and consultations with veterinarians help maintain a balanced gut microbiome, boosting nutrient absorption and supporting long-term health.",
  image: dogBowls
};

export const prebioticsData = {
  title: "Prebiotics nourish the beneficial gut bacteria, supporting digestive health",
  description:
    "Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing nutrients for beneficial bacteria and supporting overall digestive health.",
  image: kibbleImg
};
