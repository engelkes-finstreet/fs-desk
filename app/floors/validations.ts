import * as z from "zod"

export const FloorSchema = z.object({
  name: z.string().nonempty(),
  placeOfWorkId: z.number()
})
