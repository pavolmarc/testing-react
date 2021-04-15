import Text from './Components/Text.js';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Toggle from './Components/Toggle.js';

it('renders component', () => {
    render(<Text />);
    const text = screen.getByText(/Sample text/i);
    expect(text).toBeInTheDocument();
});



Enzyme.configure({ adapter: new Adapter() })

describe('Toggle', () => {
    const wrapper = shallow(<Toggle />);
    it('renders a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
    it('check click once', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggled');
    });
    it('chceck click again', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggle');
    });
  })
