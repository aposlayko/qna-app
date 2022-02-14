import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {ConfirmDialogComponent} from '../components/dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDeleteCategoryConfirmDialog(): Observable<boolean> {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {
        text: 'Do you really want to delete category with all questions?',
        confirmBtnTitle: 'Delete',
        cancelBtnTitle: 'Cancel',
      }
    }).afterClosed()
  }
}
