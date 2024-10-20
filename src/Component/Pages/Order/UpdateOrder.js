import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateOrder = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [order, setOrder] = useState(null); // State to hold fetched order

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

  const handlePending = (e) => {
    const value = e.target.value;
    setIsPending(value === "Completed");  // Show payment fields when "Completed" is selected
  };

  const { userId } = useParams();
  const id = parseInt(userId, 10);

  useEffect(() => {
    // Simulated fetch call (replace with real API call)
    const fetchOrder = () => {
      const ordersData = [
        // Include the `id` field in your order objects
        { id: 1, name: "John Doe", location: "New York", status: "Completed", date: "2024-10-18", materialType: "Steel", rate: "$500", paymentStatus: "Paid", receivedAmount: "$500", filling: "50%", fillingBy: "Pinu" },
        { id: 2, name: "Jane Doe", location: "California", status: "Pending", date: "2024-10-19", materialType: "Iron", rate: "$300", paymentStatus: "Unpaid", receivedAmount: "$0", filling: "80%", fillingBy: "Yogi" },
      ];

      const foundOrder = ordersData.find((order) => order.id === id);
      setOrder(foundOrder);
    };

    fetchOrder();
  }, [id]);

  useEffect(() => {
    if (order) {
      // Set initial form values using setValue
      setValue('customerName', order.name);
      setValue('location', order.location);
      setValue('orderStatus', order.status);
      setValue('date', order.date);
      setValue('typeOfMaterial', order.materialType);
      setValue('rate', parseFloat(order.rate.replace('$', ''))); // Ensure it's a number
      setValue('paymentStatus', order.paymentStatus);
      setValue('receivedAmount', parseFloat(order.receivedAmount.replace('$', ''))); // Ensure it's a number
      setValue('orderFillRate', parseFloat(order.filling)); // Ensure it's a number
      setValue('orderFilledBy', order.fillingBy);
      
      // Set the pending state based on the order status
      setIsPending(order.status === 'Completed');
    }
  }, [order, setValue]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Update Order</h1>
        
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
              {...register('rate', { required: 'Rate is required', min: 0 })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter rate"
            />
            {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Order Fill Rate</label>
            <input 
              type="number" 
              {...register('orderFillRate', { required: 'Order fill rate is required', min: 0 })}
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
            <label className="block text-gray-600 font-medium">Order Status</label>
            <select 
              {...register('orderStatus', { required: 'Order status is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handlePending}
            >
              <option value="select">Select Option</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus.message}</p>}
          </div>

           {/* Conditionally show payment fields when order status is "Completed" */}
           {isPending && (
            <>
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
                  {...register('receivedAmount', { required: 'Received amount is required', min: 0 })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter received amount"
                />
                {errors.receivedAmount && <p className="text-red-500 text-sm mt-1">{errors.receivedAmount.message}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Payment Received To</label>
                <select 
                  {...register('paymentReceivedBy', { required: 'Select who received the payment' })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={handlePaymentReceivedByChange}
                >
                  <option value="select">Select Option</option>
                  <option value="Pinu">Pinu</option>
                  <option value="Yogi">Yogi</option>
                  <option value="Satyam">Satyam</option>
                  <option value="Other">Other</option>
                </select>
                {errors.paymentReceivedBy && <p className="text-red-500 text-sm mt-1">{errors.paymentReceivedBy.message}</p>}
              </div>

              {isOtherSelected && (
                <div>
                  <label className="block text-gray-600 font-medium">Other Payment Receiver</label>
                  <input 
                    type="text" 
                    {...register('otherPaymentReceiver', { required: 'This field is required when selecting "Other"' })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter name"
                  />
                  {errors.otherPaymentReceiver && <p className="text-red-500 text-sm mt-1">{errors.otherPaymentReceiver.message}</p>}
                </div>
              )}
            </>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
            Update Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrder;
