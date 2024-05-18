import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDisplayComponent } from './people-display.component';

describe('PeopleDisplayComponent', () => {
  let component: PeopleDisplayComponent;
  let fixture: ComponentFixture<PeopleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
