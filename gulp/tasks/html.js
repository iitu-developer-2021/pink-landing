import fileInclude from 'gulp-file-include';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const html = () =>
    app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'HTML',
                    message: 'Error: <%= error.message %>'
                })
            )
        )
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(
            app.plugins.if(
                app.isBuild,

                webpHtmlNoSvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: '%MDS%',
                    append: {
                        key: 'v',
                        to: ['css', 'js']
                    },
                    output: {
                        file: 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
