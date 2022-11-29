import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, MaterialModule],
  declarations: [],
})
export class SharedModule {}
