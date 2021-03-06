import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NewTransactionDialogComponent} from './new-transaction-dialog/new-transaction-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CurrencyPipe} from './currency.pipe';
import {DatumPipe} from './datum.pipe';
import {RouterModule, Routes} from '@angular/router';
import {ScenarioListComponent} from './scenario-list/scenario-list.component';
import {LoginComponent} from './login/login.component';
import {Layout1Component} from './layout1/layout1.component';
import {
  MatCheckboxModule,
  MatDatepickerModule, MatIconModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from "@angular/material";
import {Layout, Scenario} from "./data.service";
import {Route, ScenarioInstruction} from "./routes.enum";
import {Layout2Component} from './layout2/layout2.component';
import {Layout3Component} from './layout3/layout3.component';
import {Layout4Component} from './layout4/layout4.component';
import { TesterListComponent } from './tester-list/tester-list.component';
import { AngularHeatmapModule } from 'ng-heatmap';
import { LayoutComponent } from './layout/layout.component';
import { DialogL2Component } from './dialog-l2/dialog-l2.component';
import { DialogL3Component } from './dialog-l3/dialog-l3.component';
import { Layout5Component } from './layout5/layout5.component';
import { DialogL5Component } from './dialog-l5/dialog-l5.component';
import {OverlayContainer} from "@angular/cdk/overlay";
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import {DeviceDetectorModule} from "ngx-device-detector";

export const appRoutes: Routes =
  [
    {path: '', redirectTo: Route.LOGIN, pathMatch: 'full'},
    {path: Route.SCENARIO_LIST, component: ScenarioListComponent},
    {path: Route.LOGIN, component: LoginComponent},
    {path: Route.TESTER_LIST, component: TesterListComponent},

    {path: Route.L1S1, component: Layout1Component, data: {mobile: false, layout: Layout.ONE, scenario: Scenario.ONE, nextPage: Route.L1S2, ScenarioInstructions: ScenarioInstruction.ONE}},
    {path: Route.L1S2, component: Layout1Component, data: {mobile: false, layout: Layout.ONE, scenario: Scenario.THREE, nextPage: Route.L1S3, ScenarioInstructions: ScenarioInstruction.THREE}},
    {path: Route.L1S3, component: Layout1Component, data: {mobile: false, layout: Layout.ONE, scenario: Scenario.TWO, nextPage: Route.L1S4, ScenarioInstructions: ScenarioInstruction.TWO}},
    {path: Route.L1S4, component: Layout1Component, data: {mobile: false, layout: Layout.ONE, scenario: Scenario.FOUR, nextPage: Route.SCENARIO_LIST, ScenarioInstructions: ScenarioInstruction.FOUR}},

    {path: Route.L2S1, component: Layout2Component, data: {mobile: false, layout: Layout.TWO, scenario: Scenario.TWO, nextPage: Route.L2S2, ScenarioInstructions: ScenarioInstruction.TWO}},
    {path: Route.L2S2, component: Layout2Component, data: {mobile: false, layout: Layout.TWO, scenario: Scenario.FOUR, nextPage: Route.L2S3, ScenarioInstructions: ScenarioInstruction.FOUR}},
    {path: Route.L2S3, component: Layout2Component, data: {mobile: false, layout: Layout.TWO, scenario: Scenario.THREE, nextPage: Route.L2S4, ScenarioInstructions: ScenarioInstruction.THREE}},
    {path: Route.L2S4, component: Layout2Component, data: {mobile: false, layout: Layout.TWO, scenario: Scenario.ONE, nextPage: Route.SCENARIO_LIST, ScenarioInstructions: ScenarioInstruction.ONE}},

    {path: Route.L3S1, component: Layout3Component, data: {mobile: false, layout: Layout.THREE, scenario: Scenario.THREE, nextPage: Route.L3S2, ScenarioInstructions: ScenarioInstruction.THREE}},
    {path: Route.L3S2, component: Layout3Component, data: {mobile: false, layout: Layout.THREE, scenario: Scenario.TWO, nextPage: Route.L3S3, ScenarioInstructions: ScenarioInstruction.TWO}},
    {path: Route.L3S3, component: Layout3Component, data: {mobile: false, layout: Layout.THREE, scenario: Scenario.ONE, nextPage: Route.L3S4, ScenarioInstructions: ScenarioInstruction.ONE}},
    {path: Route.L3S4, component: Layout3Component, data: {mobile: false, layout: Layout.THREE, scenario: Scenario.FOUR, nextPage: Route.SCENARIO_LIST, ScenarioInstructions: ScenarioInstruction.FOUR}},

    {path: Route.L4S1, component: Layout4Component, data: {mobile: true, layout: Layout.FOUR, scenario: Scenario.ONE, nextPage: Route.L4S2, ScenarioInstructions: ScenarioInstruction.ONE}},
    {path: Route.L4S2, component: Layout4Component, data: {mobile: true, layout: Layout.FOUR, scenario: Scenario.TWO, nextPage: Route.L4S3, ScenarioInstructions: ScenarioInstruction.TWO}},
    {path: Route.L4S3, component: Layout4Component, data: {mobile: true, layout: Layout.FOUR, scenario: Scenario.THREE, nextPage: Route.L4S4, ScenarioInstructions: ScenarioInstruction.THREE}},
    {path: Route.L4S4, component: Layout4Component, data: {mobile: true, layout: Layout.FOUR, scenario: Scenario.FOUR, nextPage: Route.SCENARIO_LIST, ScenarioInstructions: ScenarioInstruction.FOUR}},

    {path: Route.L5S1, component: Layout5Component, data: {mobile: true, layout: Layout.FIVE, scenario: Scenario.FOUR, nextPage: Route.L5S2, ScenarioInstructions: ScenarioInstruction.FOUR}},
    {path: Route.L5S2, component: Layout5Component, data: {mobile: true, layout: Layout.FIVE, scenario: Scenario.ONE, nextPage: Route.L5S3, ScenarioInstructions: ScenarioInstruction.ONE}},
    {path: Route.L5S3, component: Layout5Component, data: {mobile: true, layout: Layout.FIVE, scenario: Scenario.THREE, nextPage: Route.L5S4, ScenarioInstructions: ScenarioInstruction.THREE}},
    {path: Route.L5S4, component: Layout5Component, data: {mobile: true, layout: Layout.FIVE, scenario: Scenario.TWO, nextPage: Route.SCENARIO_LIST, ScenarioInstructions: ScenarioInstruction.TWO}},
  ];

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionDialogComponent,
    CurrencyPipe,
    DatumPipe,
    ScenarioListComponent,
    LoginComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    TesterListComponent,
    LayoutComponent,
    DialogL2Component,
    DialogL3Component,
    Layout5Component,
    DialogL5Component,
    HelpDialogComponent
  ],
  imports: [
    DeviceDetectorModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AngularHeatmapModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  providers: [MatDatepickerModule, {provide: Window, useValue: window}],
  bootstrap: [AppComponent],
  entryComponents: [NewTransactionDialogComponent, DialogL2Component, DialogL3Component, DialogL5Component, HelpDialogComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme');
  }
}
