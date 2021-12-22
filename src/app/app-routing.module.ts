import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGenerationComponent } from './components/code-generation/code-generation.component';
import { FireForestComponent } from './components/fire-forest/fire-forest.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'code-generation', component: CodeGenerationComponent},
  {path:'fire-forest', component: FireForestComponent},
  // {path:'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
