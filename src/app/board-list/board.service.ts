import { Injectable } from "@angular/core";
import { Board, InnerBoards, Tasks } from "../shared/task.model";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./ls.service";

@Injectable()
export class BoardService {

    changedBoards: Subject<Board[]> = new Subject();
    returnBoards: Observable<Board[]> = this.changedBoards.asObservable();

    boards: Board[] = [];
    constructor(private lsService: LocalStorageService) { }

    returnBoardsArr() {
        return this.boards
    }

    setBoards(boards) {
        this.boards = boards;
    }

    createNewBoard(boardName: string) {
        this.boards.push(new Board(boardName, this.generateId()))
        this.lsService.clearLs();
        this.lsService.addItemToLs(this.boards)
        this.changedBoards.next(this.boards);
    }

    addInnerTask(innerName: string, id: number) {
        let board = this.getInnerBoard(id);
        board.innerBoard.push(new InnerBoards(innerName, this.generateId()))
        this.lsService.clearLs();
        this.lsService.addItemToLs(this.boards)
        this.changedBoards.next(this.boards);
    }

    addTasks(boardId: number, tasksId: number, taskName) {
        let board = this.getInnerBoard(boardId);
        for (let innerBoard of board.innerBoard) {
            if (innerBoard.id === +tasksId) {
                innerBoard.tasks.push(new Tasks(taskName));
            }
        }
        
        this.lsService.clearLs();
        this.lsService.addItemToLs(this.boards)
        this.changedBoards.next(this.boards);
    }

    dragTasks(boardId: number, tasksId: number, task) {
        let board = this.getInnerBoard(boardId);
        for (let innerBoard of board.innerBoard) {
            let i = innerBoard.tasks.indexOf(task);
            if (i > -1) {
                innerBoard.tasks.splice(i, 1)
            }
            if (innerBoard.id === +tasksId) {
                innerBoard.tasks.push(new Tasks(task.taskName, task.done));
            }
        }
        this.lsService.clearLs();
        this.lsService.addItemToLs(this.boards)
        this.changedBoards.next(this.boards);
    }

    completeTask(task) {
        task.done = !task.done;
        this.lsService.clearLs();
        this.lsService.addItemToLs(this.boards)
    }
    generateId() {
        return Math.ceil(Math.random() * 1000000)
    }

    getInnerBoard(id: number) {
        for (let board of this.boards) {
            if (board.id === +id) {
                return board
            }
        }
    }
}