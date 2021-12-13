export class SingleDog {
  static instance: SingleDog | null;
  show() {
    console.log("我是一个单例对象");
  }
  getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}
