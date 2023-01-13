import { resolver } from "@blitzjs/rpc"
import db from "db"
import { FloorSchema } from "../validations"

export default resolver.pipe(resolver.zod(FloorSchema), async (input, ctx) => {
  console.log({ input })

  const floor = await db.floor.create({data: {
      name: input.name,
      placeOfWorkId: input.placeOfWorkId
    }})
  return floor
})
