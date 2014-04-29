Ionic/Testem App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS and using Testem for tests. The spec and spec-e2e tests are imported from https://github.com/linemanjs/lineman-angular-template.git so they don't pass - yet.

## Using this project

```bash
$ git clone https://this-repo.git
$ sudo npm install -g cordova ionic gulp testem
$ npm install
$ ionic run
$ testem
```

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