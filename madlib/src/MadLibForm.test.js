import { render } from '@testing-library/react';
import MadLibForm from './MadLibForm';


//smoke test
test('renders learn react link', () => {
  render(<MadLibForm />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<MadLibForm/>)
  expect(asFragment()).toMatchSnapshot();
})

//specialized testing
test("Test for form", () => {
    const { getByText } = render(<MadLibForm />)
    
    //get button text
    let button = getByText("Make some mad libs")
    expect(button).toBeInTheDocument();
})


