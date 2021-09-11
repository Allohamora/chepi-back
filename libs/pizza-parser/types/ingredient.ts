export enum Ingredient {
  pizzaBase = 'pizzaBase',
  dough = 'dough',

  cream = 'cream',
  truffleOil = 'truffleOil',
  balsamicCream = 'balsamicCream',

  sauce = 'sauce',
  pestoSauce = 'pestoSauce',
  tomatoOrCreamSauce = 'tomatoOrCreamSauce',
  tomatoSauce = 'tomatoSauce',
  homemadeTomatoSauce = 'homemadeTomatoSauce',
  caesarSauce = 'caesarSauce',
  greenSauce = 'greenSauce',
  creamSauce = 'creamSauce',
  barbecueSauce = 'barbecueSauce',
  whiteSauce = 'whiteSauce',
  basilSauce = 'basilSauce',
  spinachCreamSauce = 'spinachCreamSauce',
  bechamelSauce = 'bechamelSauce',
  soySauce = 'soySauce',
  brandedSpinachCreamSauce = 'brandedSpinachCreamSauce',
  brandedPumpkinSauce = 'brandedPumpkinSauce',
  pepperoniSauce = 'pepperoniSauce',
  mayonnaise = 'mayonnaise',

  bacon = 'bacon',
  porkFilletJosper = 'porkFilletJosper',
  ham = 'ham',
  prosciutto = 'prosciutto',
  prosciuttoCrudo = 'prosciuttoCrudo',
  mincedSalsiccia = 'mincedSalsiccia',
  huntingSausages = 'huntingSausages',
  veal = 'veal',
  bavarianSausages = 'bavarianSausages',
  sausage = 'sausage',

  eggs = 'eggs',
  bakedEggs = 'bakedEggs',
  quailEggs = 'quailEggs',

  chicken = 'chicken',
  smokedChicken = 'smokedChicken',
  chickenFillet = 'chickenFillet',
  chickenFilletJosper = 'chickenFilletJosper',
  bakedChickenFillet = 'bakedChickenFillet',
  smokedChickenFillet = 'smokedChickenFillet',

  salami = 'salami',
  salamiNapoli = 'salamiNapoli',
  spicySalami = 'spicySalami',
  piquantSalami = 'piquantSalami',
  pepperoni = 'pepperoni',

  cheese = 'cheese',
  creamCheese = 'creamCheese',
  mozzarellaFresca = 'mozzarellaFresca',
  mozzarella = 'mozzarella',
  parmesan = 'parmesan',
  feta = 'feta',
  gorgonzola = 'gorgonzola',
  radomer = 'radomer',
  cheddar = 'cheddar',
  dorBlue = 'dorBlue',
  hardCheese = 'hardCheese',
  ricottaCheese = 'ricottaCheese',
  gouda = 'gouda',
  roquefort = 'roquefort',
  pecorinoRomano = 'pecorinoRomano',
  scamorza = 'scamorza',
  provolone = 'provolone',

  salad = 'salad',
  saladMix = 'saladMix',
  saladMixBasilPestoSauce = 'saladMixBasilPestoSauce',
  arugulaSalad = 'arugulaSalad',
  icebergLettuce = 'icebergLettuce',
  lolloRosso = 'lolloRosso',
  crunchySalad = 'crunchySalad',

  herb = 'herb',
  arugula = 'arugula',
  italianHerbs = 'italianHerbs',
  onion = 'onion',
  greenOnion = 'greenOnion',
  blueOnion = 'blueOnion',
  redOnion = 'redOnion',
  pickledRedOnions = 'pickledRedOnions',
  parsley = 'parsley',
  corn = 'corn',
  sweetCorn = 'sweetCorn',
  eggplant = 'eggplant',
  grilledEggplant = 'grilledEggplant',
  pickledZucchini = 'pickledZucchini',
  artichokes = 'artichokes',
  blackOlives = 'blackOlives',
  greenOlives = 'greenOlives',
  capers = 'capers',
  basil = 'basil',
  pickledCucumbers = 'pickledCucumbers',
  spinach = 'spinach',
  broccoli = 'broccoli',
  gherkin = 'gherkin',
  zucchini = 'zucchini',
  grilledVegetables = 'grilledVegetables',
  garlic = 'garlic',
  oregano = 'oregano',
  fig = 'fig',
  avocadoHass = 'avocadoHass',
  pumpkinSeeds = 'pumpkinSeeds',
  bakedBeets = 'bakedBeets',

  pineapple = 'pineapple',
  pear = 'pear',
  orange = 'orange',
  prunes = 'prunes',

  nuts = 'nuts',
  walnut = 'walnut',
  cashew = 'cashew',
  sesame = 'sesame',

  tomatoes = 'tomatoes',
  cherryTomatoConfit = 'cherryTomatoConfit',
  cherryTomatoes = 'cherryTomatoes',
  sunDriedTomatoes = 'sunDriedTomatoes',

  pepper = 'pepper',
  rotundaPepper = 'rotundaPepper',
  pepperoniPepper = 'pepperoniPepper',
  chiliPepper = 'chiliPepper',
  bellPepper = 'bellPepper',
  bakedPepper = 'bakedPepper',
  hotPepper = 'hotPepper',
  sweetPepper = 'sweetPepper',
  redPepper = 'redPepper',

  mushrooms = 'mushrooms',
  freshMushrooms = 'freshMushrooms',
  champignons = 'champignons',
  freshBakedChampignons = 'freshBakedChampignons',
  whiteMushrooms = 'whiteMushrooms',
  chanterelles = 'chanterelles',

  tunaInOliveOil = 'tunaInOliveOil',
  cannedTuna = 'cannedTuna',
  salmonFillet = 'salmonFillet',
  saltedSalmonFillet = 'saltedSalmonFillet',
  coldSmokedSalmon = 'coldSmokedSalmon',
  redCaviar = 'redCaviar',

  seafood = 'seafood',
  shrimps = 'shrimps',
  squid = 'squid',
  octopus = 'octopus',
  mussels = 'mussels',
  crabSticks = 'crabSticks',

  honey = 'honey',
}

