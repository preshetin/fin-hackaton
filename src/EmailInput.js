import React from 'react';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const emailInputClass =  this.props.hasError ? 'form-group has-error' : 'form-group';

    return (
      <div class={emailInputClass}>
        <label class="control-label" for="email">Ваш email</label>
        <input type="email" class="form-control" id="email" placeholder="Email" value={this.props.email} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default EmailInput;
