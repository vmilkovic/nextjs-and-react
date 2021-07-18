module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_CLUSTER_CONNECTION: process.env.MONGODB_CLUSTER_CONNECTION,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};
