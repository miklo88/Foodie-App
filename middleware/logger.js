module.exports = () => (req, res) => {
  console.log(
    `${req.ip} - ${req.protocol} ${req.method} - ${req.url} - ${req.get(
      "User-Agent"
    )} `
  );
};
