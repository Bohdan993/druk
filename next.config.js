/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
    //  {
    //    protocol: 'http',
    //    hostname: 'localhost',
    //    port: '1337',
    //    pathname: '/uploads/**'
    //  },
//       {
//         protocol: 'https',
//         hostname: 'druk-back.onrender.com',
//         port: '',
//         pathname: '/uploads/**'
//       },
        {
         protocol: 'https',
         hostname: 'admin.printbooks.pro',
         port: '',
         pathname: '/uploads/**'
       },
    ],
  },
}

