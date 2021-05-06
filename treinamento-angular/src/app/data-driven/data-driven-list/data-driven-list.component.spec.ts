import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenListComponent } from './data-driven-list.component';

describe('DataDrivenListComponent', () => {
  let component: DataDrivenListComponent;
  let fixture: ComponentFixture<DataDrivenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
