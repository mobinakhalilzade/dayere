import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterDataService} from '../../helper/routerData.service';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletComponent ],
      imports:[ RouterTestingModule],
      providers:[RouterDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
