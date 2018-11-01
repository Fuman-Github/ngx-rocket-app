import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ContentManagerComponent } from './content-manager.component';

const routes: Routes = [
  { path: '', component: ContentManagerComponent, data: { title: extract('CM') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagerRoutingModule { }
