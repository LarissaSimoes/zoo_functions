const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando se retorna informações referentes aos elefantes conforme o argumento passado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('whatever')).toBeNull();
  });
});
