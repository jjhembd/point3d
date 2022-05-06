/** Class representing a point in a 3D Cartesian space */
export class Point3d {
  #x;
  #y;
  #z;

  /** Create a point
   * @param {{ x: number, y: number, z: number }} coordinates Coordinates of new point
   */
  constructor({ x = 0, y = 0, z = 0 } = {}) {
    this.#x = x;
    this.#y = y;
    this.#z = z;
  }

  /** Get the x coordinate
   * @return {number} The x coordinate
   */
  get x() {
    return this.#x;
  }

  /** Get the y coordinate
   * @return {number} The y coordinate
   */
  get y() {
    return this.#y;
  }

  /** Get the z coordinate
   * @return {number} The z coordinate
   */
  get z() {
    return this.#z;
  }

  /** Check for equality with another Point3D
   * @param {Point3d} point The point to compare
   * @return {boolean} Whether the two points are equal
   */
  equals(point) {
    return ["x", "y", "z"].every(c => point[c] == this[c]);
  }

  /** Add to another Point3D
   * @param {Point3d} point The point to add
   * @return {Point3d} The Point3d resulting from the sum
   */
  plus(point) {
    return new Point3d({
      x: this.x + point.x,
      y: this.y + point.y,
      z: this.z + point.z
    });
  }

  /** Scale the point
   * @param {number} scalar The value to scale by
   * @return {Point3d} The scaled point
   */
  scale(scalar) {
    return new Point3d({
      x: this.x * scalar,
      y: this.y * scalar,
      z: this.z * scalar,
    });
  }

  /** Subtract another Point3D
   * @param {Point3d} point The point to subtract
   * @return {Point3d} The Point3d resulting from the subtraction
   */
  minus(point) {
    return this.plus(point.scale(-1.0));
  }

  /** Compute the scalar or dot product with another Point
   * @param {Point3d} point
   * @return {number} The scalar product
   */
  dot(point) {
    return this.x * point.x + this.y * point.y + this.z * point.z;
  }

  /** Compute the vector or cross product with another Point
   * @param {Point3d} point
   * @return {Point3d} The cross product
   */
  cross(point) {
    return new Point3d({
      x: this.y * point.z - this.z * point.y,
      y: this.z * point.x - this.x * point.z,
      z: this.x * point.y - this.y * point.x
    });
  }
}
