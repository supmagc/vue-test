import rollup from './rollup.config.base'
import butternut from 'rollup-plugin-butternut'

rollup.plugins.push(butternut());

export default rollup;