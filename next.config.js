module.exports = {
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://donorbox.org/ataraxia-project-envision-us/",
        permanent: true,
      },
      {
        source: "/papers/armstrong",
        destination:
          "https://drive.google.com/file/d/1KE9h4wrsUUMVDqtY2SEg0APCWiq76Sl9/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};
