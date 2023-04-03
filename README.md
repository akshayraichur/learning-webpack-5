src → all the code

dist → all the static assets

One of the first modules to install

```jsx
npm i -D webpack webpack-cli
// as a dev dependency
```

to setup for production just an example (this is just an initial step, further more configs will be there)

```jsx
"build": "webpack --mode production"
```

for styling we need to install these modules

```jsx
npm i -D sass style-loader sass-loader css-loader
```

for dynamically creating HTML files

```jsx
npm i -D html-webpack-plugin

// add one more property in module.exports called plugins

const HtmlWebpackPlugin = require("html-webpack-plugin");

{
	plugins: [new HtmlWebpackPlugin({
			title: 'Webpack Tutorial',
			filename: 'index.html'
		})
	]
}
```

for development

```jsx
// in package.json file
"dev": "webpack serve"
```

for adding support for code that is backward compatible we can use babel

```jsx
npm i -D babel-loader @babel/core @babel/preset-env
```
