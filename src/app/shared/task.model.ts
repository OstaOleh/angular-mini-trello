
export class Board {
    constructor(public boardName: string, public id: number, public innerBoard: InnerBoards[] = [] ) {}
}

export class InnerBoards {
    constructor( public tasksName: string, public id: number, public tasks: Tasks[] = []) {}
}

export class Tasks {
    constructor( public taskName: string, public done: boolean = false) {}
}