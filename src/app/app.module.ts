import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BudgetComponent } from './budget/budgeten.component';

import { RouterModule } from '@angular/router';
import { BudgetdeComponent } from './budgetde/budgetde.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotepaddeComponent } from './notepadde/notepadde.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'budget-en', component: BudgetComponent },
      { path: 'budget-de', component: BudgetdeComponent },
      { path: 'NotePad-en', component: NotepadComponent },
      { path: 'NotePad-de', component: NotepaddeComponent },
      { path: '', redirectTo: '/budget-de', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BudgetComponent,
    BudgetComponent,
    BudgetdeComponent,
    NotepadComponent,
    NotepaddeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
