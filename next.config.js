const withImages = require('next-images')

module.exports = withImages(
    {
        esModule: true,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        loader: 'imgix',
    }
)