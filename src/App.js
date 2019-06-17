import React from 'react';
import './App.css';
import WrapListing from './modules/WrapListing/wrap-listing.component';
import CardMessage from './modules/CardMessage/card-message.component';
import Moment from 'react-moment';
import CardTodo from "./modules/CardTodo/card-todo.component";
import DataJson from "./assets/data";


const dateToFormat = new Date();
const Messages = (items) => {
  if (items){
    if (items[0]){
      return(
        <div>
          {items.map(item => (
            <CardMessage key={item.id}
                         fullName={item.name}
                         message={ item.message}
              date = {<Moment date={dateToFormat} />}
            />
          ))}
        </div>
      )
    }
  }
};
const NewMessages = (number) => {
  return(
    <div className='messagesNumber'>
      <img className='envelopeImg'  src={require('./assets/envelope.png')} alt='orders'/>
      <p className='title'>New messages</p>
      <p className='numberPlace'>You have total {number} messages.</p>
    </div>
  )
};
const Orders = () => {
  return(
    <div className='ordersImg'>
      <img  src={require('./assets/orders.png')} alt='orders'/>
    </div>
  )
};
const Progress = (value) => {
  return(
    <div className='progressBody'>
      {/*<div className='progressValue' style={divStyle(value)}></div>*/}
      <div className='progressValue' style={{width: value.value+'%'}}></div>
    </div>
  )
};
const TabOrder = () => {
  return(
    <div className="tabOrderWrap">
      <div className="threeBtn">
        <button>Today</button>
        <button>Monthly</button>
        <button>Annual</button>
      </div>
      <div className="tabOrder">
        {DataJson.diagrams.map((diagram)=>{
        return <div key={diagram.id} className='diagramPlace'>
          <p className="value" >{diagram.value}</p>
          <div className="textLine">
            {diagram.text}
            <div>
              {diagram.percent+'%'}
              <img  src={require('./assets/' + diagram.picture + '.png')} alt={diagram.picture}/>
            </div>

          </div>
          <Progress value={diagram.percent}/>
          </div>
      })}
      </div>
    </div>
  )
};

