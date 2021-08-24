const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return a new object from the employee class", () => {
    const obj = new Employee();
    expect(typeof obj).toBe("object");
  });
  it("can set a name using constructor args", () => {
    const name = "Ben";
    const obj = new Employee(name);
    expect(obj.name).toEqual(name);
  });
  it("can set an id using constructor args", () => {
    const id = 2;
    const obj = new Employee("foo", id);
    expect(obj.id).toEqual(id);
  });
  it("can set an email using constructor args", () => {
    const email = "foo@yahoo.com";
    const obj = new Employee("foo", 4, email);
    expect(obj.email).toEqual(email);
  });
});
