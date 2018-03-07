import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardService } from '../../board.service';
import { Board } from '../../../shared/task.model';

@Component({
  selector: 'app-new-board-item',
  templateUrl: './new-board-item.component.html',
  styleUrls: ['./new-board-item.component.sass']
})
export class NewBoardItemComponent implements OnInit {
  boardState: boolean = false;
  form: FormGroup;


  constructor(private boardService: BoardService) {
    this.form = new FormGroup({
      'boardName': new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    console.log(this.boardState);
  }

  openBoard() {
    this.boardState = true;
  }
  closeBoard() {
    console.log(this.boardState);
    this.boardState = false;
    console.log(this.boardState);


  }

  onSubmit() {
    this.boardService.createNewBoard(this.form.value.boardName)
    this.form.reset();
    this.boardState = false;
  }
}
