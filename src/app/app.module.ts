import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2DragDropModule } from "ng2-drag-drop";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardItemComponent } from './board-list/board-item/board-item.component';
import { NewBoardItemComponent } from './board-list/board-item/new-board-item/new-board-item.component';
import { BoardService } from './board-list/board.service';
import { InnerBoardListComponent } from './inner-board-list/inner-board-list.component';
import { InnerBoardListNameComponent } from './inner-board-list/inner-board-list-name/inner-board-list-name.component';
import { InnerBoardItemComponent } from './inner-board-list/inner-board-item/inner-board-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewInnerBoardItemComponent } from './inner-board-list/inner-board-item/new-inner-board-item/new-inner-board-item.component';
import { LocalStorageService } from './board-list/ls.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardItemComponent,
    NewBoardItemComponent,
    InnerBoardListComponent,
    InnerBoardListNameComponent,
    InnerBoardItemComponent,
    NewInnerBoardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [BoardService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
