
import React, { Component } from 'react';
import './component2.css';
import { Button,Popover,Tooltip,Modal } from 'react-bootstrap';
import StarRatingComponent from '../../../node_modules/react-star-rating-component';

class Movie extends Component {
  constructor(){
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove=this.remove.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.editmodalshow2= this.editmodalshow2.bind(this);
    this.state ={
      movies: movies,
      rating: 1,
      input: '',
      show: false,
      showmodal2: false,
     titlevalue :'',
     yearvalue : '',
     videovalue:'',
     ratingvalue: 0,
    }
  }
  handleClose2() {
    this.setState({ showmodal2: false  });
  }
  editmodalshow2(e) {
    this.setState({ showmodal2: true ,
      titlevalue: e.target.value,
      yearvalue :e.target.id,
      videovalue: e.target.src,
      ratingvalue: e.target.tabIndex,
    });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue, ratingvalue: nextValue} );
  }
  handleSubmit(e) {
    e.preventDefault();
    const
    { movies } = this.state,
    title = this.refs.title.value,
    year = this.refs.year.value,
    rating =this.state.rating,
    video = this.refs.video.value;
    this.setState({
      movies: [...movies, {
        title,
        year,
        rating,
        video 
      }]
    }, () => {
      this.refs.title.value = '';
      this.refs.year.value = '';
      this.refs.video.value = '';
    });
  }
  remove(e){
      this.setState({
      movies : movies.filter(function(el,id ){    return id != e.target.value  })
    })
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  onChangeName(e){
    this.setState({
      input: e.target.value,
       movies : movies.filter(function(user) { return   user.title.includes(e.target.value)  })
    })}

    onChangeRating(e){
      this.setState({
        rating: e.target.value,
         movies : movies.filter(function(user) { return (user.rating == e.target.value) }),
      })
    }
    onChangeTitle(e){ 
      this.setState({ titlevalue: e.target.value });
    }
    onChangeYear(e) {
      this.setState({ yearvalue: e.target.value });}
    onChangeratingValue(e){
      this.setState({ ratingvalue: e.target.value }); }
    onChangeVideo(e){ 
      this.setState({ videovalue: e.target.value });
    }
    handleUpdate(e) {
 const index = e.target.id;
      movies[index].title = this.state.titlevalue;
      movies[index].year = this.state.yearvalue;
      movies[index].video = this.state.videovalue;
      movies[index].rating =this.state.ratingvalue;
      this.setState({
        movies, showmodal2: false
    });
  }
  render ()
  {  const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return <div>
      <div className="navbar">
      <form>
       <input  type="text" className="SearchText"   placeholder="title To Search ..." value={this.state.input} onChange={this.onChangeName.bind(this)}
       />
  <button className="SearchButton" >Search</button>
     </form>
<div className="Raiting">
<p>Minimum Rating</p>
<fieldset className="rating" onChange={this.onChangeRating.bind(this)}  value={this.state.rating}>
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
</div>
</div>
<div className="movie-video">
      {this.state.movies.map((item,index) => 
                <div className="movies-details" key={item.id} >
                <div className="iframe-buttons">
                <div className="buttons moins-edit"  >
                  <button className="button moins" onClick={this.remove}>
                    x
                  </button>
                  <button className="button edit" value={item.title} id={item.year} tabIndex={item.rating}  src={item.video} onClick={this.editmodalshow2}>
                    ...
                  </button>
       </div>
<iframe  className="movie-iframe" width="300px" height="250px" title=" "  src= {item.video} frameBorder="1" />  
                  <Modal show={this.state.showmodal2} onHide={this.handleClose2.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>New Movie Informations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please Insert All Necessary Informations Of Your New Movie</p>
        <label>Movie Name :</label>
     <input    className="form-control" type="text"  value={this.state.titlevalue } onChange={this.onChangeTitle.bind(this)}></input>
     <label >Movie Year of production :</label> 
     <input    className="form-control"    value={this.state.yearvalue } onChange={this.onChangeYear.bind(this)} type="text" ></input>
     <label >Movie Link-YouTube :</label>
     <input    className="form-control"    value={this.state.videovalue } onChange={this.onChangeVideo.bind(this)}   type="text"></input>
     
     <label > Movie Rating :</label> 

<StarRatingComponent  
        name="rate3" 
        starCount={5}
        starColor={ 'rgb(255, 6, 6)'}
        emptyStarColor={ 'rgb(0, 0, 0)'} 
        value={this.state.ratingvalue}
        onStarClick={this.onStarClick.bind(this)}
        onChange={this.onChangeratingValue.bind(this)}
        />
            </Modal.Body>
            <Modal.Footer>
            <Button id={index} onClick={this.handleUpdate}>save</Button>
         <Button onClick={this.handleClose2.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
      
                </div> 
                        <div className="image-name">
                            {item.title}-{item.year}-
                          
                        </div>
                 
                        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          starColor={ 'rgb(255, 6, 6)'}
          emptyStarColor={ 'rgb(0, 0, 0)'} 
    value={item.rating}/></div>)  }
    {/* Add Button */}
< div className="plus-videos" id="rout">
<div>
          <Button id="plus-button" bsStyle="primary" onClick={this.handleShow}>
       +
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Movie Informations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please Insert All Necessary Informations Of Your New Movie</p>
        <label>Movie Name :</label>
     <input    className="form-control"     ref="title"  type="text" placeholder="Enter Title"></input>
     <label >Movie Year of production :</label>
     <input    className="form-control"   ref="year"   type="text" placeholder="Enter Year Of Production "></input>
     <label >Movie Link-YouTube :</label>
     <input    className="form-control"  ref="video"     type="text" placeholder="Enter Link You-tube" ></input>
     
     <label > Movie Rating :</label> 

<StarRatingComponent  
        name="rate2" 
        starCount={5}
        starColor={ 'rgb(255, 6, 6)'} 
        onStarClick={this.onStarClick.bind(this)} />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleSubmit}>save</Button>
         <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>  
</div>
</div>
      </div>
  }
}

  
let movies = [{ 
  id:1,
    title: 'Inception',
    year: 2010,
    rating: 5,
    video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',
  }, {
    id:2,
    title: 'Shawshank Redemption',
    year: 1994,
    rating: 4,
  video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',

  }, {
    id:3,
    title: 'Blade Runner',
    year: 2017,
    rating: 3,
    video: 'https://www.youtube.com/embed/8hP9D6kZseM0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com',
  }];
export default Movie;