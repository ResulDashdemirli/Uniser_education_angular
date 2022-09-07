import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HaqqimizdaComponent } from './haqqimizda/haqqimizda.component';
import { AnaSehifeComponent } from './ana-sehife/ana-sehife.component';
import { XeberlerComponent } from './xeberler/xeberler.component';


const routes : Routes = [
  { path: '' , component : AnaSehifeComponent},
  {path: 'haqqimizda' , component : HaqqimizdaComponent},
  {path: 'xeberler' , component : XeberlerComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
