import typescript2 from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import nodeGlobals from 'rollup-plugin-node-globals'
import vue from 'rollup-plugin-vue'

const input = 'src/main.ts';
const output = 'dist/main.js';
const format = 'iife';
const plugins = [
    typescript2(),
    nodeResolve(),
    nodeGlobals(),
    vue(),
];

const config = {
    input,
    output: {
        file: output,
        format,
    },
    plugins,
};

export default config;