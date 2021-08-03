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
      {
        source: "/papers/allen",
        destination:
          "https://drive.google.com/file/d/11bXDzVEVUe9b3ql4DCwYR2Eh_xB893sK/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};
