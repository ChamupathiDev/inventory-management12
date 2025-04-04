
import React from 'react'

function Additem() {
  return (
    <div>
    <div>
        <p className='auth_topic'>Add Item</p>
        <div className='from_vontiner'>
            <div className='from_sub_coon'>
                <form id='itemForm'>
                    <label for='itemId'>Item ID:</label><br/>
                    <input type='text' id='itemId' name='itemId' required/><br/>

                    <label for='itemName'>Item Name:</label><br/>
                    <input type='text' id='itemName' name='itemName' required/><br/>

                    <label for='itemCategory'>Item Category:</label><br/>
                    <select id='itemCategory' name='itemCategory' required>
                        <option value='' disabled>Select Item Category</option>

                    </select>

                </form>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Additem
