import * as z from "zod"

export const PlaceOfWorkSchema = z.object({
  location: z.string().nonempty()
})
