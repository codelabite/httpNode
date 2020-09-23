const http = require("http");
const PORT = 2020;

const student = [
  { id: 1, name: "Peter", age: 25, gender: "male" },
  { id: 2, name: "Osas", age: 20, gender: "female" },
  { id: 3, name: "Samuel", age: 21, gender: "male" },
  { id: 4, name: "Bukky", age: 22, gender: "female" },
  { id: 5, name: "Sam", age: 19, gender: "male" },
];

const server = http.createServer((req, res) => {
  console.log("Server is READY!");
  // console.log(req);
  // console.log("These are the REQUIRE Elemnts");
  // const { rawHeaders, headers, url, method } = req;
  // console.log(rawHeaders, headers, url, method);

  res.setHeader("Content-Type", "application/json");
  // res.writeHead(PORT, {
  //   "Content-Type": "application/json",
  // });
  console.log(req.method);
  res.statusCode = 404;
  console.log("Server is READY for Content-Type!");
  res.write("<h4>Server is READY for Content-Type!</h4>");
  res.write("<h2>Server is READY for Content-Type!</h2>");

  res.end(
    JSON.stringify({
      statusCode: 200,
      data: student,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is Listening to Port: ${PORT}`);
});
