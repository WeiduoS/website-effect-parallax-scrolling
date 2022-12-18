const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.getStyleLoaders = function(cssLoaderOptions, preProcessor) {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: require.resolve('css-loader'),
            options: cssLoaderOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    config: false,
                    plugins:
                        [
                            'postcss-flexbugs-fixes',
                            [
                                'postcss-preset-env',
                                {
                                    autoprefixer: {
                                        flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                },
                            ],
                            'postcss-normalize',
                        ]
                },
                sourceMap: true,
            },
        },

        preProcessor && {
            loader: require.resolve('resolve-url-loader'),
            options: {
                sourceMap: true,
                // root: path.resolve(__dirname, "src"),
            },
        },
        preProcessor && {
            loader: require.resolve(preProcessor),
            options: {
                sourceMap: true,
            },
        },
    ]
    return loaders.filter(Boolean)
}
