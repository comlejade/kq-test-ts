module.exports = {
  presets: [
    [
      'remax',
      {
        react: {
          runtime: 'automatic',
        },
        typescript: {
          allowNamespaces: true,
        },
        'class-properties': {
          loose: true,
        },
        decorators: {
          legacy: true,
        },
        'throw-if-namespace': true,
        targets: ['chrome >= 49', 'firefox >= 64', 'ios >= 8', 'Android > 4.4'],
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryDirectory: 'es',
        libraryName: '@kqinfo/ui'
      },
      '@kqinfo/ui'
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
  ]
}