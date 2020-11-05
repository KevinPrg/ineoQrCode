import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export default ({ children }) => {
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(null)
  const [data3, setData3] = useState(null)

  return (
    <div>
      <DataContext.Provider value={{
        data1,
        setData1,
        data2,
        setData2,
        data3,
        setData3
      }}>
        {children}
      </DataContext.Provider>

    </div>
  )
}