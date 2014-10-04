Ionic/Testem App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS and using Testem for tests. The spec and spec-e2e tests are imported from https://github.com/linemanjs/lineman-angular-template.git so they don't pass - yet.

## Using this project

```bash
// quick start
$ git clone https://this-repo.git
$ cd /path/to/this/repo/hello-ionic-testem
$ sudo npm install -g cordova ionic gulp testem
$ npm install
$ ionic run
$ testem

// use your own repository
git remote add origin git@somebucketorhub.org:yourcoolname/repo.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push -u origin --tags # pushes up any tags
```

## Development

Run the following (in separate terminals if necessary)

- `npm install` *installs project dependencies using npm (requires nodejs installed)*
- `start-selenium` *starts a selenium server that Protractor can use to run end-to-end tests*
- `ionic serve 9999` or `cd www/ && python -m SimpleHTTPServer 9999` or `cd www/ && python -m http.server` *starts a web server for the static files which is needed by the end-to-end tests*
- `grunt watch:dev` *sass, lints, concats and livereload*
- `grunt watch:e2e` *lints, concats and runs end-to-end tests*
- `grunt watch:spec` *lints, concats for unit tests*
- `testem` *runs unit tests*

### Using livereload
- Install the [browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

## Notes

You can use `ionic serve` to start a web server with livereload

## Issues
Cannot find chrome Driver on grunt protractor. Run `./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update`

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```

## Useful References

Ionic [Getting Started](http://ionicframework.com/getting-started) page.
Testem [Getting Started](https://github.com/airportyh/testem) page.