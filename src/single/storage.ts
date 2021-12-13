export class Storage2 {
  static instance: Storage2 | null;
  getInstance() {
    if (!Storage2.instance) {
      Storage2.instance = new Storage2();
    }
    return Storage2.instance;
  }
  getItem2(item: string) {
    return localStorage.getItem(item);
  }
  setItem2(item: string, value: any) {
    localStorage.setItem(item, value);
  }
}
