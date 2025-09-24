import { groupBy } from "./groupBy";

const users = [
  { id: 1, country: "Germany", name: "Hans" },
  { id: 2, country: "Ukraine", name: "Oleh" },
  { id: 3, country: "Germany", name: "Greta" },
];

describe("groupBy", () => {
  it("groups by country correctly", () => {
    expect(groupBy(users, "country")).toEqual({
      Germany: [
        { id: 1, country: "Germany", name: "Hans" },
        { id: 3, country: "Germany", name: "Greta" },
      ],
      Ukraine: [{ id: 2, country: "Ukraine", name: "Oleh" }],
    });
  });

  it("returns null for empty array", () => {
    expect(groupBy([], "country")).toBeNull();
  });

  it("returns null when property is missing", () => {
    expect(groupBy(users)).toBeNull();
  });

  it("groups by name (unique values)", () => {
    expect(groupBy(users, "name")).toEqual({
      Hans: [{ id: 1, country: "Germany", name: "Hans" }],
      Oleh: [{ id: 2, country: "Ukraine", name: "Oleh" }],
      Greta: [{ id: 3, country: "Germany", name: "Greta" }],
    });
  });
});
