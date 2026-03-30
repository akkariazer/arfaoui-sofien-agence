import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { AGENCY_EMAIL, AGENCY_NAME, AGENCY_PHONE } from '../../core/data/agency.data';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css'
})
export class SiteFooterComponent {
  readonly i18n = inject(I18nService);
  readonly translation = this.i18n.translation;
  readonly agencyName = AGENCY_NAME;
  readonly agencyEmail = AGENCY_EMAIL;
  readonly agencyPhone = AGENCY_PHONE;
  readonly agencyPhoneHref = `tel:${AGENCY_PHONE.replaceAll(' ', '')}`;
}
