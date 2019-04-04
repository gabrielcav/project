import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqLinhaPage } from './pesq-linha.page';

describe('PesqLinhaPage', () => {
  let component: PesqLinhaPage;
  let fixture: ComponentFixture<PesqLinhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesqLinhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesqLinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
