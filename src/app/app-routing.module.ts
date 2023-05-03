import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { ImprintComponent } from './sites/imprint/imprint.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'imprint', component: ImprintComponent}
];

const routeConf = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'disabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeConf as ExtraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
