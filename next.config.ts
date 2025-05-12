import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '/',
  // Ajout d'une configuration spécifique pour les polices
  optimizeFonts: true,
  // Inclusion explicite des polices dans le build
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/fonts/',
          publicPath: '/_next/static/fonts/'
        }
      }
    });
    return config;
  }
};

export default nextConfig;
