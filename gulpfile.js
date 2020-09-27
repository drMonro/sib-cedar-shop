const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const plumber = require(`gulp-plumber`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const objectFit = require(`postcss-object-fit-images`);
const server = require(`browser-sync`).create();
const rename = require(`gulp-rename`);
const del = require(`del`);
const uglify = require(`gulp-uglify`);
const imagemin = require(`gulp-imagemin`);
const webp = require("gulp-webp");
const babel = require(`rollup-plugin-babel`);
// const rollup = require(`gulp-better-rollup`);
const nodeResolve = require(`rollup-plugin-node-resolve`);
const sourcemaps = require(`gulp-sourcemaps`);
const commonjs = require(`rollup-plugin-commonjs`);
const svgstore = require(`gulp-svgstore`);
const pug = require(`gulp-pug`);
const data = require(`gulp-data`);
const fs = require(`fs`);
const mozjpeg = require(`imagemin-mozjpeg`);
const inlineCss = require(`gulp-inline-css`);
const concat = require(`gulp-concat`);
const minify = require(`gulp-csso`);

const localhost = `sib-cedar`, // Local domain
    preprocessor = `scss`, // Preprocessor (sass, scss, less, styl) / Preprocessor folder name / Module require const name. Example: themes/mytheme/assets/scss/
    theme = `cedar`, // Theme folder name
    fileswatch = `html,htm,php,txt,yaml,twig,json,md`; // List of files extensions for watching & hard reload (comma separated)

const config = {
    // dist: `build`,
    // src: `src`,
    fonts: `catalog/view/theme/` + theme + `/fonts/**/*.{woff,woff2}`,
    img: {
        watch: `catalog/view/theme/` + theme + `/image/**/*.{png,jpg,svg}`,
        dist: `catalog/view/theme/` + theme + `/image/`,
        raster: `catalog/view/theme/` + theme + `/image/**/*.{png,jpg}`
    },
    // img: `src/img/**/*.{png,jpg,svg}`,
    // imgRaster: `catalog/view/theme/` + theme + `/image/**/*.{png,jpg}`,
    video: `catalog/view/theme/` + theme + `/video/**/*.{mp4,webm}`,
    // html: `src/*.html`,
    libs: `catalog/view/theme/` + theme + `/js/vendor/**/*.{js,css}`,
    css: {
        src: `catalog/view/theme/` + theme + `/stylesheet/main.`+ preprocessor,
        watch: `catalog/view/theme/` + theme + `/stylesheet/` + preprocessor + `/**/*.`+ preprocessor,
        // inlineCss: `src/email-style/**/*.css`,
        dist: `catalog/view/theme/` + theme + `/stylesheet/`,
        min: `style.min.css`
    },
    sprite: {
        src: `catalog/view/theme/` + theme + `/image/icons-sprite/*.svg`,
        dist: `catalog/view/theme/` + theme + `/image/`,
        name: `sprite.svg`
    },
    js: {
        src: `catalog/view/theme/` + theme + `/js/main.js`,
        srcLibs: `catalog/view/theme/` + theme + `/js/vendor/**/*.js`,
        watch: `catalog/view/theme/` + theme + `/js/**/*.js`,
        mode: `iife`,
        dist: `catalog/view/theme/` + theme + `/js/`,
        distLibs: `catalog/view/theme/` + theme + `/js/`,
        name: `scripts.js`,
        nameLibs: `vendor.js`

    },
    twig: {
      views: `catalog/view/theme/` + theme + `/template/**/*.twig`,
      // components: [`src/views/**/*.pug`, `!src/views/email/**/*.pug`],
      // inlineCss: [`!src/views/**/*.pug`, `src/views/email/**/*.pug`]
    },
    svg: {
        src: `src/img/icons/*.svg`,
        dist: `build/img`
    },
    data: {
        src: `src/json/data.json`
    }
};

// gulp.task(`clean`, () => {
//   return del(config.dist);
// });

// gulp.task(`copy`, () => {
//   return gulp
//     .src([config.fonts, config.svg.src, config.img], {
//       base: config.src
//     })
//     .pipe(gulp.dest(config.dist));
// });

gulp.task(`style`, () => {
    return gulp
        .src(config.css.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), objectFit()]))
        // .pipe(gulp.dest(config.css.dist))
        .pipe(minify())
        .pipe(rename(config.css.min))
        .pipe(gulp.dest(config.css.dist));
});

gulp.task(`styleDev`, () => {
    return gulp
        .src(config.css.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), objectFit()]))
        // .pipe(gulp.dest(config.css.dist))
        .pipe(rename(config.css.min))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.css.dist))
        .pipe(server.stream());
});



// gulp.task(`copyHtml`, () => {
//   return gulp.src(config.html).pipe(gulp.dest(config.dist));
// });

gulp.task(`scripts`, () => {
    return gulp
        .src(config.js.src)
        .pipe(plumber())
        // .pipe(
        //     rollup(
        //         {
        //             plugins: [commonjs(), nodeResolve(), babel()]
        //         },
        //         config.js.mode
        //     )
        // )
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest(config.js.dist));
});

