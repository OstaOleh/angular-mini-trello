import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

    checkLs() {
        let ls;
        if (localStorage.getItem('boards') === null) {
            ls = [];
        }else {
            ls = JSON.parse(localStorage.getItem('boards'))
        }
        return ls
    }

    addItemToLs(board) {
        const ls = this.checkLs();
        ls.push(...board)
        localStorage.setItem('boards', JSON.stringify(ls));
    }

  

    clearLs() {
        const ls = this.checkLs();
        localStorage.setItem('boards', JSON.stringify([]))
    }
}