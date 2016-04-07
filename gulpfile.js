//PostCSS related
var gulp = require("gulp");
var postcss = require("gulp-postcss");
var postcssImport = require("postcss-import");
var autoprefixer = require("autoprefixer");
var simpleVars = require("postcss-simple-vars");
var mixins = require("postcss-mixins");
var colorFunction = require("postcss-color-function"); 
var nested = require("postcss-nested");
var cssnano = require("cssnano");
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");
var stylelinterConfig = require("./.stylelintrc");
var sourcemaps = require("gulp-sourcemaps");
var gutil = require("gutil");
var notify = require("gulp-notify");

// Lint the styles
gulp.task("lint-styles", function() {
    return gulp.src("preCSS/**/*.css")
    .pipe(postcss([
        stylelint(stylelinterConfig),
        reporter({
            clearMessages: true
        }),
    ]));
});

// Create the styles
gulp.task("styles", ["lint-styles"], function () {
    var processors = [
        postcssImport({glob: true}),
        mixins,
        simpleVars,
        colorFunction(),
        nested,
        autoprefixer({ browsers: ["last 2 version", "safari 5", "opera 12.1", "ios 6", "android 2.3"] }),
        cssnano
    ];
    return gulp.src("preCSS/styles.css")
    // start Sourcemaps
    .pipe(sourcemaps.init())
    // We always want PostCSS to run
    .pipe(postcss(processors).on("error", gutil.log))
    // Write a source map into the CSS at this point
    .pipe(sourcemaps.write())
    // Set the destination for the CSS file
    .pipe(gulp.dest("./build"))
    // If in DEV environment, notify user that styles have been compiled
    .pipe(notify("Yo Mofo, check dem styles!!!")); 
});

gulp.task("watch", function () {
    gulp.watch("preCSS/*.css", ["styles"]);
});

gulp.task("default", ["styles", "watch"]);
