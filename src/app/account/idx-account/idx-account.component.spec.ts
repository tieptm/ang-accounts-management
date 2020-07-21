import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdxAccountComponent } from './idx-account.component';

describe('IdxAccountComponent', () => {
  let component: IdxAccountComponent;
  let fixture: ComponentFixture<IdxAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdxAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdxAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
