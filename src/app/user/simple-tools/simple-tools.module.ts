import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleToolsRoutingModule } from './simple-tools-routing.module';
import { SciCalComponent } from './sci-cal/sci-cal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { WorldRankingComponent } from './world-ranking/world-ranking.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    SciCalComponent,
    HomepageComponent,
    WorldRankingComponent,
    CurrencyConverterComponent,
    ChatGptComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    SimpleToolsRoutingModule,
    CardModule,
    TabViewModule,
    DropdownModule,
    InputNumberModule,
  ],
  providers: [SafePipe]
})
export class SimpleToolsModule {}
