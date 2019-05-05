const AppDefaults = Object.freeze({
  app: {
    name: "Time Aid",
    caption: "Your time spent on good causes",
    version: "0.1.0"
  },
  constants: {
    font: {
      imports: {
        all: `
          @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');
        `,
        rubik: "@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');"
      },
      family: {
        default: "'Rubik', sans-serif"
      },
      sizes: {
        normal: "16px",
        caption: "24px",
        heading: "45px",
        title: "70px"
      }
    }
  }
});

export default AppDefaults;