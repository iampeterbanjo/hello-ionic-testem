describe('routes in app', function () {
	beforeEach(function () {
		angular.mock.module('starter')
	})

	beforeEach(inject(function ($state) {
		this.$state = $state
	}))

	it('should have a route to accounts', function () {
		expect(this.$state.get('tab.account').url).toBe('/account')
	})
})