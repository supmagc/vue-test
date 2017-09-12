import typescript2 from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import nodeGlobals from 'rollup-plugin-node-globals'

const input = 'src/main.ts';
const output = 'dist/main.js';
const format = 'iife';
const plugins = [
    nodeResolve({
        extensions: [ '.ts' ],
        modulesOnly: true,
    }),
    //nodeGlobals(),
    typescript2(),
];

const config = {
    input,
    output: {
        output,
        format,
    },
    plugins,
};

export default config;