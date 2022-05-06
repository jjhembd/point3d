import { Point3d } from "../index.js";

describe("Point3d", function() {
  it("initializes to a zero Point if no values are given", function() {
    const point = new Point3d;
    expect(point.x).toEqual(0);
    expect(point.y).toEqual(0);
    expect(point.z).toEqual(0);
  });

  it("initializes to supplied coordinates", function() {
    const point = new Point3d({ x: 1, y: 2, z: 3 });
    expect(point.x).toEqual(1);
    expect(point.y).toEqual(2);
    expect(point.z).toEqual(3);
  });

  it("recognizes equal points as equal", function() {
    const point1 = new Point3d({ x: 1, y: 2, z: 3 });
    const point2 = new Point3d({ x: 1, y: 2, z: 3 });
    expect(point1.equals(point2)).toEqual(true);
  });

  it("recognizes different points as NOT equal", function() {
    const point1 = new Point3d({ x: 1, y: 2, z: 3 });
    const point2 = new Point3d({ x: 1, y: 2, z: 2 });
    expect(point1.equals(point2)).toEqual(false);
  });

  it("adds one point to another", function() {
    const point1 = new Point3d({ x: 1, y: 1, z: 1 });
    const point2 = new Point3d({ x: 1, y: 1, z: 1 });
    const sum = new Point3d({ x: 2, y: 2, z: 2 });
    expect(point1.plus(point2).equals(sum)).toEqual(true);
  });

  it("scales a point by a scalar", function() {
    const point = new Point3d({ x: 1, y: 1, z: 1 });
    const scaled = new Point3d({ x: 2, y: 2, z: 2 });
    expect(point.scale(2.0).equals(scaled)).toEqual(true);
  });

  it("subtracts one point from another", function() {
    const point1 = new Point3d({ x: 3, y: 3, z: 3 });
    const point2 = new Point3d({ x: 1, y: 1, z: 1 });
    const difference = new Point3d({ x: 2, y: 2, z: 2 });
    expect(point1.minus(point2).equals(difference)).toEqual(true);
  });

  it("computes the dot product of two points", function() {
    const point1 = new Point3d({ x: 1, y: 1, z: 1 });
    const point2 = new Point3d({ x: 2, y: 2, z: 2 });
    expect(point1.dot(point2)).toEqual(6.0);
  });

  it("computes the cross product of two points", function() {
    const point1 = new Point3d({ x: 1, y: 0, z: 0 });
    const point2 = new Point3d({ x: 0, y: 1, z: 0 });
    const point3 = new Point3d({ x: 0, y: 0, z: 1 });
    expect(point1.cross(point2).equals(point3)).toEqual(true);
  });
});
