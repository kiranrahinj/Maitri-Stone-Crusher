import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../Axios/Api';
import { useDispatch } from 'react-redux';
import { fetchCustomer } from '../../Redux/Slices/AllCustomerSlice';

const UpdateCustomer = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const { customerId } = useParams();
  const id = parseInt(customerId, 10);

  const [customer, setCustomer] = useState({});
  const dispatch = useDispatch();

  const handleAmountReceivedByChange = (e) => {
    const value = e.target.value;
    setIsOtherSelected(value === 'Other');
    if (value !== 'Other') {
      setValue('otherReceiver', ''); // Clear the "other" input if not selected
    }
  };

  // Fetch customer data
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/user/customer/getCustomer/${id}`);
        setCustomer(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchCustomer();
  }, [id]);

  // Set form values when customer data is available
  useEffect(() => {
    if (customer) {
      setValue('name', customer.name);
      setValue('totalAmount', customer.totalAmount);
      setValue('receivedAmount', customer.receivedAmount);
      setValue('amountRecievedTo', customer.amountRecievedTo);
    }
  }, [customer, setValue]); // Set value when customer data changes
  
  const navigate=useNavigate()
  const onSubmit = async (data) => {
    try {
      const res = await api.put(`/user/customer/updateCustomer/${id}`, data);
      console.log(res);
      dispatch(fetchCustomer()); // Re-fetch customer data after updating
    } catch (error) {
      console.log(error);
    }
    navigate("/all_customer") 
    reset(); // Clear form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 p-6">
      {loading ? ( // Display loading spinner while data is being fetched
        <div>Loading...</div>
      ) : (
        <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Update Customer</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium">Customer Name</label>
              <input 
                type="text" 
                {...register('name', { required: 'Customer Name is required' })} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter customer name" 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Total Amount</label>
              <input 
                type="number" 
                {...register('totalAmount', { required: 'Total amount is required', min: 0 })} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter total amount" 
              />
              {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount.message}</p>}
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
              <label className="block text-gray-600 font-medium">Amount Received By</label>
              <select 
                {...register('amountRecievedTo', { required: 'Amount received by is required' })} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                onChange={handleAmountReceivedByChange}
              >
                <option value="select">Select Option</option>
                <option value="Pinu">Pinu</option>
                <option value="Yogi">Yogi</option>
                <option value="Satyam">Satyam</option>
                <option value="Other">Other</option>
              </select>
              {errors.amountRecievedTo && <p className="text-red-500 text-sm mt-1">{errors.amountRecievedTo.message}</p>}
            </div>

            {isOtherSelected && (
              <div>
                <label className="block text-gray-600 font-medium">Other Payment Receiver</label>
                <input 
                  type="text" 
                  {...register('otherReceiver', { required: 'This field is required when selecting "Other"' })} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter name" 
                />
                {errors.otherReceiver && <p className="text-red-500 text-sm mt-1">{errors.otherReceiver.message}</p>}
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
              Update Customer
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateCustomer;
