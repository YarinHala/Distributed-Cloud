import React, {Component} from 'react'
import Story from './Story'
import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class StoryById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories:null,
      value: ''
     
    }

    this.handleChange     = this.handleChange.bind(this);
    this.onSubmitFormFetch     = this.onSubmitFormFetch.bind(this);
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

  nextID() {/*
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++*/
      
  }

  componentWillMount() {
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


  onSubmitFormFetch(){
    if(this.state.value != ''){
      fetch("https://top-stories-api.herokuapp.com/gettopbyid", {
        method: 'POST',
        headers:{ 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
         body: "id=" + this.state.value
      })
      .then((res)=>res.json())
      .then((res)=>{
          this.setState({
            stories:res.TopStories,
          })
          console.log(this.state)
      });
    }

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
  if(this.state.stories == null){
      return(
          <form  style={{width: 180 +'rem',marginTop:120+'px'}}>
            <label>
              ID(1 - 5):
              <input type="number" min="1" max="5" value={this.state.value} onChange={this.handleChange}  />
            </label>
            <input type="button" value="Submit" onClick={this.onSubmitFormFetch}/>
          </form>
      )
    }
    else{
      return (
        <div className="ideaList">
            <div className="card" style={{width: 80 +'rem',marginTop:20+'px'}}>
              <div className="card-body">
                 <Story onChange={this.update}>
                 <h5 className="card-title">{this.state.stories.bookname}</h5>       
                </Story>
              </div>
            </div>
          <button id="add" className="btn btn-primary" style={{marginTop:20+'px'}}>
             <MdAdd/></button>
        </div>
      )
    }
  }

}

export default StoryById
