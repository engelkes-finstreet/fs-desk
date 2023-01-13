import {resolver} from "@blitzjs/rpc"
import db from "db"
import * as z from "zod"

const PlaceOfWorkIdSchema = z.object({
  placeOfWorkId: z.number()
})

export default resolver.pipe(resolver.zod(PlaceOfWorkIdSchema), async (input, ctx) => {
  const { placeOfWorkId } = input
  const floors = await db.floor.findMany({ where: { placeOfWorkId } })
  return floors
})
