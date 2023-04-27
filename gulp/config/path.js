import * as nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './source'

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    scss: `${buildFolder}/css/`
  },
  src:{
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}
