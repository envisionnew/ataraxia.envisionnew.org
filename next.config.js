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
      {
        source: "/papers/erlangsen",
        destination:
          "https://drive.google.com/file/d/1I58ZyUdNqldIXOpg5phJtB3YsWg3G0sI/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/papers/neurodiversity-clinicians-scientists",
        destination:
          "https://drive.google.com/file/d/1ntY8OGLHDtzEG4G-sHKBClno3tF39oEi/view",
        permanent: true,
      },
      {
        source: "/blog-submit",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSc_TvWiCG3y-w3FesxxWfxUJnefdG1opmGPxMwJ2Iz92RlPaw/viewform?usp=sf_link",
        permanent: true,
      },
      {
        source: "/contact",
        destination:
          "mailto:saurish@envisionnew.org?cc=shehbaz.virk@envisionnew.org&subject=Ataraxia: Contact",
        permanent: true,
      },
      {
        source: "/podcast",
        destination:
          "https://open.spotify.com/show/4U8uJhkkXDlCQkraemyfcs?si=QgNnTib1TG2c6mxx0teM2Q&dl_branch=1",
        permanent: true,
      },
    ];
  },
};
