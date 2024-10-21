import { FlightBooking, CarRental, HotelBooking } from "./classes.js";

class TravelFacade {
  constructor() {
    this.flightBooking = new FlightBooking();
    this.hotelBooking = new HotelBooking();
    this.carRental = new CarRental();
  }

  bookTrip(
    destination,
    flightDate,
    checkInDate,
    checkOutDate,
    carRentalStart,
    carRentalEnd
  ) {
    console.log(`Iniciando o processo de reserva para ${destination}...\n`);

    this.flightBooking.bookFlight(destination, flightDate);

    this.hotelBooking.bookHotel(destination, checkInDate, checkOutDate);

    this.carRental.rentCar(destination, carRentalStart, carRentalEnd);

    console.log("\nReserva de viagem completa!");
  }
}

export default TravelFacade;
