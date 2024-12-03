import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../service/reservation.service';
import { ReservationRequest } from '../../models/request/reservation-request';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  confirmationMessage: string | null = null;
  propertyTypes = ['FLAT', 'HOTEL_ROOM'];
  countries = ['USA', 'CAN', 'FRA', 'CHE', 'GBR'];
  userId: number = 0;
  propertyId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.prefillFormFromQueryParams();
  }

  private initializeForm(): void {
    this.reservationForm = this.fb.group({
      propertyType: [{ value: null, disabled: true }, Validators.required],
      buildingName: [{ value: null, disabled: true }, Validators.required],
      city: [{ value: null, disabled: true }, Validators.required],
      country: [{ value: null, disabled: true }, Validators.required],
      address: [{ value: null, disabled: true }, Validators.required],
      price: [{ value: null, disabled: true }, [Validators.required, Validators.min(1)]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
  }

  private prefillFormFromQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      this.propertyId = +params['propertyId'];
      this.userId = +params['userId'];
      this.reservationForm.patchValue({
        propertyType: params['propertyType'] || null,
        buildingName: params['buildingName'] || null,
        city: params['city'] || null,
        country: params['country'] || null,
        address: params['address'] || null,
        price: params['price'] || null,
      });
    });
  }

  submitReservation(): void {
    if (this.reservationForm.invalid) {
      return;
    }

    const reservation: ReservationRequest = this.reservationForm.value;
    reservation.userId = this.userId;
    reservation.propertyId = this.propertyId;

    this.reservationService.createReservation(reservation).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Reservation Created',
          text: 'Your reservation has been successfully created!',
          confirmButtonColor: '#2C3E50',
          confirmButtonText: 'OK',
        }).then(() => {
          this.router.navigate(['/reservation']);
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create reservation. Please try again.',
          confirmButtonText: 'OK',
        });
      },
    });
  }
}
