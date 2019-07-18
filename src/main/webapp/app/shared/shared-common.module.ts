import { NgModule } from '@angular/core';

import { BeerAppOnlineSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BeerAppOnlineSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BeerAppOnlineSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BeerAppOnlineSharedCommonModule {}
