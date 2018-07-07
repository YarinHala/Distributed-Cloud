import React, {Component} from 'react'
import Story from './Story'
import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {stories: []}

    this.eachIdea   = this.eachIdea.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
  }

  add(name,price) {
    this.setState(prevState => ({
      stories: [
      ...prevState.stories,
      {
          id: this.nextID(),
          bookname: name,
          prices:price
      }]
    }))
  }

  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  componentWillMount() {
    fetch('https://top-stories-api.herokuapp.com/getalltop')
      .then((Response)=>Response.json())
      .then((req)=>{
          ///console.log(req)
          this.setState({
            stories:req.TopStories,
          })
          console.log(this.state)
      })
  }

  update(newStory, i) {
    this.setState(() => ({
      stories: this.state.stories.map(
        (story)=>(story.id !== i) ? story : {...story, story: newStory}
      )
    })) 
  }    

  delete(id) {
      //finish yourself- this should be called by onDelete
  }

  eachIdea (story,i) {
   return (          
      <div className="card" key={story.id} style={{width: 80 +'rem',marginTop:20+'px'}}>
        <div className="card-body">
          <Story key={'story'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{story.bookname}</h5>
            <p className="card-text">{story.prices.map((object,i)=>{
              return(
                <i key={object + i} >{object.type || object.types}:{object.price}<br/></i>              
                );             
            })}     
            </p>
            <br/>           
          </Story>
        </div>
      </div>
      )  
  }

  render() {
      return (
        <div className="ideaList">
          {this.state.stories.map(this.eachIdea)}
          <button id="add" className="btn btn-primary" style={{marginTop:20+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}

export default Stories
