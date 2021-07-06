import { render } from '@testing-library/react';
import MadLib from './MadLib';


//smoke test
test('renders learn react link', () => {
  render(<MadLib />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<MadLib/>)
  expect(asFragment()).toMatchSnapshot();
})

//specialized testing
test("Test for header", () => {
    const { getByText } = render(<MadLib />)
    
    //get h1 text
    let h1 = getByText("MadLib")
    expect(h1).toBeInTheDocument();
})