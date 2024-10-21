export class FlightBooking {
  bookFlight(destination, date) {
    console.log(
      `Reserva de voo confirmada para ${destination} na data ${date}.`
    );
  }
}
export class HotelBooking {
  bookHotel(destination, checkIn, checkOut) {
    console.log(
      `Hotel reservado em ${destination} de ${checkIn} a ${checkOut}.`
    );
  }
}
export class CarRental {
  rentCar(destination, rentalDate, returnDate) {
    console.log(
      `Carro alugado em ${destination} de ${rentalDate} até ${returnDate}.`
    );
  }
}
