// next.config.mjs
export default {
  webpack: (config, { isServer }) => {
    // Font loader configuration
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|otf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192, // Use 'url-loader' for files smaller than 8KB, otherwise fallback to 'file-loader'
          outputPath: "static/fonts/", // Output path for fonts
          publicPath: "/_next/", // Public path to fonts
          name: "[name].[hash].[ext]", // Name format for output files
          esModule: false, // Enable CommonJS syntax
        },
      },
    });

    return config;
  },

  images: {
    unoptimized: true, // Si vous avez des problèmes avec l'optimisation d'image
  },
};
