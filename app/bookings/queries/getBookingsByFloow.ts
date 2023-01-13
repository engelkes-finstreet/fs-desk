import { resolver } from "@blitzjs/rpc"
import db from "db"
import * as z from "zod"

const FloorIdSchema = z.object({
  floorId: z.number(),
})


export default resolver.pipe(resolver.zod(FloorIdSchema), async (input) => {
  const floorBookings = await db.booking.findMany({
    where: {
      floorId: input.floorId
    }
  })
  return floorBookings
})
