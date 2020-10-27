import { PureComponent } from 'react';
import { func, string } from 'prop-types';

import Search from '../SvgImage/images/Search';
import { searchBar } from './SearchBar.module.scss';

export default class SearchBar extends PureComponent {
  static propTypes = {
    value: string,
    placeholder: string,
    onChange: func,
    onSearch: func,
  };

  static defaultProps = {
    value: '',
    placeholder: 'Search by wallet address...',
    onChange: (event) => {
      const { onChange } = this.props;
      // eslint-disable-next-line no-unused-expressions
      onChange && onChange(event.target.value);
    },
    onSearch: () => {},
  };

  handleKeyDown = (event) => event.keyCode === 13 && this.props.onSearch(event);

  handleOnChange = (event) => {
    const { onChange } = this.props;
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(event.target.value);
  };

  render() {
    const { value, placeholder, onSearch } = this.props;

    return (
      <div className={searchBar}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={this.handleOnChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" onClick={onSearch}>
          <Search />
        </button>
      </div>
    );
  }
}
