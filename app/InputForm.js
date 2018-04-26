import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default class UpdateTodo extends Component {
  constructor(){
    super()
    // console.log(props)
    this.state = {
      taskName: '',
      assignee: '',
      warningMsg: '',
      errorMessage: ''
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     // ...this.props.todo
  //     taskName: this.props.todo.taskName,
  //     assignee: this.props.todo.assignee
  //   })
  // }
  componentWillReceiveProps = (props) => {
    this.setState({
      ...props.todo,

      warningMsg: 'Field is Required'
    });
  }

  handleChange = (event) => {
    // console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.state)
    try {
      const res = await axios.put(`/api/todos/${this.props.todo.id}`, this.state);
      console.log(res);
      this.props.handleUpdate(res.data);
    }
    catch (error) {
      this.setState({errorMessage: error.message});
    }
  }

  render () {
    // console.log(this.props.todo)
    return (
      <form onSubmit= {props.handleSubmit}>
        <label htmlFor= "taskName">
          Task Name:
          {
            !props.taskName && props.warningMsg && <span className="warning">{props.warningMsg}</span>
          }
        </label>
        <input type= "text" name ="taskName" value={props.taskName} onChange={props.handleChange} />

        <label htmlFor= "assignee">
          Assign To:
          {
            !props.assignee && props.warningMsg && <span className="warning">{props.warningMsg}</span>
          }
        </label>
        <input type= "text" name ="assignee" value={props.assignee} onChange={props.handleChange} />

        <button type= "submit" disabled= {!(props.taskName && props.assignee)}>Submit</button>
        {
          props.errorMessage && <div className="error">{props.errorMessage}</div>
        }
      </form>
    )
  }
}
