import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdialogComponent } from './valdialog.component';

describe('ValdialogComponent', () => {
  let component: ValdialogComponent;
  let fixture: ComponentFixture<ValdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
