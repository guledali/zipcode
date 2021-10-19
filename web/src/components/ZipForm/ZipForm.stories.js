import ZipForm from './ZipForm'

export const form = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div />
      <div className="mt-8 mx-auto">
        <ZipForm />
      </div>
      <div />
    </div>
  )
}

export default {
  title: 'Components/ZipForm',
  argTypes: { onSubmit: { action: 'clicked' } },
}
