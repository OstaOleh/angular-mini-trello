import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../shared/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.sass']
})
export class BoardItemComponent implements OnInit {

  @Input() board: Board;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToInnerBoards() {
    this.router.navigate([`ib/${this.board.id}`])
  }
}