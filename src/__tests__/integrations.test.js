import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(()=>{
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Attemp to render the 'entire' app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    
    //find fetchComments button and click it
    wrapped.find('#fetch-comments').simulate('click');

    //introduce a tiny little pause
    moxios.wait(() => {
        //ask app update itself
        wrapped.update();
        //Expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});