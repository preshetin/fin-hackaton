import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
      super(props);
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
                <input type="number" class="form-control input-lg" id="amount" value="100" autofocus placeholder="Amount" />
                <div class="input-group-addon">.00</div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-4 control-label">Заказчик</label>
            <div class="col-sm-8">
              <select class="form-control" name="customer" id="customer">
                <option value="ooo">Общество с органиченной ответственностью (ООО)</option>
                <option value="ip">Индивидуальный предприниматель (ИП)</option>
                <option value="fizik">Физическое лицо</option>
              </select>
            </div>
          </div>


          <div class="form-group">
            <label class="col-sm-4 control-label">Подоходный налог по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="podohNalog">111</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label">Страховые взносы по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="strahVznos">222</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-4 control-label" >Сумма по договору подряда</label>
            <div class="col-sm-8">
              <p class="form-control-static" id="contractAmount" style={{ fontSize: "300%" }}>333</p>
            </div>
          </div>
        </form>

      </div>
    );
  }


}

export default Calculator;
