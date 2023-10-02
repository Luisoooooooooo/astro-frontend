import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssComponent } from './iss.component';

describe('IssComponent', () => {
  let component: IssComponent;
  let fixture: ComponentFixture<IssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssComponent]
    });
    fixture = TestBed.createComponent(IssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
