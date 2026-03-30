import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { AGENCY_EMAIL, AGENCY_PHONE } from '../../core/data/agency.data';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly i18n = inject(I18nService);
  readonly translation = this.i18n.translation;
  readonly infoCardIcons = ['verified_user', 'support_agent', 'task_alt'];
  readonly agencyEmail = AGENCY_EMAIL;
  readonly agencyPhone = AGENCY_PHONE;
  readonly agencyPhoneHref = `tel:${AGENCY_PHONE.replaceAll(' ', '')}`;
}
