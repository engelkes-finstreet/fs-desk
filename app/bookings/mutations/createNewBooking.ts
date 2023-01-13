import { resolver } from "@blitzjs/rpc"
import db from "db"
import { BookingSchema } from "../validations"

export default resolver.pipe(resolver.zod(BookingSchema), async (input) => {
  const booking = await db.booking.create({ data: {
      floorId: input.floorId,
      userId: input.userId
    }})
  return booking
})
