const fs = require('fs')
const path = require('path')

const exportPath = path.resolve(process.cwd(), '__sapper__/export')

try {
  fs.renameSync(
    path.resolve(exportPath, '404/index.html'),
    path.resolve(exportPath, '404.html')
  )

  fs.rmdirSync(path.resolve(exportPath, '404'))
} catch (e) {}