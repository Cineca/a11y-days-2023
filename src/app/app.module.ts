import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PaginaAccessibileComponent } from './pagina-accessibile/pagina-accessibile.component';
import { ChipA11yComponent } from './components/chip-a11y/chip-a11y.component';
import { ExpansionA11yComponent } from './components/expansion-a11y/expansion-a11y.component';
import { CheckboxA11yComponent } from './components/checkbox-a11y/checkbox-a11y.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { InputA11yComponent } from './components/input-a11y/input-a11y.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MenuA11yComponent } from './components/menu-a11y/menu-a11y.component';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PaginaAccessibileComponent,
    ChipA11yComponent,
    ExpansionA11yComponent,
    CheckboxA11yComponent,
    FooterComponent,
    InputA11yComponent,
    MenuA11yComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
