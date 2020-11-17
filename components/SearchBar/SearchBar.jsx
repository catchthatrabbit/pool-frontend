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
    onChange: () => {},
    onSearch: () => {},
  };

  handleKeyDown = (event) => event.keyCode === 13 && this.props.onSearch(event);

  render() {
    const { value, placeholder, onChange, onSearch } = this.props;

    return (
      <div className={searchBar}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" onClick={onSearch}>
          <Search />
        </button>
      </div>
    );
  }
}
