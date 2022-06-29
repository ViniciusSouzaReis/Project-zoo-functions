const { handlerElephants, computeData, averageAge, getElephants } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função getElephants tem o retorno esperado', () => {
    const expected = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    expect(getElephants()).toEqual(expected);
  });

  it('Verifica se a função averageAge com o paramentro getElephants() retorna o valor 10.5', () => {
    expect(averageAge(getElephants())).toBe(10.5);
  });

  it('Verifica o retorno da função computeData com diferentes parametros', () => {
    expect(computeData('names', getElephants())).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(computeData('count', getElephants())).toBe(4);
    expect(computeData('averageAge', getElephants())).toBe(10.5);
    expect(computeData()).toBeNull();
  });

  it('Verifica o retorno da função handlerElephants com diferentes parametros', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('name')).toEqual('elephants');
  });
});