/* eslint-disable */
// prettier-ignore
export const UkToIngredient: Record<string, Ingredient> = {
  'основа': Ingredient.pizzaBase,
  'тісто': Ingredient.dough,

  'вершки': Ingredient.cream,
  'верш��и': Ingredient.cream,
  'трюфельна олія': Ingredient.truffleOil,
  'крем бальзамік': Ingredient.balsamicCream,

  'соус': Ingredient.sauce,
  'coyc': Ingredient.sauce,
  'соус песто': Ingredient.pestoSauce,
  'соус(томатний/вершковий)': Ingredient.tomatoOrCreamSauce,
  'томатний соус': Ingredient.tomatoSauce,
  'соус pomodoro': Ingredient.tomatoSauce,
  'соус томатний': Ingredient.tomatoSauce,
  'домашній томатний соус': Ingredient.homemadeTomatoSauce,
  'соус "Цезар"': Ingredient.caesarSauce,
  'соус цезар': Ingredient.caesarSauce,
  'соус цезаре': Ingredient.caesarSauce,
  'зелений соус': Ingredient.greenSauce,
  'соус вершковий': Ingredient.creamSauce,
  'вершковий соус': Ingredient.creamSauce,
  'соус bbq': Ingredient.barbecueSauce,
  'соус барбекю': Ingredient.barbecueSauce,
  'білий coyc': Ingredient.whiteSauce,
  'білий соус': Ingredient.whiteSauce,
  'соус шпинатно-вершковий': Ingredient.spinachCreamSauce,
  'базиліковий соус': Ingredient.basilSauce,
  'соус бешамель': Ingredient.bechamelSauce,
  'соус бешемель': Ingredient.bechamelSauce,
  'соєвий соус': Ingredient.soySauce,
  'фірмовий крем-соус зі шпинату': Ingredient.brandedSpinachCreamSauce,
  'фірмовий соус із гарбуза': Ingredient.brandedPumpkinSauce,
  'соус pepperoni': Ingredient.pepperoniSauce,
  'майонез': Ingredient.mayonnaise,

  'бекон': Ingredient.bacon,
  'філе свинини josper': Ingredient.porkFilletJosper,
  'шинка': Ingredient.ham,
  'м’ясний фарш сальсіча': Ingredient.mincedSalsiccia,
  'прошуто': Ingredient.prosciutto,
  'прошутто': Ingredient.prosciutto,
  'прошутто крудо': Ingredient.prosciuttoCrudo,
  'ковбаски мисливські': Ingredient.huntingSausages,
  'мисливські ковбаски': Ingredient.huntingSausages,
  'телятина': Ingredient.veal,
  'баварські ковбаски': Ingredient.bavarianSausages,
  'ковбаски баварські': Ingredient.bavarianSausages,
  'ковбаса': Ingredient.sausage,

  'яйце': Ingredient.eggs,
  'яйця': Ingredient.eggs,
  'запечене яйце': Ingredient.bakedEggs,
  'яйце перепелине': Ingredient.quailEggs,
  'перепелині яйця': Ingredient.quailEggs,

  'курка': Ingredient.chicken,
  'куряче м\'ясо': Ingredient.chicken,
  'копчена курка': Ingredient.smokedChicken,
  'куряче філе': Ingredient.chickenFillet,
  'філе куряче josper': Ingredient.chickenFilletJosper,
  'філе запечене': Ingredient.bakedChickenFillet,
  'куряче філе печене': Ingredient.bakedChickenFillet,
  'філе курки копчене': Ingredient.smokedChickenFillet,

  'салямі': Ingredient.salami,
  'ковбаса салямі': Ingredient.salami,
  'салямі наполі': Ingredient.salamiNapoli,
  'салямі пікантне': Ingredient.piquantSalami,
  'салямі піканте': Ingredient.piquantSalami,
  'гостре салямі': Ingredient.spicySalami,
  'пепероні': Ingredient.pepperoni,
  'ковбаса пепероні': Ingredient.pepperoni,

  'сир': Ingredient.cheese,
  'крем-сир': Ingredient.creamCheese,
  'сир мацарелла': Ingredient.mozzarella,
  'сир моцарелла': Ingredient.mozzarella,
  'сир моцарела': Ingredient.mozzarella,
  'моцарелла': Ingredient.mozzarella,
  'моцарела': Ingredient.mozzarella,
  'моцарела фреска': Ingredient.mozzarellaFresca,
  'сир пармезан': Ingredient.parmesan,
  'сири пармезан': Ingredient.parmesan,
  'пармезан': Ingredient.parmesan,
  'сир фета': Ingredient.feta,
  'фета': Ingredient.feta,
  'сири горгонзола': Ingredient.gorgonzola,
  'горгонзола': Ingredient.gorgonzola,
  'радомер': Ingredient.radomer,
  'чеддер слайс': Ingredient.cheddar,
  'дорблю': Ingredient.dorBlue,
  'сир дор блю': Ingredient.dorBlue,
  'дор блю': Ingredient.dorBlue,
  'сир дорблю': Ingredient.dorBlue,
  'сир твердий': Ingredient.hardCheese,
  'рікота': Ingredient.ricottaCheese,
  'сир рікота': Ingredient.ricottaCheese,
  'гауда': Ingredient.gouda,
  'рокфор': Ingredient.roquefort,
  'пекоріно романо': Ingredient.pecorinoRomano,
  'скаморца': Ingredient.scamorza,
  'проволоне': Ingredient.provolone,

  'салат': Ingredient.salad,
  'мікс салатів': Ingredient.saladMix,
  'мікс салатів заправлені базиліковим соусом песто': Ingredient.saladMixBasilPestoSauce,
  'мікс-салат': Ingredient.saladMix,
  'салат мікс': Ingredient.saladMix,
  'салат рукола': Ingredient.arugulaSalad,
  'салат айсберг': Ingredient.icebergLettuce,
  'лолло росса': Ingredient.lolloRosso,
  'хрусткий салат': Ingredient.crunchySalad,

  'зелень': Ingredient.herb,
  'рукола': Ingredient.arugula,
  'італійські трави': Ingredient.italianHerbs,
  'цибуля': Ingredient.onion,
  'зелена цибуля': Ingredient.greenOnion,
  'цибуля ріпчаста': Ingredient.onion,
  'цибуля синя': Ingredient.blueOnion,
  'червона цибуля': Ingredient.redOnion,
  'цибуля червона': Ingredient.redOnion,
  'цибуля червона маринована': Ingredient.pickledRedOnions,
  'петрушка': Ingredient.parsley,
  'кукурудза': Ingredient.corn,
  'кукурудза солодка': Ingredient.sweetCorn,
  'баклажан': Ingredient.eggplant,
  'баклажани гриль': Ingredient.grilledEggplant,
  'мариновані цукіні': Ingredient.pickledZucchini,
  'артишоки': Ingredient.artichokes,
  'оливки': Ingredient.greenOlives,
  'маслини': Ingredient.blackOlives,
  'масліни': Ingredient.blackOlives,
  'каперси': Ingredient.capers,
  'базилік': Ingredient.basil,
  'огірки мариновані': Ingredient.pickledCucumbers,
  'шпинат': Ingredient.spinach,
  'броколі': Ingredient.broccoli,
  'огірок корнішон': Ingredient.gherkin,
  'цукіні': Ingredient.zucchini,
  'гриль овочі': Ingredient.grilledVegetables,
  'часник': Ingredient.garlic,
  'орегано': Ingredient.oregano,
  'інжир': Ingredient.fig,
  'авокадо хасс': Ingredient.avocadoHass,
  'насіння гарбуза': Ingredient.pumpkinSeeds,
  'запечений бурячок': Ingredient.bakedBeets,

  'груша': Ingredient.pear,
  'ананаси': Ingredient.pineapple,
  'ананас': Ingredient.pineapple,
  'апельсин': Ingredient.orange,
  'чорнослив': Ingredient.prunes,

  'горіхи': Ingredient.nuts,
  'горіхи кешью': Ingredient.cashew,
  'кунжут': Ingredient.sesame,
  'волоський горіх': Ingredient.walnut,

  'помідора': Ingredient.tomatoes,
  'томати': Ingredient.tomatoes,
  'помідор': Ingredient.tomatoes,
  'помідори': Ingredient.tomatoes,
  'конфі з помідорів чері': Ingredient.cherryTomatoConfit,
  'томати черрі': Ingredient.cherryTomatoes,
  'помідори чері': Ingredient.cherryTomatoes,
  'томати в\'ялені': Ingredient.sunDriedTomatoes,
  'в\'ялені томати': Ingredient.sunDriedTomatoes,
  'помідори в’ялені': Ingredient.sunDriedTomatoes,

  'перець': Ingredient.pepper,
  'ротунда': Ingredient.rotundaPepper,
  'перець пепероні': Ingredient.pepperoniPepper,
  'болгарський перець': Ingredient.bellPepper,
  'перець болгарський': Ingredient.bellPepper,
  'перці болгарський': Ingredient.bellPepper,
  'перець чилі': Ingredient.chiliPepper,
  'чілі': Ingredient.chiliPepper,
  'запечений перець': Ingredient.bakedPepper,
  'гострий перець': Ingredient.hotPepper,
  'солодкий перець': Ingredient.sweetPepper,
  'перець солодкий': Ingredient.sweetPepper,
  'червоний перець': Ingredient.redPepper,

  'гриби': Ingredient.mushrooms,
  'шампіньйони': Ingredient.champignons,
  'свіжі запечені шампіньйони': Ingredient.freshBakedChampignons,
  'печериці': Ingredient.mushrooms,
  'печериці свіжі': Ingredient.freshMushrooms,
  'свіжі гриби': Ingredient.freshMushrooms,
  'білі гриби': Ingredient.whiteMushrooms,
  'лисички': Ingredient.chanterelles,

  'тунець в оливковій олії': Ingredient.tunaInOliveOil,
  'тунець консервований': Ingredient.cannedTuna,
  'філе лосося': Ingredient.salmonFillet,
  'філе лосося солене': Ingredient.saltedSalmonFillet,
  'лосось холодного копчення': Ingredient.coldSmokedSalmon,
  'ікра червона': Ingredient.redCaviar,

  'морепродукти': Ingredient.seafood,
  'креветка': Ingredient.shrimps,
  'креветки': Ingredient.shrimps,
  'мідії': Ingredient.mussels,
  'кальмар': Ingredient.squid,
  'кальмари': Ingredient.squid,
  'восьминіг': Ingredient.octopus,
  'крабові палички': Ingredient.crabSticks,

  'мед': Ingredient.honey,
};
/* eslint-enable */
