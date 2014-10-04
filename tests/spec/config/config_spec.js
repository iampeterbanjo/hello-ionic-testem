describe('config spec', function () {

	beforeEach(angular.mock.module('starter.config'))

	beforeEach(inject(function (appRoutes, appUrls, appMessages) {
		this.appRoutes = appRoutes
		this.appUrls = appUrls
		this.appMessages = appMessages
	}))

	// appRoutes
	it('should have appRoutes', function () {
		expect(this.appRoutes).toBeDefined()
	})

	it('should have appUrls', function () {
		expect(this.appUrls).toBeDefined()
	})

	it('should have appMessages', function () {
		expect(this.appMessages).toBeDefined()
	})
})