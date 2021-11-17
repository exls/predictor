import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip'
import dts from 'rollup-plugin-dts'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'source',
      file: 'dist/index.min.js',
      format: 'cjs',
    },
    plugins: [
      commonjs(),
      typescript(),

      strip({
        labels: ['unittest'],
      }),
      sizeSnapshot(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'types',
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [commonjs(), typescript(), dts()],
  },
]
