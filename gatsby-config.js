require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-tours",
        short_name: "gatsby-tours",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    "gatsby-plugin-react-helmet",

    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUDNAME,
    //     apiKey: process.env.CLOUDINARY_APIKEY,
    //     apiSecret: process.env.CLOUDINARY_APISECRET,
    //     // optional parameters below
    //     //
    //     // resourceType: 'image',
    //     // type: `type Value`,
    //     // maxResults: `Max result`,
    //     // tags:`fetch image tags?`,
    //     // prefix: `abc-xyz/`
    //   },
    // },
  ],
}
