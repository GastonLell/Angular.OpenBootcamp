import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class PreloadingOptions{
  constructor(public routePath: string, public preload: boolean = true){}
}

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  private _subject = new Subject<PreloadingOptions>()

  public options$: Observable<PreloadingOptions> = this._subject.asObservable();

  constructor() { }

  initPrecarga(routePath: string){

    const optionPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    this._subject.next(optionPrecarga)

  }
}
