import React from 'react'
import './Addproduct.css'

function Addproduct() {
    return (
        <div>
            <form  >
                <div className='box'>
                    <h3>Add product</h3>

                    <label>Name</label>
                    <input type="text"  ></input> <br />
                    <label>type</label>
                    <input type="text"  ></input><br />
                    <label>quantity</label>
                    <input type="text" ></input><br />
                    <label>category</label>
                    <input type="text" ></input><br />
                    <button>Submit</button>

                </div>
            </form>

        </div>
    )
}

export default Addproduct