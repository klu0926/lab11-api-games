/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      new URL('https://www.giantbomb.com/**')
    ]
  }

};

export default nextConfig;
