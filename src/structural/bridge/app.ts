namespace Bridge {
  interface IPhone {
    callNumber(phoneNumber: string): void;
  }

  interface ICamera {
    makePicture(): void;
  }

  class Phone implements IPhone {
    callNumber(phoneNumber: string): void {
      console.log(`Call number ${phoneNumber}`);
    }
  }

  class Camera implements ICamera {
    makePicture(): void {
      console.log(`Make picture`);
    }
  }

  class Smartphone extends Phone implements ICamera {
    private camera = new Camera();

    makePicture(): void {
      this.camera.makePicture();
    }
  }

  const smartPhone = new Smartphone();
  smartPhone.callNumber("+49 151 123456789");
  smartPhone.makePicture();
}
