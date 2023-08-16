import React from 'react'

export default function Reserva() {
    return (

        <>
            <div className='grid grid-cols-2'>
                <div>                <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Default select
                </label>

                    <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            ">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Default select
                    </label>

                    <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            ">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>

                    </select>
                </div>
            </div>
        </>

    )
}
