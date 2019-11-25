const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./local.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: {
        main:[
            path.resolve(__dirname, config.entryFileUrl)
        ]
    },
    output: {
        filename: config.outputJsFilePath,
        chunkFilename: 'Js/[name].js',
        path: path.resolve(__dirname, config.outputGeneratedDataPath),
        publicPath: config.codeSplittingUrl
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        modules: [
            path.resolve(__dirname, "node_modules")
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:  [
                            ["@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    modules: false,
                                    corejs: '2.6.9',
                                }
                            ]
                        ],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                                plugins: (loader) => [
                                require('postcss-preset-env')(),
                                require('cssnano')(),
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: config.outputAssetsPath,
                            name: '[name]-[hash].[ext]',
                            publicPath: '../' + config.outputAssetsPath
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: config.outputFontsPath,
                            name: '[name].[ext]',
                            publicPath: '../' + config.outputFontsPath
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Promise: 'es6-promise-promise', // works as expected
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[name].css',
            ignoreOrder: true, // Enable to remove warnings about conflicting order
            filename: config.outputCSSFilePath
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: config.localDevURL
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
    ],
};