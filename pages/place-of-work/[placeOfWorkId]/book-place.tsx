import { BlitzPage } from "@blitzjs/next"

import { useMutation } from "@blitzjs/rpc"
import { SelectField } from "app/core/components/form/fields/select-field"
import Form from "app/core/components/form/form"
import createNewBooking from "app/bookings/mutations/createNewBooking"
import { BookingSchema } from "app/bookings/validations"
import { useQuery } from "@blitzjs/rpc"
import getAllFloors from "app/floors/queries/getAllFloors"
import { useCurrentUser } from "../../../app/core/hooks/useCurrentUser"
import { useRouter } from "next/router"

const NewBookingForm = () => {
  const [newBookingMutation] = useMutation(createNewBooking)
  const [floors] = useQuery(getAllFloors, undefined)
  const currentUser = useCurrentUser()
  console.log({ currentUser })
  const router = useRouter()

  return (
    <Form onSubmit={async (values) => {
      console.log({ values })
      await newBookingMutation(values)
      await router.push("/place-of-work/1")
    }} submitText={"Create"} initialValues={{ floorId: 1, userId: currentUser?.id }}>
      <SelectField
        name={"floorId"}
        label={"Floor"}
        options={floors.map((floor) => ({ value: floor.id, label: floor.name }))}
      />
    </Form>
  )
}

const BookPlacePage: BlitzPage = () => {


  return (
    <>
    <h1>
      BookPlacePage
    </h1>
    <NewBookingForm />
    </>
  )
}

export default BookPlacePage
