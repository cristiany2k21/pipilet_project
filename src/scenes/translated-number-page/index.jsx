import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderNumber from './components/header';
import TableNumber from './components/table';
import { selectLanguageNumber } from '../../action/select-language-number';
import './styles/index.scss';

class TranslatedNumber extends Component {

    componentWillMount() {
      const language = this.props.params.language
      this.props.dispatch(selectLanguageNumber(language))
    }

    render() {
      const { numbers } = this.props;

      return (
        <div id="translated-number">
          <HeaderNumber title={numbers.header} flag={numbers.flag}/>
          <TableNumber language={numbers} />
        </div>
      )
    }
}

const mapStateToProps = state => ({
  numbers: state.SelectLanguageNumbers
})

export default connect(mapStateToProps)(TranslatedNumber);