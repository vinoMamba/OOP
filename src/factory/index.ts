abstract class MobileFactory {
  abstract createOS(): Os;
  abstract createHardWare(): HardWare;
}

export class FakeStarFactory extends MobileFactory {
  createOS() {
    return new AndridOS();
  }
  createHardWare() {
    return new MiWare();
  }
}

abstract class Os {
  abstract controllHardWare(): void;
}

class AndridOS extends Os {
  controllHardWare(): void {
    console.log("安卓系统控制硬件");
  }
}
abstract class HardWare {
  abstract operate(): void;
}
class MiWare extends HardWare {
  operate(): void {
    console.log("小米的");
  }
}
