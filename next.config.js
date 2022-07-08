/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  experimental: { images: { layoutRaw: true } },
  cssModules: true,
    rules: [
      {
        test: /\.(png|jpg|woff|svg|eot|ttf|woff2|otf)$/,
        loader: "url-loader?limit=8192&name=images/[name].[ext]",
      },
    ],
};

module.exports = nextConfig;
