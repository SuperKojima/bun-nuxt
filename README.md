# Nuxt on Bun

- [Nuxt.js](https://nuxt.com/)
- [Bun](https://bun.sh/)
- [Tailwind CSS](https://tailwindcss.com/docs/aspect-ratio)

## Commands

```bash
# 開発サーバー起動
bun dev

# コーディングルールチェック
bun lint
bun lint:fix
```

もし型でエラー出てるけど絶対大丈夫だと思ったら以下を試すと良い。

```bash
rm -r .nuxt
bun postinstall
# cmd + shift + P
# -> Reload Window
```

## Modules

- [Nuxt ESLint](https://eslint.nuxt.com/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
