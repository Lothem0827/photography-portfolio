import preprocess from "svelte-preprocess";

const config = {
  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
