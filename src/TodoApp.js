import React, {Component} from 'react'
import 'bulma/css/bulma.css'
class TodoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      input:'',
      todo:['Homework Mobile','Homework Softdev'] //สร้างอาร์เรย์ และใส่ค่าเริ่มต้น
    }
  }

  onChange(value){ //เซ็ทการเปลี่ยนแปลง
    console.log(value.target.value)
    this.setState({
      input:value.target.value
    })
  }
  addtask(){     //ปุ่มเพิ่ม
    if(this.state.input !==''){  //เช็คค่าว่าง
      this.setState({
        input:'',
        todo: [...this.state.todo,this.state.input] //... เชื่อมค่าอาเรย์ตัวเก่ากับตัวใหม่

      })
    }
  }
  renderTodoListitem(){     //ดึงข้อมูลจากarray
    return(
      this.state.todo.map((todo,index)=>{
        return(
          <a className="panel-block" key={index}>{todo}</a>
        )
      })

    )
  }
  render(){
    return(
      <section class="hero is-medium is-info is-bold">
        <div className="container has-text-centered">
        <div className="hero-body">
          <h1 className="title">ToDo List</h1>
          <div className="columns">
            <div className="column is-11">
              <input className="input"
                type="text"
                placeholder="Enter Task"
                onChange={(value)=>this.onChange(value)}
                value={this.state.input}/>
            </div>
            <div className="column">
              <a className="button is-danger" onClick={()=>this.addtask()}>add</a>
            </div>
          </div>
          <div className="columns">
            <div className="column is-11">
              <nav className="panel">
                {this.renderTodoListitem()}
              </nav>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
};

export default TodoApp
