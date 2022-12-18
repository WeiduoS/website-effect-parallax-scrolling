const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const Dotenv = require('dotenv-webpack');
const { getStyleLoaders } = require("./utilities/style-loaders");

require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const imageInlineSizeLimit = 512

module.exports = {
    entry: {
        main: ["./src/index.tsx"],
    },
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        libraryTarget: 'umd',
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx|css)$/,
                enforce: "pre",
                exclude: [
                    /@babel(?:\/|\\{1,2})runtime/,
                ],
                loader: require.resolve('source-map-loader'),
            },
            {
                oneOf: [
                    {
                        test: [/\.avif$/],
                        type: 'asset',
                        mimetype: 'image/avif',
                        parser: {
                            dataUrlCondition: {
                                maxSize: imageInlineSizeLimit,
                            },
                        },
                        generator: {
                            filename: "static/[name]/[name][hash:8][ext][query]"
                        }
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        type: 'asset',
                        parser: {
                            dataUrlCondition: {
                                maxSize: imageInlineSizeLimit,
                            },
                        },
                        generator: {
                            filename: "static/[name]/[name][hash:8][ext][query]"
                        }
                    },
                    {
                        test: /\.svg$/,
                        use: [
                            {
                                loader: require.resolve('@svgr/webpack'),
                                options: {
                                    prettier: false,
                                    svgo: false,
                                    svgoConfig: {
                                        plugins: [{removeViewBox: false}],
                                    },
                                    titleProp: true,
                                    ref: true,
                                },
                            },
                            {
                                loader: require.resolve('url-loader'),
                                options: {
                                    name: 'static/media/[name].[hash].[ext]',
                                },
                            },
                        ],
                        issuer: {
                            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                        },
                    },
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app'),
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false,
                            sourceMaps: true
                        },
                    },
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app/dependencies'),
                                    {helpers: true},
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            sourceMaps: true,
                            inputSourceMap: true,
                        },
                    },
                    {
                        test: /\.css$/,
                        exclude: /\.module\.css$/,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            // sourceMap: true,
                            modules: {
                                mode: 'icss',
                            },
                        }),
                        sideEffects: true,
                    },
                    {
                        test: /\.module\.css$/,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: true,
                            modules: {
                                mode: "local",
                                auto: true,
                                exportGlobals: true,
                                localIdentName: "[path][name]--[hash:base64:5]--[local]",
                                localIdentContext: path.resolve(__dirname, "src"),
                                localIdentHashSalt: "my-custom-hash",
                                exportLocalsConvention: "dashes",
                                exportOnlyLocals: false,
                            },
                        }),
                    },
                    {
                        test: /\.(scss|sass)$/,
                        exclude: /\.module\.(scss|sass)$/,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: true,
                                modules: {
                                    mode: 'icss',
                                },
                            },
                            'sass-loader'
                        ),
                        sideEffects: true,
                    },
                    {
                        test: /\.module\.(scss|sass)$/,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: true,
                                modules: {
                                    mode: "local",
                                    auto: true,
                                    exportGlobals: true,
                                    localIdentName: "[path][name]--[hash:base64:5]--[local]",
                                    localIdentContext: path.resolve(__dirname, "src"),
                                    localIdentHashSalt: "my-custom-hash",
                                    exportLocalsConvention: "dashes",
                                    exportOnlyLocals: false,
                                },
                            },
                            'sass-loader'
                        ),
                    },
                    {
                        exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        type: 'asset/resource',
                    },
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.web.mjs', '.mjs', '.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json', '.web.jsx', '.jsx'],
        alias: {
            'react-native': 'react-native-web',
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public/favicon.ico", to: "[path][name].[hash][ext]" },
                { from: "public/logo192.png", to: "[path][name].[hash][ext]" },
                { from: "public/logo512.png", to: "[path][name].[hash][ext]" },
                { from: "public/manifest.json", to: "[path][name].[hash][ext]" },
                { from: "public/robots.txt", to: "[path][name].[hash][ext]" },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new HtmlWebpackTagsPlugin({
            tags: [],
            links: [
                {
                    path: 'manifest.json',
                    attributes: {
                        rel: 'manifest'
                    }
                },
                {
                    path: 'favicon.ico',
                    attributes: {
                        rel: 'icon'
                    }
                }
            ],
            append: false,
            hash: function(assetName, hash) {
                assetName = assetName.replace(/\.js$/, '.' + hash + '.js');
                assetName = assetName.replace(/\.css$/, '.' + hash + '.css');
                assetName = assetName.replace(/\.json$/, '.' + hash + '.json');
                assetName = assetName.replace(/\.ico$/, '.' + hash + '.ico');
                return assetName;
            }
        }),
        new ESLintPlugin({
            extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
            formatter: require.resolve('react-dev-utils/eslintFormatter'),
            eslintPath: require.resolve('eslint'),
            failOnError: true,
            context: path.resolve(__dirname, 'src'),
            cache: true,
            cacheLocation: path.resolve(__dirname, './node_modules/.cache/.eslintcache'),
            cwd: path.resolve(__dirname, 'src'),
            resolvePluginsRelativeTo: __dirname
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
        }),
        new Dotenv({
            path: './.env',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        allowedHosts: "all",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Authorization",
        }
    },
};
