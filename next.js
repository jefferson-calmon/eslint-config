module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', '@typescript-eslint', 'simple-import-sort'],
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
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unknown-property': 'error',
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
                '^(utils|hooks|types|contexts|components|middlewares|services|styles|config|constants|controllers|helpers|icons|layouts|models|views|theme|themes|modules)(/.*|$)',
                // Subgrupo 3: Imports relativos (começando com './', '../', ou '.')
                '^\\.',
              ],

              // Imports de arquivos estáticos
              ['^(assets)(/.*|$)'],

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
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
