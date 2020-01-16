import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { SortHeaderComponent } from './sort-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const matColumnDataDefs = [
  {
    id: 'name',
    headerText: `Super \nDuper Gorila`
  },
  {
    id: 'age',
    headerText: 'Age'
  }
];

const gorilas = [
  {
    name: 'Koko',
    age: 46
  },
  {
    name: 'Magilla',
    age: 31
  }
];

const dataSource = new MatTableDataSource<{name: string; age:number}>(gorilas);

const displayedColumns = ['name', 'age'];

storiesOf('SortHeader', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SortHeaderComponent],
      imports: [
        BrowserAnimationsModule,
        IconModule,
        MatSortModule,
        MatTableModule],
    })
  )
  .add(
    'default',
    () => ({
      template: `
      <mat-table #table [dataSource]="dataSource" matSort matSortActive="name" matSortDirection="asc" matSortDisableClear>
        <ng-container *ngFor="let matColumnDataDef of matColumnDataDefs">
          <ng-container [matColumnDef]="matColumnDataDef.id">
            <mat-header-cell *matHeaderCellDef gor-sort-header>
              {{ matColumnDataDef.headerText }}
            </mat-header-cell>
            <mat-cell *matCellDef="let gorila">
              <span style="width: 100px">{{ gorila[matColumnDataDef.id] }}</span>
            </mat-cell>
          </ng-container>
        </ng-container>
        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
      `,
      props: {
        matColumnDataDefs: matColumnDataDefs,
        dataSource: dataSource,
        displayedColumns: displayedColumns
      },
    })
  )
