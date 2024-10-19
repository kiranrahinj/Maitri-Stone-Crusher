import React from 'react';
import { useForm } from 'react-hook-form';

const AddExpense = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center  p-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl  text-gray-700 mb-6 text-center font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">Add Expense</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label className="block text-gray-600 font-medium">Date</label>
            <input 
              type="date" 
              {...register('date', { required: 'Date is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Diesel Price</label>
            <input 
              type="number" 
              step="0.01"
              {...register('dieselPrice', { required: 'Diesel price is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter diesel price"
            />
            {errors.dieselPrice && <p className="text-red-500 text-sm mt-1">{errors.dieselPrice.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Diesel Paid By</label>
            <select 
              {...register('dieselPaidBy', { required: 'Select who paid for the diesel' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="select">Select Option</option>
              <option value="Pinu">Pinu</option>
              <option value="Yogi">Yogi</option>
              <option value="Satyam">Satyam</option>
            </select>
            {errors.dieselPaidBy && <p className="text-red-500 text-sm mt-1">{errors.dieselPaidBy.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Expense</label>
            <input 
              type="number" 
              {...register('expense', { required: 'Expense amount is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter expense amount"
            />
            {errors.expense && <p className="text-red-500 text-sm mt-1">{errors.expense.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Expense Paid By</label>
            <select 
              {...register('expensePaidBy', { required: 'Select who paid the expense' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="select">Select Option</option>
              <option value="Pinu">Pinu</option>
              <option value="Yogi">Yogi</option>
              <option value="Satyam">Satyam</option>
            </select>
            {errors.expensePaidBy && <p className="text-red-500 text-sm mt-1">{errors.expensePaidBy.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Remark</label>
            <textarea
              {...register('remark')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Add any remarks (optional)"
            />
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Submit Expense
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddExpense;
