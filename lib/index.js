import Button from '../packages/Button/index.js'
import Header from '../packages/Header/index.js'

const { version } = require('../package.json')

const components = [
  Button,
  Header
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version,
  install,
  Button,
  Header
}

export {
  Button,
  Header
}
