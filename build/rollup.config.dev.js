import rollup from './rollup.config.base'
import liveReload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

rollup.plugins.concat([
    serve({
        open: true,
        port: 1001,
        contentBase: 'dist',
    }),
    liveReload(),
]);

export default rollup;