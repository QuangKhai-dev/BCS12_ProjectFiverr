import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { congViecService } from '../../service/congViec.service'
const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  console.log(searchParam.get("tenCongViec"))
  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec")
    congViecService.layCongViecTheoTen(tenCongViec).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [searchParam.get("tenCongViec")])
  return (
    <div>ListJobPage</div>
  )
}

export default ListJobPage