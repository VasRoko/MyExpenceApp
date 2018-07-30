import { addExpense, editExpensem, removeExpense } from '../../actions/expenses';

test('Should set up remove expense object', () => {
    const action = removeExpense({id:'123'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    }); 
});

test('Should set up edit expense object', () => {
    const action = editExpense( '123', { description: 'test'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            description: 'test'
        }
    }); 
});