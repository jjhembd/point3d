# point3d

Cartesian 3D data type, with basic vector math methods

## How to use point3d in your project
point3d is published as an NPM module. To install it in your project,
simply execute the following:

```bash
npm install --save point3d
```

point3d exports a single class. The class constructor can be used to
construct Cartesian points at specified coordinates, as follows:
```javascript
import { Point3d } from "point3d";

const point = new Point3d({ x: 1.0, y: 1.0, z: 1.0 });
```

The constructed Point has attached methods to perform basic vector math,
such as equality checks, addition, subtraction, and scalar and vector products.
The methods are written in a pseudo-functional style, always returning the
result rather than modifying an existing object. This allows for a concise,
chainable syntax. For example, to compute the linear sum `a * x + b = c`,
you can simply chain as follows:
```javascript
const c = x.scale(a).plus(b);
```

See the [class documentation][] for more details.

[class documentation]: https://jjhembd.github.io/point3d/Point3d.html

## About point3d development
point3d was written in a single 3-hour sprint. Development began with a
30-minute strategizing session, during which the following key decisions were
made:
- Code would be written as an [ES6 class][]. This means it is not supported in 
  Internet Explorer. But all other major browsers support classes, and classes
  are a good fit for defining a data type
- Methods would be written in a pseudo-functional style, returning a new instance
  of the class where necessary. While potentially not as memory-efficient as
  modify-in-place libraries like [glMatrix](https://glmatrix.net/), it allows
  for more concise syntax
- The constructor would input an object with x, y, and z properties, rather than
  separate parameters for each coordinate. This decision is perhaps of debatable
  value, but it allows the constructor to input another Point3d
- The coordinates themselves (x, y, z) would be private to the class. This
  means they cannot be modified without calling the class methods

Actual coding took about 1.5 hours. Another half hour was needed to learn
[jasmine][], and another half hour to learn [JSDoc][] and write the README.

[ES6 class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[jasmine]: https://jasmine.github.io/
[JSDoc]: https://jsdoc.app

## Contributing
Feedback and pull requests are welcome! If you want to try modifying the code,
fork the [repository on GitHub](https://github.com/jjhembd/point3d).

To make sure we don't break anything as we change the code, point3d has a
test suite (implemented in [jasmine][], which you can run as follows:
```bash
npm run test
```

Please be sure to update the comments in the code. Comments should follow the
[JSDoc syntax](https://jsdoc.app/howto-es2015-classes.html). When you are done,
be sure to rebuild the docs before committing your code. This can be done via
another of the NPM scripts, as follows:
```bash
npm run build-docs
```
