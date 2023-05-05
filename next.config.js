module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/checkAvailability",
        destination: "https://www.englishhelper.net.in/englishhelperapi/api/readtomestudent/check/checkAvailability",
      },
      {
        source: "/checkLogin",
        destination: "https://www.englishhelper.net.in/englishhelperapi/api/readtomestudent/users/checkLogin?data=studentdata",
      },
    ];
  };
  return {
    rewrites,
  };
};