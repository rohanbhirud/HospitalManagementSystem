import React from 'react'
import AdminSidebar from './AdminSidebar'

const Admin = () => {
    return (

        <div className='row'>
            <div className='col col-3'>
                <AdminSidebar />
            </div>
            <div className='col'>
                Admin
            </div>
        </div>

    )
}

export default Admin