const CardMeasure = (mesure) => {
  let color;
  switch (mesure.period) {
    case "Monthly": color = '#1c84c6';
    break;
    case "Annual": color = '#23c6c8';
      break;
    case "Today": color = '#1ab394';
      break;
    case "Low value": color = '#ed5565';
      break;
    default:
      break;

  }
  return(
    <div className='cardMeasure'>
      <div className="measureHeader">
        <h6 className="measureTitle">{mesure.title}</h6>
        <button className="measureBtn" style={{"backgroundColor":color}}>{mesure.period}</button>
      </div>
      <p className="measureValue">{mesure.value}</p>
      <div className="measureFooter">
        <p className="measureText">{mesure.text}</p>
        <div className="measurePercentPlace">
          <h5 className="measurePercent" style={{"color":color}}>{mesure.percent}</h5>
          <img  src={require('./assets/' + mesure.picture + '.png')} alt={mesure.picture}/>
        </div>
      </div>
    </div>
  )
};
const UserProjectList = () => {
  return(
    <div className='cardProject'>
      <div className="tableHeader">
        {DataJson.projects.title.map((field, index)=>{
          return <div key={index} className='projectFieldTitle'>
            <h6 className="value" >{field}</h6>
          </div>
        })}
      </div>
      <div className="projectListing">
        {DataJson.projects.listing.map((row)=>{
          let clr, bgrngClr;
          switch (row.status) {
            case ("Pending..."): clr = '#aeb0b1'; bgrngClr = '#ffffff';
              break;
            case ("Canceled"): clr = '#ffffff'; bgrngClr = '#f8ac59';
              break;
            case ("Completed"): clr = '#ffffff'; bgrngClr = '#1ab394';
              break;
            default:
              break;

          }
          return <div key={row.id} className='projectRow'>
            <div className="status" style={{color: clr, backgroundColor: bgrngClr}} >{row.status}</div>
            <div className="projDatePlace">
              <img  src={require('./assets/clock.png')} alt={row.picture}/>
              <div className="date" >{row.date}</div>

            </div>
            <div className="user" >{row.user}</div>
            <div className="projectPercent">
              <h4 className="value" >{row.value}</h4>
              <img  src={require('./assets/' + row.picture + '.png')} alt={row.picture}/>
            </div>

          </div>
        })}
      </div>

    </div>
  )
};
const SmallTodoList = (todos ) =>  {
  if (todos){
    if (todos[0]){
      return(
        <div className='todoPlace'>
          {todos.map(todo => (
            <CardTodo
              key={todo.id}
              title={todo.title}
              completed={ todo.completed}
            />

          ))}
        </div>
      )
    }
  }
};
const TransactionsWorldwide = () => {
  return(
    <div className="transactionsPlace">
      <div className="table">
        <div className="tableHeader">
          {DataJson.transactions.title.map((field, index)=>{
            return <div key={index} className='projectFieldTitle'>
              <h6 className="value" >{field}</h6>
            </div>
          })}
        </div>
        <div className="transactionsListing">
          {DataJson.transactions.listing.map((row)=>{
            return <div key={row.no} className='projectRow'>
              <div className="no">{row.no}</div>
              <div className="transaction" >{row.transaction}</div>
              <div className="date" >{row.date}</div>
              <div className="amount" style={{color:'#ffffff', backgroundColor: row.color}}>{row.amount}</div>

            </div>
          })}
        </div>
      </div>
      <Map/>
    </div>
  )
};
const Map = () => {
  return(
    <div className='map'>
      <img  src={require('./assets/map.png')} alt='orders'/>
    </div>
  )
};
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoadedMessages: false,
      isLoadedTodoList: false,
      items: [],
      titleMessages : 'Messages',
      classMessages : 'messagesWrap',
      contentMessages: Messages(),
      newMessages: NewMessages(),
      titleUserProjectList : 'User project list',
      classUserProjectList: 'userProjectList',
      contentUserProjectList: UserProjectList(),
      titleSmallTodoList : 'Small todo list',
      classSmallTodoList: 'smallTodoList',
      contentSmallTodoList: SmallTodoList(),
      titleTransactionsWorldwide : 'Transactions worldwide',
      classTransactionsWorldwide: 'transactionsWorldwide',
      contentTransactionsWorldwide: TransactionsWorldwide(),
      messages: [],
      todos:[],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(
        (result) => {
          let messagesLocal=[];
          for (let i=0; i<result.length; i++){
            let firstName = result[i].email.split('@')[0];
            let lastName = result[i].email.split('@')[1].split('.')[0]
            lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);

            messagesLocal.push({"id": i,  "name": firstName + ' ' + lastName + ', ', "message": result[i].body });
          }
          this.setState({
            isLoadedMessages: true,
            messages: messagesLocal,
          });
        },
        (error) => {
          this.setState({
            isLoadedMessages: true,
            error
          });
        }
      )

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          let messagesLocal=[];
          for (let i=0; i<result.length; i++){
            messagesLocal.push({"id": result[i].id,  "title": result[i].title, "completed": result[i].completed});
          }
          this.setState({
            isLoadedTodoList: true,
            todos: messagesLocal,
          });
        },
        (error) => {
          this.setState({
            isLoadedTodoList: true,
            error
          });
        }
      )

  }

  render(){
  return (
    <div className="App">
      <header>
        {DataJson.measures.map((measure)=>{
          return <div key={measure.id} className='measurePlace'>
            <CardMeasure
              title = {measure.title}
              period = {measure.period}
              value = {measure.value}
              text = {measure.text}
              percent = {measure.percent}
              picture = {measure.picture}
            />
          </div>
        })}

      </header>
      <div className="orders">
          <Orders/>
        <TabOrder/>
      </div>
      <footer>
        <WrapListing
          title = {this.state.titleMessages}
          class={this.state.classMessages}
          content = {Messages(this.state.messages)}
          additionalData = {NewMessages(this.state.messages.length)}
        />
        <div className="right">
          <div className="line1">
            <WrapListing
              title = {this.state.titleUserProjectList}
              class={this.state.classUserProjectList}
              content = {UserProjectList(this.state.projectFieldTitles,
                this.state.projectLists)}
            />
            <WrapListing
              title = {this.state.titleSmallTodoList}
              class={this.state.classSmallTodoList}
              content = {SmallTodoList(this.state.todos)}/>
          </div>
          <div className="line2">
            <WrapListing
              title = {this.state.titleTransactionsWorldwide}
              class={this.state.classTransactionsWorldwide}
              content = {this.state.contentTransactionsWorldwide}/>

          </div>
        </div>
      </footer>
    </div>
  );
  }
}

export default App;
