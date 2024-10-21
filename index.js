import TravelFacade from "./travelFacade.js";

const travelFacade = new TravelFacade();

const destination = "Londres";
const flightDate = "2025-10-03";
const checkInDate = "2025-10-03";
const checkOutDate = "2025-10-03";
const carRentalStart = "2025-10-03";
const carRentalEnd = "2025-10-03";

travelFacade.bookTrip(
  destination,
  flightDate,
  checkInDate,
  checkOutDate,
  carRentalStart,
  carRentalEnd
);
