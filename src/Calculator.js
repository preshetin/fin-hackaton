import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        amount: 100,
        customer: 'ooo'
      }
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleCustomerChange = this.handleCustomerChange.bind(this);
  }

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

  render() {
    return (
      <div class="starter-template">
        <h1>Финансовый калькулятор</h1>
        <p class="lead">Введите сумму, которую хотите получить "на руки", и калькулятор рассчитает сумму договора с заказчиком</p>


        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputPassword" class="col-sm-4 control-label">Я хочу получить</label>
            <div class="col-sm-8">
              <div class="input-group">
                <div class="input-group-addon">BYN</div>
                <input type="text" class="form-control input-lg" id="amount" value={this.state.amount} onChange={this.handleAmountChange} autoFocus={true} placeholder="Amount" />
                <div class="input-group-addon">.00</div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-4 control-label">Заказчик</label>
            <div class="col-sm-8">
              <select class="form-control" name="customer" id="customer" onChange={this.handleCustomerChange}>
                <option value="ooo">Общество с органиченной ответственностью (ООО)</option>
                <option value="ip">Индивидуальный предприниматель (ИП)</option>
                <option value="fizik">Физическое лицо</option>
              </select>
            </div>
          </div>


          <div class="form-group">
            <label class="col-sm-4 control-label">Подоходный налог по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="podohNalog">{parseInt(this.state.amount * 0.13)} BYN</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">Страховые взносы по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="strahVznos">{parseInt(this.state.amount * 0.01)} BYN</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label" >Сумма по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="contractAmount" style={{ fontSize: "300%" }}>{Math.ceil(this.state.amount * 1.14)} BYN</p>
            </div>
          </div>
        </form>
        <div class="form-group">
          <div class="col-sm-offset-4 col-sm-8">
            <button type="submit" class="btn btn-default">Скачать шаблон договора {this.state.customer}</button>
          </div>
        </div>

      </div>
    );
  }


}

export default Calculator;
