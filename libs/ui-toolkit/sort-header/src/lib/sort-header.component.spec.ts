import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';

import { SortHeaderComponent } from './sort-header.component';

@Component({
  selector: 'gor-test-container',
  template: `
    <div>
      <mat-table #table [dataSource]="gorilas" matSort matSortActive="date" matSortDirection="asc" matSortDisableClear>
        <ng-container *ngFor="let matColumnDataDef of matColumnDataDefs; let idx = index">
          <ng-container [matColumnDef]="matColumnDataDef.id">
            <mat-header-cell *matHeaderCellDef gor-sort-header [arrowWhite]="arrowWhite" [disabled]="disabled">
              {{ matColumnDataDef.headerText }}
            </mat-header-cell>
            <mat-cell *matCellDef="let gorila">
              {{ gorila[matColumnDataDef.id] }}
            </mat-cell>
          </ng-container>
        </ng-container>
        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </div>
  `
})
class TestHostComponent {
  public gorilas = [
    {
      name: 'Koko',
      age: 46
    },
    {
      name: 'Magilla',
      age: 31
    }
  ];
  public matColumnDataDefs = [
    {
      id: 'name',
      headerText: 'Name'
    },
    {
      id: 'age',
      headerText: 'Age'
    }
  ];
  public displayedColumns = ['name', 'age'];
  public arrowWhite = true;
  public disabled = false;
}

describe('SortHeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatSortModule, MatTableModule, NoopAnimationsModule, IconModule],
      declarations: [SortHeaderComponent, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const sortHeader = fixture.debugElement.query(By.directive(SortHeaderComponent));
    expect(sortHeader).toBeTruthy();
  });

  it('should display arrow, if enabled', () => {
    const arrow = fixture.debugElement.query(By.css('ui-icon'));
    expect(arrow).toBeTruthy();
  });

  it('should not display arrow, if disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const arrow = fixture.debugElement.query(By.css('ui-icon'));
    expect(arrow).toBeFalsy();
  });

  it('should display white arrow if arrowWhite input is true', () => {
    const arrow = fixture.debugElement.query(By.css('ui-icon'));
    expect(arrow.attributes.icon).toEqual('arrow_up_white');
  });

  it('should display black arrow if arrowWhite input is false', () => {
    component.arrowWhite = false;
    fixture.detectChanges();
    const arrow = fixture.debugElement.query(By.css('ui-icon'));
    expect(arrow.attributes.icon).toEqual('arrow_up');
  });
});
