'use strict';

const config = require('config');
const eslint = require('gulp-eslint');
const gulp = require('gulp');

module.exports = function runLinting() {
    return gulp.src(config.get('build.linting.paths.shared'))
    .pipe(eslint({
        extends: 'airbnb',
        rules: {
            indent: [2, 4],
            strict: [2, 'global'],
        },
        ecmaFeatures: {
            modules: false,
        },
        env: {
            es6: true,
        },
    }))
    .pipe(eslint.format(config.get('build.linting.formatter')))
    .pipe(eslint.failAfterError());
};
