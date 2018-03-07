import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardService } from '../../../board-list/board.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-new-inner-board-item',
  templateUrl: './new-inner-board-item.component.html',
  styleUrls: ['./new-inner-board-item.component.sass']
})
export class NewInnerBoardItemComponent implements OnInit {
  open: boolean = false;
  form: FormGroup;
  id: number;
  constructor(private boardService: BoardService,
              private route: ActivatedRoute) { 
    this.form = new FormGroup({
      "listName": new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  openAddList() {
    this.open = true;
  }

  closeAddList() {
    this.open = false;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      
      this.boardService.addInnerTask(this.form.value.listName, this.id)
      this.form.reset()
      this.closeAddList();
    }
  }
}
