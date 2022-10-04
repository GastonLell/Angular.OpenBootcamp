import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, mergeMap } from 'rxjs';
import { PreloadingOptions, PreloadingService } from 'src/app/services/preloading.service';

@Injectable({
  providedIn: 'root'
})
export class OnDemandPreloadStrategy implements PreloadingStrategy {

  private _preloadingOptions$: Observable<PreloadingOptions>;

  constructor(private _preloadingService: PreloadingService ){
    this._preloadingOptions$ = this._preloadingService.options$
  }

  private preloadModule(route: Route, preloadingOptions: PreloadingOptions){
    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload
    )
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this._preloadingOptions$.pipe(
      mergeMap((preloadingOption: PreloadingOptions) => {

        //  la funcion preload module devuelve boolean, si la ruta cumple sus condiciones de precarga
        const preload: boolean = this.preloadModule(route, preloadingOption)

        // si cumple sus condiciones precarga el modulo, de lo contrario devuelve un observable vacio
        return preload ? load() : EMPTY;
      })
    )
  }
}
