import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHumidityComponent } from './temp-humidity.component';

describe('TempHumidityComponent', () => {
  let component: TempHumidityComponent;
  let fixture: ComponentFixture<TempHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempHumidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
