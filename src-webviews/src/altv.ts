
export class alt {

  private static valid: boolean = window['alt'] !== undefined;

  public static on(eventName: string, listener: (...args: any[]) => void): void {
    if (this.valid) {
      window['alt'].on(eventName, listener);
    }
  }
  public static off(eventName: string, listener: (...args: any[]) => void): void {
    if (this.valid) {
      window['alt'].off(eventName, listener);
    }
  }

  public static emit(eventName: string, ...args: any[]): void {
    if (this.valid) {
      window['alt'].emit(eventName, ...args);
    } else {
      this.consoleLog(eventName, args);
    }
  }

  private static consoleLog(eventName: string, ...args: any[]): void {
    console.log(`altv: Emit Event - ${eventName}`);
    console.log(`altv: Params for Event - ${JSON.stringify(args)
        .replace('[', '')
        .replace(']', '')}`
    );
  }
}
