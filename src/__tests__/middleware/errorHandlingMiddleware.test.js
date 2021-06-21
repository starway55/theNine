const { handleJsonParseError } = require("@root/src/middleware/errorHandlingMiddleWare");

// const handleJsonParseError = (err, req, res, next) => {

//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//       logger.error(err);
//       return res.status(400).send({
//         error: "Could not decode request: JSON parsing failed"
//       });
//   }

//   next();
// };

class MockHttpResponse {

  status (code) {
    this.statusCode = code;
  }
  send (response) {
    this.response = response;
  }
}

test('handleJsonParseError handles error when parsing JSON', () => {
  const res = new MockHttpResponse();
  const req = {};
  const next = () => {};

  try{
    JSON.stringify(["abc"]);
  }
  catch(err){
    handleJsonParseError(err, req, res, next);
    expect(res.statusCode.toEqual(400));
    expect(res.response.toEqual({
      error: "Could not decode request: JSON parsing failed"
    }))
  }
});

test('handleJsonParseError is not called parsing valid JSON', () => {
  const res = new MockHttpResponse();
  const req = {};
  const next = () => {};

  try{
    JSON.stringify({
      key: "value"
    });

    expect(res.statusCode.toBeFalsy())
    expect(res.response.toBeFalsy())
  }
  catch(err){
    handleJsonParseError(err, req, res, next);
  }
});

// it('returns the title of the first album', async () => {
//   axios.get.mockResolvedValue({
//     data: [
//       {
//         userId: 1,
//         id: 1,
//         title: 'My First Album'
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: 'Album: The Sequel'
//       }
//     ]
//   });

//   const title = await getFirstAlbumTitle();
//   expect(title).toEqual('My First Album');
// });

