/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StampsComponent } from './stamps.component';

describe('StampsComponent', () => {
  let component: StampsComponent;
  let fixture: ComponentFixture<StampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
