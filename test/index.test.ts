import index from "../src"

describe("index", () => {
  it("index(data) to equal data", () => {
    expect(index("sample")).toEqual("sample")
  })
})
