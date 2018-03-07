import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board-list/board.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Board } from '../shared/task.model';
import { LocalStorageService } from '../board-list/ls.service';

@Component({
  selector: 'app-inner-board-list',
  templateUrl: './inner-board-list.component.html',
  styleUrls: ['./inner-board-list.component.sass']
})
export class InnerBoardListComponent implements OnInit {
  board: Board;

  constructor(private boardService: BoardService,
              private route: ActivatedRoute,
              private lsService: LocalStorageService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.boardService.setBoards(this.lsService.checkLs())
      this.board = this.boardService.getInnerBoard(params['id'])
    })
  }

}
