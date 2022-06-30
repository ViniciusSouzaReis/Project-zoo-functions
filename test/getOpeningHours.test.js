const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa as variações de paramentos da função getOpeningHours', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual('The zoo is open');
    // expect(getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
    // expect(getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    // expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
    // expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow(new Error('The minutes should represent a number'));
  });
});
