npm init -y
npm i -D webpack
npm i -D webpack-cli
npm i -D dev-server
npm i -D webpack
npm i html-webpack-plugin
npm i -D babel-loader style-loader css-loader
npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D @babel/plugin-transform-runtime
npm i -D @babel/plugin-proposal-class-properties
npm install -D react-router-dom
npm i react react-dom
echo -e "{
    \"presets\": [\"@babel/preset-env\", \"@babel/preset-react\"],
    \"plugins\": [\"@babel/plugin-proposal-class-properties\", \"@babel/plugin-transform-runtime\"]
}" >> .babelrc
mkdir public
mkdir src
mkdir config
cd config
echo -e "const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true, //serve a previous page on a 404 error
  static: path.resolve('src'), // location of the source code
  port: 8080, // use this port for the server
  hot: true, // refresh the browser when changes are saved
  open: true, // open the project in the browser when the server starts
  host: '0.0.0.0', // make server accessible externally
};

config.devtool = 'inline-source-map'; // a tool to find errors in the compiled code, but show them against the source code for easier debugging

module.exports = config;" >> webpack.config.dev.js
echo -e "const config = require('./webpack.config.js');

config.mode = 'production';
module.exports = config;" >> webpack.config.production.js
echo -e "const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); // the root of your project
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'); // the root of the frontend, i.e. html file

const config = {
  entry: [path.resolve(__dirname, '../src/index.js')], // the main JavaScript file of the project
  output: {
    // instructions for compiling the code
    path: path.resolve(__dirname, './dist'), // the file where the compiled code should go
    filename: 'bundle.js', // the file name of the compiled code
    publicPath: '/', // specifies the base path for all the assets within your application.
  },
  mode: 'development', // tells webpack to use its built-in optimizations according to the mode
  resolve: {
    // instructions on how to resolve modules
    modules: [path.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
  },
  performance: {
    // notifies you if assets and entry points exceed a specific file limit
    hints: false,
  },
  plugins: [
    // plugins we are using to help with compiling
    new HtmlWebpackPlugin({
      // used to add the JavaScript code to the HTML
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
    }),
  ],
  module: {
    // helpers we want webpack to use
    rules: [
      // specific instructions for each helper
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, // transpile JavaScript files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // transpile css files
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      }, // transpile image files
    ],
  },
};

module.exports = config;" >> webpack.config.js
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
cd ..
code .