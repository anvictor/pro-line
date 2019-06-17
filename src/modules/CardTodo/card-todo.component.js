import React, { Component} from 'react';

class CardTodo extends Component {
  state = {
    isChecked: this.props.completed,
    label: this.props.title
  };

  toggleCheckboxChange = () => {
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  };
  render() {

    let label = this.props.title;
    const { isChecked } = this.state;

    return ( <div className="checkbox">
        <label className={'labelCHB '+ isChecked}>
          <input className='inputCHB'
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

export default CardTodo;
