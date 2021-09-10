import { PizzasParser } from '../types/parser';

interface Constructable<T> {
  new (...args: any): T;
}

export const pizzasParserTestSuit = (Parser: Constructable<PizzasParser>) => {
  describe('parsePizza', () => {
    let parser: PizzasParser;

    beforeEach(() => {
      parser = new Parser();
    });

    test('must return a pizza array', async () => {
      const pizzas = await parser.parsePizzas();

      expect(pizzas).toBeInstanceOf(Array);
      pizzas.forEach((pizza) => {
        expect(typeof pizza.title).toBe('string');
        expect(typeof pizza.description).toBe('string');

        expect(typeof pizza.link).toBe('string');
        expect(typeof pizza.image).toBe('string');

        expect(typeof pizza.lang).toBe('string');
        expect(typeof pizza.country).toBe('string');
        expect(typeof pizza.city).toBe('string');

        expect(pizza.ingredients).toBeInstanceOf(Array);
        pizza.ingredients.forEach((ing) => expect(ing).not.toBeUndefined());

        expect(pizza.variants).toBeInstanceOf(Array);
        pizza.variants.forEach((variant) => {
          expect(typeof variant.price).toBe('number');
          expect(variant.size).not.toBeNaN();

          expect(typeof variant.size).toBe('number');
          expect(variant.size).not.toBeNaN();

          expect(typeof variant.weight).toBe('number');
          expect(variant.weight).not.toBeNaN();
        });
      });

      expect(pizzas[0]).not.toBe(undefined);
      expect(pizzas[0].title).not.toBe(undefined);
    });
  });
};
