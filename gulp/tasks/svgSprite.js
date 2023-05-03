import svgSpriteLib from 'gulp-svg-sprite';

export const svgSprite = () =>
    app.gulp
        .src(app.path.src.svgicons)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'SVG',
                    message: 'Error: <%= error.message %>'
                })
            )
        )
        .pipe(
            svgSpriteLib({
                mode: {
                    stack: {
                        sprite: '../icons.svg',
                        example: true
                    }
                }
            })
        )

        .pipe(app.gulp.dest(app.path.build.images));
