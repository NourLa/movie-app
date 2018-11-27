import React, { Component } from 'react';
import './component1.css'


class Nav extends Component {
 
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <div>
     <form>
       <input
         placeholder="Search for..."
         value={this.props.filterText}
         ref="filterTextInput"
         onChange={this.handleChange}
       />
  <button type="submit">Search</button>
   
     </form>
{/* <div className="Raiting">
<h1>Pure CSS Star Rating Widget</h1>
<fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label className= "full" htmlFor="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label className= "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label className= "full" htmlFor="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label className= "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label className= "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
</div> */}

     </div>
   )
 }
  }
  



  
  export default Nav;

