import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AGENCY_NAME } from './core/data/agency.data';
import { I18nService } from './core/i18n/i18n.service';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly i18n = inject(I18nService);
  readonly currentLanguage = this.i18n.currentLanguage;
  readonly direction = this.i18n.direction;
  readonly agencyName = AGENCY_NAME;
}
