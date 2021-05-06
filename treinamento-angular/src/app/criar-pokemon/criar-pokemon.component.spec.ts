import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPokemonComponent } from './criar-pokemon.component';

describe('CriarPokemonComponent', () => {
  let component: CriarPokemonComponent;
  let fixture: ComponentFixture<CriarPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
