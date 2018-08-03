import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action objects', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test('should generate set end date action objects', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should recieve and empty text filter', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should recieve an string text filter', () => {
    const action = setTextFilter('someString');
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'someString'
    });
});

test('should sort by Amount', () => {
    const action = sortByAmount();
    
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should sort by Date', () => {  
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});