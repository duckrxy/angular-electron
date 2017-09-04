import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = (window as any).require('electron').ipcRenderer;
      this.childProcess = (window as any).require('child_process');
    }
  }

  isElectron = () => {
    return window && (window as any).process && (window as any).process.type;
  }

}
