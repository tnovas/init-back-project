import services from '../services';

describe('Test', () => {
  it('Is OK', () => {
    const msg = { say: 'hello world' };

    expect(msg).toEqual({ say: 'hello world' })
  });
})