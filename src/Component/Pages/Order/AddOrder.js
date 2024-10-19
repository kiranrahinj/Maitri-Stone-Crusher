import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddOrder = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handlePaymentReceivedByChange = (e) => {
    const value = e.target.value;
    setIsOtherSelected(value === 'Other');
    if (value !== 'Other') {
      setValue('otherPaymentReceiver', '');  // Clear the "other" input if not selected
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Add Order</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label className="block text-gray-600 font-medium">Customer Name</label>
            <input 
              type="text" 
              {...register('customerName', { required: 'Customer Name is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter customer name"
            />
            {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Location</label>
            <input 
              type="text" 
              {...register('location', { required: 'Location is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>


          <div>
            <label className="block text-gray-600 font-medium">Order Status</label>
            <select 
              {...register('orderStatus', { required: 'Order status is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="select">Select Option</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus.message}</p>}
          </div>

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
            <label className="block text-gray-600 font-medium">Type of Material</label>
            <input 
              type="text" 
              {...register('typeOfMaterial', { required: 'Type of material is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter type of material"
            />
            {errors.typeOfMaterial && <p className="text-red-500 text-sm mt-1">{errors.typeOfMaterial.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Rate</label>
            <input 
              type="number" 
              {...register('rate', { required: 'Rate is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter rate"
            />
            {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Payment Status</label>
            <select 
              {...register('paymentStatus', { required: 'Payment status is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="select">Select Option</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="credit">Credit</option>
            </select>
            {errors.paymentStatus && <p className="text-red-500 text-sm mt-1">{errors.paymentStatus.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Received Amount</label>
            <input 
              type="number" 
              {...register('receivedAmount', { required: 'Received amount is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter received amount"
            />
            {errors.receivedAmount && <p className="text-red-500 text-sm mt-1">{errors.receivedAmount.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Payment Received To</label>
            <select 
              {...register('paymentReceivedBy', { required: 'Select a recipient' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handlePaymentReceivedByChange}
            >
              <option value="select">Select Option</option>
              <option value="Pinu">Pinu Dada</option>
              <option value="Yogi">Yogi</option>
              <option value="Satyam">Satyam</option>
              <option value="Other">Other</option>
            </select>
            {errors.paymentReceivedBy && <p className="text-red-500 text-sm mt-1">{errors.paymentReceivedBy.message}</p>}
          </div>

          {isOtherSelected && (
            <div>
              <label className="block text-gray-600 font-medium">Specify Name</label>
              <input
                type="text"
                {...register('otherPaymentReceiver', { required: 'Please specify the name' })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter recipient name"
              />
              {errors.otherPaymentReceiver && <p className="text-red-500 text-sm mt-1">{errors.otherPaymentReceiver.message}</p>}
            </div>
          )}

          <div>
            <label className="block text-gray-600 font-medium">Order Fill Rate</label>
            <input 
              type="number" 
              {...register('orderFillRate', { required: 'Order fill rate is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter order fill rate"
            />
            {errors.orderFillRate && <p className="text-red-500 text-sm mt-1">{errors.orderFillRate.message}</p>}
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Order Filled By</label>
            <select 
              {...register('orderFilledBy', { required: 'Order filled by is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter who filled the order"
            >
              <option value="select">Select Option</option>
              <option value="Pinu">Pinu Dada</option>
              <option value="Yogi">Yogi</option>
              <option value="Satyam">Satyam</option>
            </select>
            {errors.orderFilledBy && <p className="text-red-500 text-sm mt-1">{errors.orderFilledBy.message}</p>}
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Submit Order
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddOrder;
