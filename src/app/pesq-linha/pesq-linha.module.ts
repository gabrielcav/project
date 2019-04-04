import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesqLinhaPage } from './pesq-linha.page';

const routes: Routes = [
  {
    path: '',
    component: PesqLinhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PesqLinhaPage]
})
export class PesqLinhaPageModule {}
