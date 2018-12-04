import Services from 'src/services';

jest.mock('src/infrastructure', () => {
  return jest.fn().mockImplementation(() => {
    return { get: () => 'test' };
  });
});

describe('Test', () => {
  it('Is OK', () => {
  	// Arrange
  	const msgInfra = 'test';
    const msg = `services ${msgInfra}`;

    // Act
    let services = new Services().get();

    // Assert
    expect(services).toEqual(msg);
  });
})