import React from 'react'
import m from './profileInfo.module.css'

const Contact = ({ key, contactName, contactValue }) => {
    return (
        <>
            {/* {contactName && contactValue && */}
            <div key={key}>
                <div className={m.contactName}>
                    {contactName}: {contactValue}
                </div>
            </div>

            
        </>
    )
}

export default Contact