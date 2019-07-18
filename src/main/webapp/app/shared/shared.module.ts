import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BeerAppOnlineSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BeerAppOnlineSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BeerAppOnlineSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BeerAppOnlineSharedModule {
  static forRoot() {
    return {
      ngModule: BeerAppOnlineSharedModule
    };
  }
}
