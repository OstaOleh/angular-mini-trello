import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { InnerBoardListComponent } from './inner-board-list/inner-board-list.component';
import { BoardListComponent } from './board-list/board-list.component';

const routes: Routes = [
  {path: '', component: BoardListComponent},
  {path: 'ib/:id' , component: InnerBoardListComponent}
]

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})


export class AppRoutingModule { }
