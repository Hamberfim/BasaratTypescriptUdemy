type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

function area(shape: Shape) {
  // if( "size" in shape) {return shape.size * shape.size;}
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }
  // if("width" in shape;) {return shape.width * shape.height;}
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensureNever: never = shape;
  return _ensureNever;
}

export {};
