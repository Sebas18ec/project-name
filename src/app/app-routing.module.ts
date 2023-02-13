import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    {path:'buscar',component:BuscarComponent},
    {path:'registro',component:RegistroComponent},
    {path:'', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
