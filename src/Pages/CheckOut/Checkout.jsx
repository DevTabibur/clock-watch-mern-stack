import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <>
      <div className="checkout-parent">
      <h2>Welcome to Clock Website</h2>
      <form>
 <fieldset>
  <legend>Personalia:</legend>
  <label>First name:</label>
  <input type="text" id="fname" name="fname"/><br />
  <label>Last name:</label>
  <input type="text" id="lname" name="lname"/><br />
  <label>Email:</label>
  <input type="email" id="email" name="email"/><br />
  <label>Birthday:</label>
  <input type="date" id="birthday" name="birthday"/><br />
  <input type="submit" value="Submit"/>
 </fieldset>
</form>
      </div>
    </>
  )
}

export default Checkout