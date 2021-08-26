const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return a new object from the manager class", () => {
    const obj = new Manager();
    expect(typeof obj).toBe("object");
  });
  it("can set a name using constructor args", () => {
    const name = "Ben";
    const obj = new Manager(name);
    expect(obj.name).toEqual(name);
  });
  it("can set an id using constructor args", () => {
    const id = 2;
    const obj = new Manager("foo", id);
    expect(obj.id).toEqual(id);
  });
  it("can set an email using constructor args", () => {
    const email = "foo@yahoo.com";
    const obj = new Manager("foo", 4, email);
    expect(obj.email).toEqual(email);
  });
  it("can set an office number using constructor args", () => {
    const office = "2";
    const obj = new Manager("foo", 4, "nick@gmail.com", office);
    expect(obj.officeNumber).toEqual(office);
  });
});
