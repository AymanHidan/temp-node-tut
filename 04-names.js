// local (just to this module)
const secret = 'SUPER SECRET'
// share (with the rest of our application)
const john = 'john'
const peter = 'peter'

module.exports = { john, peter } // we set an object because we have many variables if we had just one we'll do what we did in 05-utils.js
// there is an alternative way to export it's called export as you go, example is in 06-alternative-flavor.js.

// console.log(module)
/*
when we console log the module before the exporting the variable we get:
PS C:\Users\Dark\Desktop\Tutorial node> node 04-names.js
Module {
  id: '.',
  path: 'C:\\Users\\Dark\\Desktop\\Tutorial node',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\Dark\\Desktop\\Tutorial node\\04-names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\Dark\\Desktop\\Tutorial node\\node_modules',
    'C:\\Users\\Dark\\Desktop\\node_modules',
    'C:\\Users\\Dark\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
PS C:\Users\Dark\Desktop\Tutorial node>
*/
// We're interested in exports: {}, which is an object and the way commonJS syntax works is whatever we dump in that export we're going to be able to access anywhere in the application.
// 