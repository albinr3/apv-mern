import { Outlet } from "react-router-dom"

const Authlayout = () => {
  return (
    <>
        <h1>Desde Auth Layout</h1>
        < Outlet />
    </>
  )
}

export default Authlayout