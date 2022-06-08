import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _appService: AppService) {}
  name = 'Angular 5';
  displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  public dataSource: MatTableDataSource<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this._appService.getData(1, 3).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Element>(res.data);
      console.log(res.data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}
