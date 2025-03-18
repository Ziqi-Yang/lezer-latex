import copy from '@rollup-extras/plugin-copy';
import {lezer} from "@lezer/generator/rollup";

export default {
    input: "./src/latex.grammar",
    output: [{
        format: "es",
        file: "./dist/index.js"
    }, {
        format: "cjs",
        file: "./dist/index.cjs"
    }],
    external: ["@lezer/lr"],
    plugins: [
        lezer(),
        copy('src/latex.terms.js')
    ]
}
