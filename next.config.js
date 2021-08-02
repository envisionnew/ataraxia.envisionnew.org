module.exports = {
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://donorbox.org/ataraxia-project-envision-us/",
        permanent: true,
      },
    ];
  },
};
