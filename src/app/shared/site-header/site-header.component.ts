import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import { AGENCY_NAME } from '../../core/data/agency.data';
import { I18nService } from '../../core/i18n/i18n.service';
import { LanguageCode } from '../../core/models/agency.models';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {
  readonly i18n = inject(I18nService);
  readonly translation = this.i18n.translation;
  readonly agencyName = AGENCY_NAME;
  readonly languages = this.i18n.supportedLanguages;

  changeLanguage(language: LanguageCode): void {
    this.i18n.setLanguage(language);
  }
}
