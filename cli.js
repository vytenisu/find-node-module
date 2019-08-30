var path = require('path')

var args = process.argv.slice(2)

if (![1, 2].includes(args.length) || args[0].startsWith('-')) {
  console.log('Find module in CWD:')
  console.log('    find-node-module some-module-name')
  console.log('')
  console.log('Find module in given location:')
  console.log('    find-node-module some-module-name /some-location')
  console.log('')
} else {
  console.log(
    new (require('./dist/index')).NodeModules(
      path.resolve(args[1] || process.cwd()),
    ).find(args[0]) || '',
  )
}
