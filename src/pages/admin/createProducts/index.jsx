import React from 'react'
import './createProducts.scss'

const CreateProducts = () => {
    return (
        <div className="container form__wrapper">
            <form action="" className='form'>
                <div className="form__inputs">
                    <input type="text" placeholder='Product Name'/>
                    <input type="text" placeholder='Product Price'/>
                </div>
                <div className="form__inputs">
                    <input type="text" placeholder='Product Category'/>
                    <input type="text" placeholder='Product Image'/>
                </div>
                <button>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProducts