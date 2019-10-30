# vasco.dev website

[![Netlify Status](https://api.netlify.com/api/v1/badges/28d7eaab-f2b1-4316-9bef-bbaaeeb5f080/deploy-status)](https://app.netlify.com/sites/vascodev/deploys)

## Directory structure

- **src**: contains all source code (html, scss and js)
- **static**: contains all static content (will be copied into the **dist** root directory)
- **assets**: contains all assets (will be copied into the **dist** root directory)
- **dist** will contain the compiled version of the project (after gulp build)

## Install dependencies

```
$ npm install
```

## Build

```
$ gulp
```

## Watch

```
$ gulp watch
```

## Push subtree to production server

```
git subtree split --prefix dist master
git push dokku {0fbc49258e96ac4c187ec374e6267e529107f997 (from the above line)}:master --force
```

## Included libraries

- [Babel](https://babeljs.io)
- [Bootstrap](https://getbootstrap.com)
- [jQuery](https://jquery.com)
- [Fontawesome](https://fontawesome.com/?from=io)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Browser-sync](https://www.browsersync.io)
- [Gulp with scss support, minify (css, html, js and images) and source concatenation](https://www.browsersync.io)
- [Cookie disclaimer](https://github.com/Wruczek/Bootstrap-Cookie-Alert)
- [Navmenu smooth scrolling]
- [Google analytics]
