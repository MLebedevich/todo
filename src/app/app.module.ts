import { todoEffects } from './store/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({todoList: reducer}),
    CommonModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([todoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
