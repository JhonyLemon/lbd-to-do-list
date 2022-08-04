import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDynamicComponent } from './notification-dynamic.component';

describe('NotificationDynamicComponent', () => {
  let component: NotificationDynamicComponent;
  let fixture: ComponentFixture<NotificationDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
