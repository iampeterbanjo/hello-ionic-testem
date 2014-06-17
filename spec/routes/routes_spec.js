describe('routes in app', function () {
	beforeEach(function () {
		angular.mock.module('starter')
	})

	beforeEach(inject(function ($state, $urlRouter) {
		this.$state = $state
		this.$urlRouter = $urlRouter
	}))

	// Playlists

	it('should have a route to playlists', function () {
		expect(this.$state.get('app.playlists').url).toBe('/playlists')
	})

	it('should have playlists served by PlaylistsCtrl', function () {
		expect(this.$state.get('app.playlists').views.menuContent.controller).toBe('PlaylistsCtrl')
	})

	// Playlist details

	it('should have a route to playlist details', function () {
		expect(this.$state.get('app.single').url).toBe('/playlists/:playlistId')
	})

	it('should have playlist details served by PlaylistsCtrl', function () {
		expect(this.$state.get('app.single').views.menuContent.controller).toBe('PlaylistCtrl')
	})

	// default route

	// TODO
	//it('should default to the playlists route', function () {
	//	expect(this.$urlRouter)
	//})
})