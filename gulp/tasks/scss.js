import gulpGroupCssMediaQueries from "gulp-group-css-media-queries"
import rename from "gulp-rename"
import webpcss from "gulp-webpcss"
import autoprefixer from "gulp-autoprefixer"
import cleanCss from "gulp-clean-css"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "Scss",
      message: "Error: <%= error.message %>"
    })))
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(
      app.plugins.if(
        app.isBuild,
        gulpGroupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: '.webp',
          noWebpClass: '.no-webp'
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          cascade: true,
          overrideBrowserslist: ["last 3 version"]
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.dest(app.path.build.scss)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(
      app.gulp.dest(app.path.build.scss)
    )
    .pipe(app.plugins.browserSync.stream())
}
