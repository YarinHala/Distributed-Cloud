import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import MdSave from 'react-icons/lib/md/save'

var str="";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story:'',
      editing:false
    }

  

    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
  }
  edit () {
    this.setState({
      editing:true
    });
  }
  delete() {
    alert('you can do the delete on your own')
  }
  save(e) {
    e.preventDefault();

    console.log(this.story) ;     

    this.props.onChange(this.story.value,this.props.index);
    this.setState({
      editing:false
    })
  }

  handleChange(event){
    this.setState({story: event.target.value});
  }

  renderForm() {
    return (
       <div>
        <form onSubmit={this.save}>
          <input ref={
            (input) => {
              this.story=input;
            }
          }/>
          <button><MdSave onClick={this.save}/></button>
        </form>
      </div>
    )
  }

  renderUI() {
    return (
      <div className='story'>
          <div>{this.props.children}</div>
          <span>
            <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdEdit/></button>
            <button className="btn btn-primary" onClick={this.delete}><MdDelete/></button>
          </span>
        </div>
    );
  }


  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default Story