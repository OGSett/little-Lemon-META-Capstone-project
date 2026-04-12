import { validateBooking } from './validation'
import { getAvailableTimes } from '../hooks/useBookingForm'
describe('validateBooking', () => {
  test('returns errors when fields are empty', () => {
    const result = validateBooking({
      fullName: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    })

    expect(result.fullName).toBe('Full name is required')
    expect(result.date).toBe('Date is required')
    expect(result.time).toBe('Time is required')
    expect(result.guests).toBe('Guests must be between 1 and 10')
    expect(result.occasion).toBe('Please select an occasion')
  })

  test('returns no errors for valid data', () => {
    const result = validateBooking({
      fullName: 'Youssef',
      date: '2026-04-12',
      time: '18:00',
      guests: 2,
      occasion: 'Birthday'
    })

    expect(result).toEqual({})
  })
})

describe('getAvailableTimes', () => {

  test('returns default times when no date is selected', () => {
    const result = getAvailableTimes(null)

    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBe(true)
  })

  test('returns even day times', () => {
    const result = getAvailableTimes('2026-04-12') // day = 12 (even)

    expect(result).toEqual(["17:00", "18:00", "19:00"])
  })

  test('returns odd day times', () => {
    const result = getAvailableTimes('2026-04-13') // day = 13 (odd)

    expect(result).toEqual(["18:00", "19:00", "20:00", "21:00"])
  })

})