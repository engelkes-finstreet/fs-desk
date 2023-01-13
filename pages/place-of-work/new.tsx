import { BlitzPage } from "@blitzjs/next"
import Form from "../../app/core/components/form/form"
import { PlaceOfWorkSchema } from "../../app/place-of-work/validations"
import { useMutation } from "@blitzjs/rpc"
import createNewPlaceOfWork from "../../app/place-of-work/mutations/createNewPlaceOfWork"
import { LabeledTextField } from "../../app/core/components/form/fields/labeled-text-field"
import { useRouter } from 'next/router'

const NewPlaceOfWorkForm = () => {
  const [newPlaceOfWorkMutation] = useMutation(createNewPlaceOfWork)
  const router = useRouter()
  return (
    <Form onSubmit={async (values) => {
      await newPlaceOfWorkMutation(values)
      await router.push('/place-of-work')
    }} schema={PlaceOfWorkSchema} submitText={"Create"}>
      <LabeledTextField name={"location"} label={"Place of Work location"}/>
    </Form>
  )
}

const NewPlaceOfWorkPage: BlitzPage = () => {
  return (
    <>
      <h1>NewPlaceOfWorkPage</h1>
      <NewPlaceOfWorkForm/>
    </>
  )
}

export default NewPlaceOfWorkPage
