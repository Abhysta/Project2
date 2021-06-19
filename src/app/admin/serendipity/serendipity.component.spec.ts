import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerendipityComponent } from './serendipity.component';

describe('SerendipityComponent', () => {
  let component: SerendipityComponent;
  let fixture: ComponentFixture<SerendipityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerendipityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerendipityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
