const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica o retorno da função handlerElephants com diferentes parametros', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('a')).toBeNull();
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
