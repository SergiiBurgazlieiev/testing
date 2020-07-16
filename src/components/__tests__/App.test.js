import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
//Serves purpose of DRY principle.
beforeEach(()=>{
    wrapped = shallow(<App />);
});
 
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a list box', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});