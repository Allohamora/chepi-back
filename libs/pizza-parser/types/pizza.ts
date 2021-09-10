import { Ingredient } from './ingredient';

export interface Variant {
  size: number; // 30cm
  price: number; // 135grn
  weight: number; // 400g
}

export const supportedLangs = ['uk', 'ru', 'en'] as const;
export type Lang = typeof supportedLangs[number];

export const supportedCountries = ['ukraine'] as const;
export type Country = typeof supportedCountries[number];

export const supportedCities = ['chernivtsi'] as const;
export type City = typeof supportedCities[number];

export interface Pizza {
  title: string; // my pizza
  description: string; // with pepper and pepperoni
  link: string; // http://pizza.com/buy-pizza/:id
  image: string; // http://pizza.com/image
  ingredients: Ingredient[]; // ['peper', 'pepperoni']
  lang: Lang;
  variants: Variant[];
  country: Country;
  city: City;
}

type TranslatedPizzaTitles = `${Lang}_title`;
type TranslatedPizzaDescription = `${Lang}_description`;

export type TranslatedPizza = Omit<Pizza, 'title' | 'description'> &
  {
    [key in TranslatedPizzaTitles | TranslatedPizzaDescription]: string;
  };

export type TranslatedPizzaWithId = TranslatedPizza & {
  id: string;
};
