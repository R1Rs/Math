import ErrorRepository from "../src/errorRepository.js" 

test("test errorRepository", () => {
  const error400 = new ErrorRepository();
  error400.addCode(400, "сервер не отвечает");
  
  const received = error400.translate(400);
  const expected = "сервер не отвечает";
  expect(received).toEqual(expected);

  const received2 = error400.translate(500);
  const expected2 = console.log("Unknown error");
  expect(received2).toEqual(expected2);
});
