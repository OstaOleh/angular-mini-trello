import { Component, OnInit } from '@angular/core';
import { Board } from '../shared/task.model';
import { BoardService } from './board.service';
import { LocalStorageService } from './ls.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.sass']
})
export class BoardListComponent implements OnInit {
  boards: Board[];
  constructor(private boardService: BoardService,
              private lsService: LocalStorageService) { }

  ngOnInit() {
    
    this.boards = this.lsService.checkLs();
    this.boardService.setBoards(this.lsService.checkLs())
    this.boardService.returnBoards.subscribe((boards: Board[]) => {
      this.boards = boards;
    })
  }

}
