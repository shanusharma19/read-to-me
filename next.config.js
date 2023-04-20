module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/checkAvailability",
        destination: "https://www.englishhelper.net.in/englishhelperapi/api/readtomestudent/check/checkAvailability",
      },
    ];
  };
  return {
    rewrites,
  };
};