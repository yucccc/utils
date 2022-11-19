import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['src/index'],
    externals: ['typescript', 'axios', 'lodash-es'],
    clean: true,
    declaration: true,
    rollup: {
        emitCJS: true,
        inlineDependencies: true,
    },
})
