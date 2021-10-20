import PropTypes from 'prop-types'
import { Form, TextField, Submit, Label, FieldError } from '@redwoodjs/forms'
import { useForm } from '@redwoodjs/forms'
import { ExclamationCircleIcon, SearchIcon } from '@heroicons/react/solid'

const ZipForm = ({ onSubmit }) => {
  const formMethods = useForm()

  const hasAnyZipCodeError = (formMethods) => {
    return formMethods?.formState?.errors?.zipCode
  }

  return (
    <Form onSubmit={onSubmit} formMethods={formMethods} className="relative">
      <Label name="zipCode">ZipCode</Label>
      <TextField
        placeholder="122 34"
        errorClassName="block border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-96 p-2.5"
        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block  sm:text-sm border-gray-300 rounded-md w-96 p-2.5"
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
      {hasAnyZipCodeError(formMethods) && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none bottom-2">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
            data-testid="error-icon"
          />
        </div>
      )}
      <FieldError name="zipCode" className="block mt-2 text-sm text-red-600" />
      <Submit className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 float-right">
        Find place! <SearchIcon className="h-5 w-5 text-white ml-2" />
      </Submit>
    </Form>
  )
}

ZipForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ZipForm
