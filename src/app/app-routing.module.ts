import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'legal-notice', component: LegalNoticeComponent}
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
