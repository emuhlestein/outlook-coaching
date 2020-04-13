import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const modules = [MatCardModule, MatDividerModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
