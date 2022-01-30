const fs = require("fs");
// const {
//   toHaveClass,
//   toHaveAttribute,
//   toHaveStyle,
// } = require("@testing-library/jest-dom/matchers");

// expect.extend({ toHaveClass, toHaveAttribute, toHaveStyle });

describe("W folderze root", () => {
  it("powinien byc index.html", async () => {
    const hasFile = fs.readdirSync(`${__dirname}/..`).includes("index.html");
    expect(hasFile).toEqual(true);
  });
  it("powinien byc css/main.css", async () => {
    const hasFile = fs.readdirSync(`${__dirname}/../css`).includes("main.css");
    expect(hasFile).toEqual(true);
  });
  it("powinien byc js/main.js", async () => {
    const hasFile = fs.readdirSync(`${__dirname}/../js`).includes("main.js");
    expect(hasFile).toEqual(true);
  });
});
