import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEchartsModule } from 'ngx-echarts';

import { GainsAndLossesComponent } from './gains-and-losses.component';
import { AccountListCardComponent }  from  '../../components/account-list-card/account-list-card.component';
import { BalancesChartComponent }  from  '../../components/balances-chart/balances-chart.component';
import { SharedModule } from '../../../shared/shared.module';

describe('GainsAndLossesComponent', () => {
  let component: GainsAndLossesComponent;
  let fixture: ComponentFixture<GainsAndLossesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        })
      ],
      declarations: [
        BalancesChartComponent,
        AccountListCardComponent,
        GainsAndLossesComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainsAndLossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
