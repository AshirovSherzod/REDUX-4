import React, { useState } from 'react'
import './createProducts.scss'
import { usePostProductMutation } from '../../../context/apiSlice'

let initialState = {
    title: "",
    price: "",
    image: "",
    category: ""
}

const CreateProducts = () => {

    const [formData, setFormData] = useState(initialState)
    const [createProduct, {data}] = usePostProductMutation()

    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === "price") {
            setFormData((prev) => ({ ...prev, [name]: +value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleCreateProduct = e => {
        e.preventDefault()
        createProduct(formData)
        setFormData(initialState)
    }

    return (
        <div className="container form__wrapper">
            <form action="" onSubmit={handleCreateProduct} className='form'>
                <h2>Create Products</h2>
                <div className="form__inputs">
                    {Object.keys(initialState)?.map((inp) => (
                        <input
                            key={inp}
                            className={`form__input ${inp}`}
                            type="text"
                            name={inp}
                            placeholder={inp}
                            value={formData[inp]}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <div className="form__btns">
                    <button>Create Product</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProducts