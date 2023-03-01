import React, { lazy, useState } from 'react';

const First = lazy(() => import('./first'));
const Update = lazy(() => import('./update'));

export default function SignUp() {
    const [isReg, setReg] = useState(First.isReg);
    console.log(First.isReg);

    function isReGg()
    {
        while(true)
        {
            return console.log(isReg);
        }
    }
    return (
        <div>
            <First/>
            {
                console.log(isReGg)
            }
        </div>
    );
}
