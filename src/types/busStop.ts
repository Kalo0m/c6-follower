import { z } from "zod"

export const BusStopSchema = z.object({
  stopareas: z.object({
    id: z.number(),
    externalCode: z.string(),
    name: z.string(),
    accessible: z.boolean(),
    modeAffichage: z.string(),
    coord: z.object({
      lat: z.number(),
      lng: z.number(),
      width: z.number(),
      angle: z.number()
    }),
    ville: z.object({
      id: z.number(),
      name: z.string(),
      externalCode: z.string(),
      coord: z.object({ lat: z.number(), lng: z.number() })
    }),
    isEdit: z.boolean()
  }),
  lignes: z.array(
    z.object({
      id: z.number(),
      externalCode: z.string(),
      name: z.string(),
      shortName: z.string(),
      modeAffichage: z.string(),
      directions: z.array(
        z.object({ id: z.number(), externalCode: z.string(), name: z.string() })
      ),
      params: z.string(),
      ordre: z.number(),
      type: z.object({ id: z.number(), name: z.string() })
    })
  ),
  nextDeparture: z.object({
    "128_1": z.array(z.string()),
    "128_2": z.array(z.string())
  })
})
