// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // regras que você já tem
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // ↓ desativa as regras chatas de espaços
      'no-multi-spaces': 'off',
      'no-trailing-spaces': 'off',
      'space-before-function-paren': 'off',
      'prettier/prettier': ['warn', {
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 100,
        trailingComma: 'none',
        bracketSpacing: true,
        endOfLine: 'auto'
      }]
    }
  }
);
