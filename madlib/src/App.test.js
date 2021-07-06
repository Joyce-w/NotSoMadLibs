import { render } from '@testing-library/react';
import App from './App';


//smoke test
test('renders learn react link', () => {
  render(<App />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
} )