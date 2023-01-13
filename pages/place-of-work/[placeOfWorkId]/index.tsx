import { BlitzPage, useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import getFloorsByPlaceOfWork from "../../../app/floors/queries/getFloorsByPlaceOfWork"
import getBookingsByFloow from "../../../app/bookings/queries/getBookingsByFloow"

const PlaceOfWorkDetailPage: BlitzPage = () => {
  const placeOfWorkId = useParam("placeOfWorkId", "number")
  const [floors] = useQuery(getFloorsByPlaceOfWork, { placeOfWorkId: placeOfWorkId! })
  const [bookings] = useQuery(getBookingsByFloow, { floorId: 1 })

  return (
    <>
      <h1>Floors</h1>
      <ul>
        {floors.map((floor) => (
          <>
          <li key={floor.id}>{floor.name}</li>
          <div>
            {bookings.map((booking) => (
              <div key={booking.id}>
                {booking.userId}
              </div>
            ))}
          </div>
          </>
        ))}
      </ul>
    </>
  )
}

export default PlaceOfWorkDetailPage