gulp.task(`scriptsDev`, () => {
    return gulp
        .src(config.js.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        // .pipe(
        //     rollup(
        //         {
        //             plugins: [commonjs(), nodeResolve(), babel()]
        //         },
        //         config.js.mode
        //     )
        // )
        .pipe(sourcemaps.write())
        .pipe(plumber())
        .pipe(rename(config.js.name))
        .pipe(gulp.dest(config.js.dist));
});

gulp.task(`scriptsLibs`, () => {
    return gulp
        .src(config.js.srcLibs)
        .pipe(plumber())
        .pipe(concat(config.js.nameLibs))
        .pipe(uglify())
        .pipe(rename({ suffix: `.min` }))
        .pipe(gulp.dest(config.js.distLibs));
});

// gulp.task(`pug`, () => {
//   return gulp
//     .src(config.pug.views)
//     .pipe(
//       data(() => {
//         return JSON.parse(fs.readFileSync(config.data.src));
//       })
//     )
//     .pipe(pug({ pretty: true }))
//     .pipe(gulp.dest(config.dist));
// });

gulp.task(`sprite`, () => {
    return gulp
        .src([config.sprite.src])
        .pipe(
            svgstore({
                inlineSvg: true
            })
        )
        .pipe(rename(config.sprite.name))
        .pipe(gulp.dest(config.sprite.dist));
});

gulp.task(`image`, () => {
    return gulp
        .src(config.img.watch)
        .pipe(
            imagemin(
                mozjpeg({
                    quality: 75,
                    progressive: true
                })
            )
        )
        .pipe(gulp.dest(config.img.dist));
});

gulp.task("webp", () =>
    gulp
        .src(config.img.raster)
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest(config.img.dist))
);

// gulp.task(`video`, () => {
//   return gulp.src(config.video).pipe(gulp.dest(`build/video`));
// });

// gulp.task(`pug-inline-css`, () => {
//   return gulp
//     .src(`src/views/email/*.pug`)
//     .pipe(pug({ pretty: true }))
//     .pipe(gulp.dest(`build/email/`));
// });

// gulp.task(`html-inline-css`, () => {
//   return gulp
//     .src(`build/email/*.html`)
//     .pipe(
//       inlineCss({
//         preserveMediaQueries: true
//       })
//     )
//     .pipe(gulp.dest(`build/email/`));
// });

// gulp.task(
//   `inline-css-build`,
//   gulp.series(`pug-inline-css`, `html-inline-css`, done => done())
// );

gulp.task(`serve`, () => {
    server.init({
        proxy: localhost,
        // startPath: "/html"
        notify: false,
        // open: true,
        // cors: true,
        // ui: false,
        // reloadDelay: 500
        // files: [
        //   {
        //     match: [`src/email-style/**/*.css`],
        //     fn: function(event, file) {
        //       this.reload();
        //     }
        //   }
        // ]
    });
    gulp.watch(config.css.watch, gulp.series(`styleDev`));
    gulp.watch(config.img.watch, gulp.series(`image`)).on(`change`, server.reload);
    gulp.watch(config.img.raster, gulp.series(`webp`)).on(`change`, server.reload);
    gulp.watch(config.twig.views, server.reload);
    // gulp.watch(config.img, gulp.series(`video`)).on(`change`, server.reload);
    // gulp.watch(config.html, gulp.series(`copyHtml`)).on(`change`, server.reload);
    // gulp
    //     .watch(config.twig.views, gulp.series(`pug`))
    //     .on(`change`, server.reload);
    gulp
        .watch(config.js.watch, gulp.series(`scriptsDev`))
        .on(`change`, server.reload);
    // gulp
    //     .watch(config.pug.inlineCss, gulp.series(`pug-inline-css`))
    //     .on(`change`, server.reload);
    // gulp.watch(config.css.inlineCss, gulp.series(`pug-inline-css`));
});

gulp.task(
    `build`,
    gulp.series(
        // `clean`,
        // `copy`,
        `image`,
        `webp`,
        // `video`,
        `style`,
        `sprite`,
        `scripts`,
        `scriptsLibs`,
        // `pug`,
        // `inline-css-build`,
        done => done()
    )
);

gulp.task(
    `buildDev`,
    gulp.series(
        // `clean`,
        // `copy`,
        `image`,
        `webp`,
        // `video`,
        `styleDev`,
        `sprite`,
        `scriptsDev`,
        `scriptsLibs`,
        // `pug`,
        // `pug-inline-css`,
        done => done()
    )
);

gulp.task(
    `buildDevLight`,
    gulp.series(
        // `clean`,
        // `copy`,
        `styleDev`,
        `sprite`,
        `scriptsDev`,
        `scriptsLibs`,
        // `pug`,
        // `pug-inline-css`,
        done => done()
    )
);
