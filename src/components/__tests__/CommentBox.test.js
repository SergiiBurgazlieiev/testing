import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and a 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {
    
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('user can enter input into the textarea', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('after the input submitted, textarea should get emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});