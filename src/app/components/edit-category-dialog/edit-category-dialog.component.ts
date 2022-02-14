import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Category} from '../../interfaces/category.interface';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public category: Category) {
  }

  ngOnInit(): void {
  }

}
