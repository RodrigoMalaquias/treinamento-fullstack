import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenListComponent } from './template-driven-list.component';

describe('TemplateDrivenListComponent', () => {
  let component: TemplateDrivenListComponent;
  let fixture: ComponentFixture<TemplateDrivenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
