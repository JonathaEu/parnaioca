import React, { useState } from "react";


const CkeckButton = () => {

    const [checkin, setCheckin] = useState(false);
    const [checkout, setCheckout] = useState(false);

    console.log('isCheckedIn', checkin)
    console.log('isCheckedOut', checkout)

    const handleCheckin = () => {
        setCheckin(true);

    }

    const handleCheckout = () => {
        setCheckout(true);
    }

    return (
        <div className="">
            <button onClick={handleCheckin}>Check in</button>
            <button onClick={handleCheckout}>Check out</button>

        </div>
    )
}

export default CkeckButton;