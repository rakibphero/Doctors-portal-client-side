module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-section-backImg': "url('/src/assets/images/bg.png')",
        'contact-section-backImg': "url('/src/assets/images/appointment.png')"
      }
    },
  },

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },


  plugins: [require("daisyui")],
}