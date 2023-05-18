import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SciCalComponent } from './sci-cal/sci-cal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorldRankingComponent } from './world-ranking/world-ranking.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'sci-cal', component: SciCalComponent},
  {path:'currency-converter', component: CurrencyConverterComponent},
  {path:'world-ranking', component: WorldRankingComponent},
  {path:'chat-gpt', component: ChatGptComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleToolsRoutingModule { }
