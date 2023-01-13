import db from "db"

export default async function() {
  const allFloors = await db.floor.findMany()
  return allFloors
}
