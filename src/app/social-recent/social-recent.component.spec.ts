import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRecentComponent } from './social-recent.component';

describe('SocialRecentComponent', () => {
  let component: SocialRecentComponent;
  let fixture: ComponentFixture<SocialRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
