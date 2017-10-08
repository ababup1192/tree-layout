module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },

    module: {
        rules: [{
                test: /\.(css|scss|sass)$/,
                use: [
                    'style',
                    'css',
                    'sass',
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'file?name=[name].[ext]',
            },
        ],
    },

    resolveLoader: {
        moduleExtensions: ["-loader"]
    },

    devServer: {
        inline: true,
        stats: {
            colors: true
        },
    },

};