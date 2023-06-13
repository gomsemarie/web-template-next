/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // (option) serverless dockerlizing을 위해(.next/cache에 파일을 기록하려다 오류가 발생하는것 방지)
    unoptimized: true,
  },
  output: 'standalone', // dockerlizing을 위해
};

module.exports = nextConfig;
