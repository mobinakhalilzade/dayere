import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskTextBoxComponent } from './mask-text-box.component';

describe('MaskTextBoxComponent', () => {
  let component: MaskTextBoxComponent;
  let fixture: ComponentFixture<MaskTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
