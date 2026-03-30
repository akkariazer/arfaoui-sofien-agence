import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-quote-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './quote-request.component.html',
  styleUrl: './quote-request.component.css'
})
export class QuoteRequestComponent {
  private readonly formBuilder = inject(FormBuilder);
  readonly i18n = inject(I18nService);
  readonly translation = this.i18n.translation;

  readonly sideIcons = ['check_circle', 'schedule', 'send'];

  readonly quoteForm = this.formBuilder.nonNullable.group({
    serviceId: ['', Validators.required],
    duration: ['', Validators.required]
  });

  requestSent = false;

  get selectedServiceTitle(): string {
    const selectedService = this.translation().home.services.find(
      (service) => service.id === this.quoteForm.getRawValue().serviceId
    );

    return selectedService?.title ?? '';
  }

  get selectedDurationLabel(): string {
    const selectedDuration = this.translation().quoteRequest.durations.find(
      (duration) => duration.value === this.quoteForm.getRawValue().duration
    );

    return selectedDuration?.label ?? '';
  }

  submitRequest(): void {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      this.requestSent = false;
      return;
    }

    this.requestSent = true;
  }

  resetForm(): void {
    this.quoteForm.reset({
      serviceId: '',
      duration: ''
    });
    this.requestSent = false;
  }
}
