import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

import { ContentManagerRoutingModule } from './content-manager-routing.module';
import { ContentManagerComponent } from './content-manager.component';

@NgModule({
  imports: [
    CommonModule,
    ContentManagerRoutingModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ContentManagerComponent]
})
export class ContentManagerModule { }
