import { Link, routes } from '@redwoodjs/router'
import Header from 'src/components/Header'
import {
  Form,
  NumberField,
  TextField,
  Submit,
  Label,
  FieldError,
} from '@redwoodjs/forms'

const FindPlacePage = () => {
  const onSubmit = (input) => {
    console.log(input)
  }
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2">
        <div />
        <div className="mt-8 mx-auto">
          <Form onSubmit={onSubmit}>
            <Label name="zipCode">ZipCode</Label>
            <TextField
              errorClassName="block border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-96 p-2.5"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block  sm:text-sm border-gray-300 rounded-md w-96 p-2.5"
              transformValue={(str) => parseInt(str.replace(/,/g, ''), 10)}
              name={'zipCode'}
              maxLength={'5'}
              minLength={'5'}
              validation={{
                required: true,
                pattern: {
                  value: /^\d{5}$/,
                  message:
                    'Must be least 5 digits long and cannot contain any letters',
                },
              }}
            />
            <FieldError
              name="zipCode"
              className="block mt-2 text-sm text-red-600"
            />
            <Submit className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 float-right">
              Find place!
            </Submit>
          </Form>
        </div>
        <div />
      </div>
    </div>
  )
}

export default FindPlacePage
