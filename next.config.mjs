/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'image.tmdb.org',
            pathname: '**'
        }]
    },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/imdb_clone' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/imdb_clone/' : '',
};


export default nextConfig;
