import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Reant',
        amount: 100,
        createdAt: 1000,
        note: 'Testing rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });

});