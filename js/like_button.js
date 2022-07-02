'use strict';

const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createTheme,
  Box,
  SvgIcon,
  Link,
  TextField,
  Select,
  MenuItem,
} = MaterialUI;

const currencies = [
  {
    value: 'first',
    label: 'Упрощенная',
  },
  {
    value: 'second',
    label: 'традиционное',
  },
  {
    value: 'third',
    label: 'налог на профессиональную деятельность',
  },
];

const pay = [
  {
    value: 'Mouth',
    label: '1М',
  },
  {
    value: 'half_year',
    label: '6М',
  },
  {
    value: 'year',
    label: '12М',
  },
];

class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      setCurrency: ''
    };
    const handleChange = (event) => {
      setCurrency(event.this.value);
    };
  }
  render() {

    return (
      <div className = 'form_1'>
        <div id = 'TEXTFIELD'>
          <TextField name = 'Area'               id="outlined-basic"   label="Место нахождения"                         variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField name = 'organization'       id="outlined-basic-1" label="Наименование арендатора"                  variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField name = 'FIO'                id="outlined-basic-2" label="ФИО контактного лица"                     variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField name = 'Subject_predprinim' id="outlined-basic-3" label="Субъект предпринимательской деятельности" variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField name = 'phone_number'       id="outlined-basic-4" label="Телефон:"                                 variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
           <TextField name = 'Cost'              id="outlined-basic-5" label="Стоимость:"                               variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField
          name = 'nalog'
          id="outlined-basic-6"
          select 
          label="Форма налогооблажения:"
          value={this.state.currency}
          onChange={constructor.handleChange}
          SelectProps={{
            native: true,
          }}

          variant="outlined"
          fullWidth
          >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} 
          </TextField>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField name = 'email_'     id="outlined-basic-7" label="Email:"  variant="outlined" fullWidth/>
        </div>
        <div id = 'TEXTFIELD'>
          <TextField
          name = 'pay'
          id="outlined-basic-8"
          select
          label="Периодичность оплаты:"
          value={this.state.currency}
          onChange={constructor.handleChange}
          SelectProps={{
            native: true,
          }}

          variant="outlined"
          fullWidth
          >
          {pay.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} 
          </TextField>
        </div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);