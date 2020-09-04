export default class {
  private registry: { [index: string]: Set<Function> } = {};

  subscribe(event: string, fn: Function) {
    if (!this.registry[event]) this.registry[event] = new Set();

    this.registry[event].add(fn);
    const that = this;

    return {
      release() {
        that.registry[event].delete(fn);
      },
    };
  }

  emit(event: string, ...params: any) {
    for (const cb of this.registry[event]) {
      cb(...params);
    }
  }
}
