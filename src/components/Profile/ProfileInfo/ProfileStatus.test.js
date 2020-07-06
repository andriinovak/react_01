import { create } from 'react-test-renderer'
import React from 'react'
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus Component', () => {
    test('status from props must be in the state', () => {
        const component = create(<ProfileStatus status='bla bla bla' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('bla bla bla');
    });
    test('status from props must be in the state', () => {
        const component = create(<ProfileStatus status='bla bla bla' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test('status from props must be in the state', () => {
        const component = create(<ProfileStatus status='bla bla bla' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test('status from props must be in the state', () => {
        const component = create(<ProfileStatus status='bla bla bla' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('bla bla bla');
    });
});
