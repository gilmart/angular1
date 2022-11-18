import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerhabitacionComponent } from './bannerhabitacion.component';

describe('BannerhabitacionComponent', () => {
  let component: BannerhabitacionComponent;
  let fixture: ComponentFixture<BannerhabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerhabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerhabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
