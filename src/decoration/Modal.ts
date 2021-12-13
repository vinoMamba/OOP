export class Modal {
  static modalInstance: HTMLDivElement | null;
  constructor() {
    if (!Modal.modalInstance) {
      Modal.modalInstance = document.createElement("div");
      Modal.modalInstance.innerHTML = "您还未登录哦~";
      Modal.modalInstance.id = "modal";
      Modal.modalInstance.style.display = "none";
      document.body.appendChild(Modal.modalInstance);
    }
  }
  open() {
    Modal.modalInstance!.style.display = "block";
  }
  close() {
    Modal.modalInstance!.style.display = "none";
  }
}
