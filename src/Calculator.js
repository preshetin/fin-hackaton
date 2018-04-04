import React from 'react';
import EmailInput from './EmailInput';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

class Calculator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        amount: 100,
        customer: 'ooo',
        email: '', // example@user.com
        shouldNotify: true,
        'formState': 'not_submitted' // 'submitting' , 'submitted'
      }
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleCustomerChange = this.handleCustomerChange.bind(this);
      this.handleShouldNotifyChange = this.handleShouldNotifyChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  notify = (type , message) => toast(message, { type: type });

  handleAmountChange(e) {
    let state = this.state;
    state.amount = e.target.value;
    this.setState(state);
  }

  handleCustomerChange(e) {
    let state = this.state;
    state.customer = e.target.value;
    this.setState(state);
  }

  handleShouldNotifyChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEmailChange(e) {
    let state = this.state;
    state.email = e.target.value;

    this.setState(state);

  }

  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(email).toLowerCase());

    return result;
  }

  isEmailError(email) {
    if (email == '') {
      return false;
    }

    return ! this.isValidEmail(email);
  }

  isFormSubmittable() {
    if (this.state.email == '') {
      return false;
    }

    return this.isValidEmail(this.state.email);
  }

  handleFormSubmit() {
    const st = this.state;
    st.formState = 'submitting';
    this.setState(st);

    axios({
        method: 'post',
        url: `https://vk2telegram-poster.herokuapp.com/api/leads`,
        params: this.state
    }).then(
        response => {
          st.formState = 'submitted';
          this.setState(st);
          this.notify('success', "Договор отправлен на " + this.state.email);
        },
        reject => {
          st.formState = 'submitted';
          this.setState(st);
          this.notify('error', "Что-то пошло не так. Попробуйте еще раз");
        }
    );

    // setTimeout(function () {
    //     st.formState = 'submitted';
    //     this.setState(st);
    //     this.notify('success', "Договор отправлен на " + this.state.email);
    //     this.notify('error', "Что-то пошло не так. Попробуйте еще раз");
    // }.bind(this), 1500);
  }

  render() {

    const TEMPLATES = [
      {
        slug: 'ooo',
        title: 'Общество с органиченной ответственностью (ООО)',
        shortName: 'ООО',
        url: 'https://www.dropbox.com/s/e7egu2egqjn1prw/urlico-fizlico.docx?raw=1'
      },
      {
        slug: 'ip',
        title: 'Индивидуальный предприниматель (ИП)',
        shortName: 'ИП',
        url: 'https://www.dropbox.com/s/55se0m4lmzwu72v/ip-fizlico.docx?raw=1'
      }
    ];

    const submitButtonClass = (this.isFormSubmittable() || ! this.state.formState == 'submitting' )  ? 'btn btn-primary' : 'btn btn-primary disabled';

    let submitButton;
    switch (this.state.formState) {
      case 'not_submitted':
        submitButton = (
          <div class="form-group">
            <div>
              <a type="submit" target="_blank" onClick={this.handleFormSubmit} class={submitButtonClass}>Отправить на почту договор c {TEMPLATES.find(template => template.slug == this.state.customer).shortName}</a>
            </div>
          </div>
        );
        break;
      case 'submitting':
        submitButton = (
          <div class="form-group">
            <div>
              <a type="submit" target="_blank" onClick={this.handleFormSubmit} class="btn btn-primary disabled">Подождите немного...</a>
            </div>
          </div>
        );
        break;
      case 'submitted':
        submitButton = (
          <div class="form-group">
            <div>
              <a type="submit" target="_blank" onClick={this.handleFormSubmit} class={submitButtonClass}>Отправить на почту договор c {TEMPLATES.find(template => template.slug == this.state.customer).shortName}</a>
            </div>
          </div>
        );
        break;
    }

    return (
      <div class="starter-template">
        <div class="calc-header">
          <h1>Договор Подряда</h1>
          <p class="lead">Введите сумму, которую хотите получить "на руки", и калькулятор рассчитает сумму договора с заказчиком</p>
        </div>
        <div class="row">
          <div class="col-md-6" style={{ borderRight: "1px solid #eee" }}>
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputPassword" class="col-sm-6 control-label">Я хочу получить</label>
                <div class="col-sm-6">
                  <div class="input-group">
                    <div class="input-group-addon">BYN</div>
                    <input type="text" class="form-control input-lg" id="amount" value={this.state.amount} onChange={this.handleAmountChange} autoFocus={true} placeholder="Amount" />
                    <div class="input-group-addon">.00</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-6 control-label">Подоходный налог по договору подряда (13% от суммы договора)</label>
                <div class="col-sm-6">
                  <p class="form-control-static" id="podohNalog" style={{ fontSize: "200%", color: "grey" }}>{   (new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'BYN' }).format(this.state.amount  / 0.86 * 0.13) )}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-6 control-label">Страховые взносы по договору подряда (1% от суммы договора)</label>
                <div class="col-sm-6">
                  <p class="form-control-static" id="strahVznos" style={{ fontSize: "200%", color: "grey" }}>{ (new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'BYN' }).format(this.state.amount / 0.86 * 0.01) )} </p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-6 control-label" >Сумма по договору подряда</label>
                <div class="col-sm-6">
                  <p class="form-control-static" id="contractAmount" style={{ fontSize: "300%" }}>{ (new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'BYN' }).format(this.state.amount  / 0.86) ) }</p>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">Заказчик</label>
              <div>
                <select class="form-control" name="customer" id="customer" onChange={this.handleCustomerChange}>
                  {TEMPLATES.map(template => <option value={template.slug}>{template.title}</option> )}
                </select>
              </div>
            </div>
            <EmailInput email={this.state.email} hasError={this.isEmailError(this.state.email)} handleChange={this.handleEmailChange} />
            <div class="checkbox">
              <label>
                <input type="checkbox" name="shouldNotify" checked={this.state.shouldNotify} onChange={this.handleShouldNotifyChange} /> Получать новости
              </label>
            </div>
            {submitButton}

          </div>
        </div>
        <ToastContainer />

      </div>
    );
  }


}

export default Calculator;
