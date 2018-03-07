import { Component, OnInit, Input } from '@angular/core';
import { Board, InnerBoards, Tasks } from '../../shared/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardService } from '../../board-list/board.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inner-board-item',
  templateUrl: './inner-board-item.component.html',
  styleUrls: ['./inner-board-item.component.sass']
})
export class InnerBoardItemComponent implements OnInit {


  @Input() board: InnerBoards
  form: FormGroup;
  id: number;
  dragItem  
  constructor(private boardService: BoardService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.board);
    this.form = new FormGroup({
    'task': new FormControl(null, Validators.required)
    
  })

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value.task);
      this.boardService.addTasks(this.id, this.board.id, this.form.value.task);
      this.form.reset();
    }
  }

  completeTask(task: Tasks) {
    this.boardService.completeTask(task);
  }

  onTaskDrop(event: any) {
    
    console.log(event.dragData);
    
    this.boardService.dragTasks(this.id, this.board.id, event.dragData);
  }

  dragStart(e: any) {
    console.log(e);
    this.dragItem = e.target
  }
}
