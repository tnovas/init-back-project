import Services from 'src/domain/services';

jest.mock('src/apis', () => {
  return jest.fn().mockImplementation(() => {
    return { get: () => 'test' };
  });
});

describe('Test', () => {
  it('Is OK', () => {
  	// Arrange
  	const msgApi = 'test';
    const msg = `service ${msgApi}`;

    // Act
    let services = new Services().get();

    // Assert
    expect(services).toEqual(msg);
  });
})