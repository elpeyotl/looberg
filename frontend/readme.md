# Frontend development guide

We use webpack for compiling javascript and css for the frontend.
We usualy usse SASS for CSS, plain vanilla JS and Vue.js.
You can use vue single file components.
ES6 Javascript is supported and transpiled for older browsers with babel

Install all dependencies
```
npm install 
```

Configure local.config.js file to your project setup
```
const config = {
     entryFileUrl: '../DistributionPackages/netv_titoni_site/Resources/Private/js/webpack_entry.js',
     outputFileUrl: '../DistributionPackages/netv_titoni_site/Resources/Public/js/',
     outputFileName: 'bundle.min.js',
     outputCSSFileUrl: '../css/bundle.min.css',
     localDevURL: 'http://titoni.test/de'
 }
```

Development (Runs browsersync refreshes page on css and js changes)
```
npm run dev
```


Build (webpack --mode production)
```
npm run build
```

Node version used: v8.15.1

Webpack docs: https://webpack.js.org/

# frontendDevelopmentWebpack
