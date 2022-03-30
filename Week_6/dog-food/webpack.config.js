const path = require('path'); //для того чтобы превратить относительный путь в абсолютный мы будем использовать пакет path
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'), //точка входа в наше приложение содержит абсолютный путь к index.js
    output: {
        path: path.resolve(__dirname, 'dist'), //путь куда будет собираться наш проект
        filename: 'main.js', // имя нашего бандла
    },
    mode: 'development', // по умолчанию webpack миницифирует скрипты, чтобы это избежать меняем режим
    //Нужно помочь вебпаку научиться работать с jsx и tsx файлами для этого используют ts loader
    module: {
        rules: [
            // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.jsx?$/,
                // при обработке этих файлов нужно использовать babel-loader
                use: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //указываем файлы с которыми будет работать webpack
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true, // сайт будет открываться сам при запуске npm run dev
        hot: true,
    },
};
