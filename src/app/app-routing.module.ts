import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViatgeplusComponent } from './component/viatgeplus/viatgeplus.component';
import { ViatgeappComponent } from './component/viatgeapp/viatgeapp.component';
import { ViatgeplusregisterComponent } from './component/viatgeplusregister/viatgeplusregister.component';
import { ViatgeviewComponent } from './component/viatgeview/viatgeview.component';

const routes: Routes = [
  { path: "viatgeplus", component: ViatgeplusComponent},
  { path: "viatgeapp", component: ViatgeappComponent},
  { path: "viatgeplusregister", component: ViatgeplusregisterComponent},
  { path: "viatgeview", component: ViatgeviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
