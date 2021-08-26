const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return a new object from the engineer class", () => {
    const obj = new Engineer();
    expect(typeof obj).toBe("object");
  });
  it("can set a name using constructor args", () => {
    const name = "Ben";
    const obj = new Engineer(name);
    expect(obj.name).toEqual(name);
  });
  it("can set an id using constructor args", () => {
    const id = 2;
    const obj = new Engineer("foo", id);
    expect(obj.id).toEqual(id);
  });
  it("can set an email using constructor args", () => {
    const email = "foo@yahoo.com";
    const obj = new Engineer("foo", 4, email);
    expect(obj.email).toEqual(email);
  });
  it("can set a github using constructor args", () => {
    const github = "foober";
    const obj = new Engineer("foo", 4, "nick@gmail.com", github);
    expect(obj.github).toEqual(github);
  });
});
