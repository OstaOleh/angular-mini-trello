import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InnerBoards, Board } from '../../shared/task.model';
import { BoardService } from '../../board-list/board.service';

@Component({
  selector: 'app-inner-board-list-name',
  templateUrl: './inner-board-list-name.component.html',
  styleUrls: ['./inner-board-list-name.component.sass']
})
export class InnerBoardListNameComponent implements OnInit {
  id: number;
  board: Board;
  constructor(private route: ActivatedRoute,
              private boardService: BoardService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      
      this.board = this.boardService.getInnerBoard(this.id)
      console.log(this.board);
      console.log(this.id);
    })
  }

}
