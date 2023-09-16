import { useEffect, useState } from 'react'

export type CustomerData = {
  id: string
  name: string
  weightInKg: number
  heightInCm: number
  goal: 'hypertrophy' | 'fat-loss'
  sex: 'M' | 'F'
}

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Record<string, CustomerData>>({})

  useEffect(() => {
    setCustomers(JSON.parse(localStorage.getItem('customers') || '{}'))
  }, [])

  const addCustomer = (newCustomer: CustomerData) => {
    const updatedCustomers = Object.assign(customers, {
      [newCustomer.id]: newCustomer,
    })
    setCustomers(updatedCustomers)

    localStorage.setItem('customers', JSON.stringify(updatedCustomers))
  }

  return { customers, addCustomer }
}
