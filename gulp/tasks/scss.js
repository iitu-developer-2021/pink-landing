import gulpGroupCssMediaQueries from "gulp-group-css-media-queries"
import rename from "gulp-rename"
import webpcss from "gulp-webpcss"
import autoprefixer from "gulp-autoprefixer"
import cleanCss from "gulp-clean-css"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "Scss",
      message: "Error: <%= error.message %>"
    })))
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulpGroupCssMediaQueries())
    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    }))
    .pipe(autoprefixer({
      grid: true,
      cascade: true,
      overrideBrowserslist: ["last 3 version"]
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.browserSync.stream())
}
