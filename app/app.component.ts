import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _appService: AppService) {
    this.loadData();
  }
  name = 'Angular 5';
  totalRows = 10;
  pageSize = 3;
  currentPage = 0;
  pageSizeOptions: number[] = [];
  displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  public dataSource: MatTableDataSource<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  loadData() {
    this._appService
      .getData(this.currentPage, this.pageSize)
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<Element>(res.data);
        setTimeout(() => {
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = res.total;
        });
      });
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
}

export interface Element {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}
