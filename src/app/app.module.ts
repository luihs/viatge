import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViatgeplusComponent } from './component/viatgeplus/viatgeplus.component';
import { ViatgeappComponent } from './component/viatgeapp/viatgeapp.component';
import { ViatgeplusregisterComponent } from './component/viatgeplusregister/viatgeplusregister.component';
import { ViatgeviewComponent } from './component/viatgeview/viatgeview.component';

@NgModule({
  declarations: [
    AppComponent,
    ViatgeplusComponent,
    ViatgeappComponent,
    ViatgeplusregisterComponent,
    ViatgeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports:[
    ViatgeplusComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
