// option members for consumers
type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  // required: internally all members will always be present
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "green",
      radius: config.radius ?? 0,
    };
  }

  // no null checking needed
  draw() {
    console.log("Drawing a Circle.", "Color:", this.config.color, "Radius:", this.config.radius);
  }
}

export {};
