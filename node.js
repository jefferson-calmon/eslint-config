module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-empty-pattern': 'off',
    'prefer-const': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        trailingComma: 'all',
        quoteProps: 'as-needed',
        arrowParens: 'always',
        semi: true,
        endOfLine: 'auto',
        useTabs: true,
        jsxSingleQuote: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Imports com caracteres especiais, como imports de side effects
              ['^\\u0000'],

              // Imports dos frameworks principais, como React e Next.js
              ['^react$', '^next'],

              // Imports de pacotes de terceiros
              ['^@?\\w', 'next-bricks'],

              // Imports organizados por estrutura de projeto e pacotes de terceiros
              [
                // Subgrupo 1: Imports de módulos internos do projeto, como utils, components, etc.
                '^(utils|hooks|types|contexts|components|middlewares|services|styles|assets|config|constants|controllers|helpers|icons|layouts|models|views|theme|themes)(/.*|$)',
                // Subgrupo 3: Imports relativos (começando com './', '../', ou '.')
                '^\\.',
              ],

              // Imports de estilização
              ['^./styles'],

              // Imports absolutos não cobertos pelos grupos anteriores
              ['^[^.]'],

              // Grupo geral de captura para qualquer coisa não capturada anteriormente
              ['^'],
            ],
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
