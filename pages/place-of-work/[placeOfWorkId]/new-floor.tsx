import { useParam, useParams } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { LabeledTextField } from "app/core/components/form/fields/labeled-text-field"
import Form from "app/core/components/form/form"
import createNewFloor from "app/floors/mutations/createNewFloor"
import { FloorSchema } from "app/floors/validations"
import { useRouter } from "next/router"

const NewFloorForm = ({placeOfWorkId}) => {
  const [newFloorMutation] = useMutation(createNewFloor)
  const router = useRouter()

  return (
    <Form onSubmit={async (values) => {
      console.log({ values })
      await newFloorMutation(values)
      await router.push('/place-of-work/1')
    }} submitText={"Create"} initialValues={{ name: "", placeOfWorkId: 1 }}>
      <LabeledTextField name={"name"} label={"Floor name"}/>
    </Form>
  )
}

const NewFloorPage = () => {
  const placeOfWorkId = useParam("placeOfWorkId", "number")

  return (
    <>
      <h1>NewFloorPage</h1>
      <NewFloorForm placeOfWorkId={placeOfWorkId}/>
    </>
  )
}

export default NewFloorPage
