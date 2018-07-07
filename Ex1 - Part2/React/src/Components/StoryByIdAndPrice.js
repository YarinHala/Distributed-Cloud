import React, { Component } from 'react'
import Story from './Story'
import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'

class StoryByIdAndPrice extends Component {
    constructor(props) {
    super(props);
    this.state = {
        stories:null,
        stars: '',
        price: ''  
    }

    this.handleChangePrice     = this.handleChangePrice.bind(this);
    this.handleChangeStars     = this.handleChangeStars.bind(this);
    this.onSubmitFormFetch     = this.onSubmitFormFetch.bind(this);     
    this.eachIdea   = this.eachIdea.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
  }

  add(name,price) {

/*
    this.setState(prevState => ({
      stories: [
      ...prevState.stories,
      {
          id: this.nextID(),
          bookname: name,
          prices:price
      }]
    }))
  */
  }

  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
      
  }

  componentWillMount() {
    
      var self=this
      data.map((story) => {
          self.add(story.bookname, story.prices)
      })
      
  }

  update(newIdea, i) {
    /*
    this.setState(() => ({
      ideas: this.state.ideas.map(
        (idea) => (idea.id !== i) ? idea : {...idea, idea: newIdea}
      )
    }))
    */
  }    

  delete(id) {
      //finish yourself- this should be called by onDelete
  }


  eachIdea (story,i) {
    return (          
      <div className="card" key={'story'+i} style={{width: 80 +'rem',marginTop:20+'px'}}>
        <div className="card-body">
          <Story key={'story'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{story.bookname}</h5>
            <p className="card-text">{story.prices.map((object,i)=>{
              return(
                <i key={'object'+i}>{object.type || object.types}:{object.price}<br/></i>);       
            })}     
            </p>
            <br/>           
          </Story>
        </div>
      </div>
    )      
  }

  onSubmitFormFetch(){
    if(this.state.stars != '' && this.state.price != ''){
        fetch("https://top-stories-api.herokuapp.com/best_stars_price", {
          method: 'POST',
          headers:{ 
            'Content-Type': 'application/x-www-form-urlencoded' 
          },
           body: "stars="+this.state.stars +"&price="+this.state.price         
        })
        .then((res) => res.json())
        .then((res)=>{
            this.setState({
              stories:res.TopStories,
            })
           console.log(this.state)
           this.setState({price:'',stars:''})
        });
      }
    }

  handleChangeStars(event){
    this.setState({stars: event.target.value});
  }
  
  handleChangePrice(event){
    this.setState({price: event.target.value});
  }

  render() {
      if(this.state.stories == null){
          return(
              <form  style={{width: 80 +'rem',marginTop:80+'px'}}>
                <label>
                  Stars(1 - 5): 
                  <input type="number" min="1" max="5" value={this.state.stars} onChange={this.handleChangeStars}  />
                </label>
                <br/>
                <br/>             
                <label>
                  Price: 
                  <input type="number" min="1"  value={this.state.price} onChange={this.handleChangePrice}  />
                </label>
                <br/>
                <br/>
                <input type="button" value="Submit" onClick={this.onSubmitFormFetch}/>
              </form>
          )
       }
       else{
          return (
            <div className="ideaList">
              {this.state.stories.map(this.eachIdea)}
              <button id="add" className="btn btn-primary" style={{marginTop:20+'px'}}>
                 <MdAdd/></button>
            </div>
          )
      }

  }

}

export default StoryByIdAndPrice