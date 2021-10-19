import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import ZipForm from './ZipForm'

describe('ZipForm', () => {
  it('renders successfully', () => {
    expect(() => {
      const onSubmit = jest.fn()

      render(<ZipForm onSubmit={onSubmit} />)
    }).not.toThrow()
  })

  it('does not submit when required fields are empty', async () => {
    const onSubmit = jest.fn()

    render(<ZipForm onSubmit={onSubmit} />)

    const submitButton = screen.getByText('Find place!')

    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('submits when required fields are entered', async () => {
    const zipCode = '12344'

    const onSubmit = jest.fn()

    render(<ZipForm onSubmit={onSubmit} />)

    const zipField = screen.getByPlaceholderText('122 34')
    const submitButton = screen.getByText('Find place!')

    await waitFor(() => userEvent.type(zipField, zipCode))
    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalled()
    expect(onSubmit).toHaveBeenCalledWith(
      { zipCode },
      expect.objectContaining({
        _reactName: 'onSubmit',
        type: 'submit',
      })
    )
  })
})
