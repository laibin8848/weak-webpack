import { b } from './b.js'

import(/* webpackChunkName: "am" */'./a').then(module => {
    const amodule = module.default
})