import { BlitzPage } from "@blitzjs/next"
import getAllPlacesOfWork from "../../app/place-of-work/queries/getAllPlacesOfWork"
import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"

const ShowAllPlacesOfWork: BlitzPage = () => {
  const [placesOfWork] = useQuery(getAllPlacesOfWork, undefined)
  const router = useRouter()

  const handlePlaceOfWorkClick = async (placeOfWorkId) => {
    await router.push(`/place-of-work/${placeOfWorkId}`)
  }

  return (
    <>
      <ul>
        {placesOfWork.map((placeOfWork) => (
          <li key={placeOfWork.id} onClick={() => handlePlaceOfWorkClick(placeOfWork.id)}>
            {placeOfWork.location}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ShowAllPlacesOfWork
