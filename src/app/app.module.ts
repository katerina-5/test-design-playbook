import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestContentComponent } from './test-content/test-content.component';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { FullResultContainerComponent } from './full-result-container/full-result-container.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsCardComponent } from './results-card/results-card.component';

import { MatMenuModule } from '@angular/material';
import { TestResultTableComponent } from './test-result-table/test-result-table.component';
import { TestResultRowComponent } from './test-result-row/test-result-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarThumbnailComponent,
    GetStartedComponent,
    ThxPageComponent,
    TestContentComponent,
    SidebarComponent,
    FullResultContainerComponent,
    ResultItemComponent,
    AdminNavbarComponent,
    ResultsPageComponent,
    ResultsCardComponent,
    TestResultTableComponent,
    TestResultRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
