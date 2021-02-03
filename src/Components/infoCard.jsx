import React from 'react';

const isIncome = Math.round(Math.random());

const infoCard = () => {
    return (
        <div style={{textAlign: 'center', padding: '0 100%' }} >
             Try Saying: <br />
             Add {isIncome ? 'Income' : 'Expense'}
             for {isIncome ? '£100' : '£50'}
             in Category {isIncome ? 'Business' : 'House'}
             for {isIncome ? 'Sunday' : 'Friday'}
        </div>
    )
}

export default infoCard
