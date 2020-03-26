describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Hi.')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('About').click();
		cy.url().should('include', '/hello-world');
		cy.contains('h2', 'Hi, my name is Dmitrijs')
	});
});