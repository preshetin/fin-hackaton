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

    return (
      <div class="starter-template">
        <h1>Финансовый калькулятор</h1>
        <p class="lead">Введите сумму, которую хотите получить "на руки", и калькулятор рассчитает сумму договора с заказчиком</p>

        <div class="row">
          <div class="col-md-6" style={{ borderRight: "1px solid #eee" }}>
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

            <div class="form-group">
              <div >
                <a type="submit" target="_blank" href={TEMPLATES.find(template => template.slug == this.state.customer).url} class="btn btn-lg btn-success">Скачать договор c {TEMPLATES.find(template => template.slug == this.state.customer).shortName}</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }


}

export default Calculator;
