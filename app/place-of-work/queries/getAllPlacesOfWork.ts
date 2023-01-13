import {resolver} from "@blitzjs/rpc"
import db from "db"

export default async function() {
  const placesOfWork = await db.placeOfWork.findMany()
  return placesOfWork
}
