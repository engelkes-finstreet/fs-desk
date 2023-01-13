import * as z from "zod"
export const BookingSchema = z.object({
  floorId: z.number(),
  userId: z.number()
});
