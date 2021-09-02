export enum Ingredient {
  pizzaBase = 'pizzaBase',
  dough = 'dough',

  sauce = 'sauce',
  pestoSauce = 'pestoSauce',
  tomatoOrCreamSauce = 'tomatoOrCreamSauce',
  tomatoSauce = 'tomatoSauce',
  homemadeTomatoSauce = 'homemadeTomatoSauce',
  caesarSauce = 'caesarSauce',
  greenSauce = 'greenSauce',
  creamSauce = 'creamSauce',

  bacon = 'bacon',
  ham = 'ham',
  chicken = 'chicken',
  bakedChickenFillet = 'bakedChickenFillet',
  chickenFillet = 'chickenFillet',
  prosciutto = 'prosciutto',
  mincedSalsa = 'mincedSalsa',
  huntingSausages = 'huntingSausages',

  salami = 'salami',
  spicySalami = 'spicySalami',
  piquantSalami = 'piquantSalami',

  cheese = 'cheese',
  creamCheese = 'creamCheese',
  mozzarellaFresco = 'mozzarellaFresco',
  mozzarella = 'mozzarella',
  parmesan = 'parmesan',
  feta = 'feta',
  gorgonzola = 'gorgonzola',
  radometer = 'radometer',

  salad = 'salad',
  saladMix = 'saladMix',

  herb = 'herb',
  corn = 'corn',
  grilledEggplant = 'grilledEggplant',
  artichokes = 'artichokes',
  pear = 'pear',
  pineapple = 'pineapple',
  olives = 'olives',
  capers = 'capers',
  basil = 'basil',

  tomatoes = 'tomatoes',
  cherryTomatoConfit = 'cherryTomatoConfit',
  cherryTomatoes = 'cherryTomatoes',

  pepper = 'pepper',
  pepperoniPeppers = 'pepperoniPeppers',
  chiliPeppers = 'chiliPeppers',
  bellPepper = 'bellPepper',

  mushrooms = 'mushrooms',
  freshMushrooms = 'freshMushrooms',

  seafood = 'seafood',
  shrimp = 'shrimp',
  mussels = 'mussels',

  honey = 'honey',
}

/* eslint-disable */
export const UkToIngredient: Record<string, Ingredient> = {
  'основа': Ingredient.pizzaBase,
  'тісто': Ingredient.dough,

  'соус': Ingredient.sauce,
  'соус песто': Ingredient.pestoSauce,
  'соус(томатний/вершковий)': Ingredient.tomatoOrCreamSauce,
  'томатний соус': Ingredient.tomatoSauce,
  'домашній томатний соус': Ingredient.homemadeTomatoSauce,
  'соус цезаре': Ingredient.caesarSauce,
  'зелений соус': Ingredient.greenSauce,
  'вершковий соус': Ingredient.creamSauce,

  'бекон': Ingredient.bacon,
  'шинка': Ingredient.ham,
  'курка': Ingredient.chicken,
  'куряче філе': Ingredient.chickenFillet,
  'куряче філе печене': Ingredient.bakedChickenFillet,
  'м’ясний фарш сальсіча': Ingredient.mincedSalsa,
  'прошуто': Ingredient.prosciutto,
  'мисливські ковбаски': Ingredient.huntingSausages,

  'салямі': Ingredient.salami,
  'салямі пікантне': Ingredient.piquantSalami,
  'салямі піканте': Ingredient.piquantSalami,
  'гостре салямі': Ingredient.spicySalami,

  'сир': Ingredient.cheese,
  'крем-сир': Ingredient.creamCheese,
  'сир мацарелла': Ingredient.mozzarella,
  'сир моцарелла': Ingredient.mozzarella,
  'сир моцарела': Ingredient.mozzarella,
  'моцарела фреска': Ingredient.mozzarellaFresco,
  'моцарела': Ingredient.mozzarella,
  'сир пармезан': Ingredient.parmesan,
  'сири пармезан': Ingredient.parmesan,
  'пармезан': Ingredient.parmesan,
  'сир фета': Ingredient.feta,
  'фета': Ingredient.feta,
  'сири горгонзола': Ingredient.gorgonzola,
  'горгонзола': Ingredient.gorgonzola,
  'радомер': Ingredient.radometer,

  'салат': Ingredient.salad,
  'мікс-салат': Ingredient.saladMix,
  'салат мікс': Ingredient.saladMix,

  'зелень': Ingredient.herb,
  'кукурудза': Ingredient.corn,
  'баклажани гриль': Ingredient.grilledEggplant,
  'артишоки': Ingredient.artichokes,
  'груша': Ingredient.pear,
  'ананаси': Ingredient.pineapple,
  'ананас': Ingredient.pineapple,
  'оливки': Ingredient.olives,
  'маслини': Ingredient.olives,
  'каперси': Ingredient.capers,
  'базилік': Ingredient.basil,

  'помідора': Ingredient.tomatoes,
  'помідори': Ingredient.tomatoes,
  'конфі з помідорів чері': Ingredient.cherryTomatoConfit,
  'помідори чері': Ingredient.cherryTomatoes,

  'перець': Ingredient.pepper,
  'перець пепероні': Ingredient.pepperoniPeppers,
  'перець болгарський': Ingredient.bellPepper,
  'перці болгарський': Ingredient.bellPepper,
  'перець чилі': Ingredient.chiliPeppers,
  'чілі': Ingredient.chiliPeppers,

  'гриби': Ingredient.mushrooms,
  'печериці': Ingredient.mushrooms,
  'печериці свіжі': Ingredient.freshMushrooms,

  'морепродукти': Ingredient.seafood,
  'креветки': Ingredient.shrimp,
  'мідії': Ingredient.mussels,

  'мед': Ingredient.honey,
};
/* eslint-enable */
