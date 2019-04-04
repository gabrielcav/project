import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqPontoPage } from './pesq-ponto.page';

describe('PesqPontoPage', () => {
  let component: PesqPontoPage;
  let fixture: ComponentFixture<PesqPontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesqPontoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesqPontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
