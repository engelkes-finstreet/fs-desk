import {resolver} from "@blitzjs/rpc"
import db from "db"
import { PlaceOfWorkSchema } from "../validations"

export default resolver.pipe(resolver.zod(PlaceOfWorkSchema), async (input, ctx) => {
  const placeOfWork = await db.placeOfWork.create({data: input})
})
