import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../Axios/Api';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../Redux/Slices/AllOrdersSlice';

const UpdateOrder = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  
  const [order, setOrder] = useState([]); // State to hold fetched order

  

  const handlePaymentReceivedByChange = (e) => {
    const value = e.target.value;
    setIsOtherSelected(value === 'Other');
    if (value !== 'Other') {
      setValue('otherPaymentReceiver', '');  // Clear the "other" input if not selected
    }
  };

  const handlePending = (e) => {
    const value = e.target.value;
    setIsPendingOrder(value === "Completed");  // Show payment fields when "Completed" is selected
  };

  const { userId } = useParams();
  const id = parseInt(userId, 10);

  useEffect(() => {
  
    const fetchOrder = async() => {
      
      try{
        const response =await api.get(`/user/order/${id}`);
        console.log(response.data);
        setOrder(response.data)
      }
      catch(error){
        console.log(error); 
      }
    }

    fetchOrder();
  }, [id]);
  
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const onSubmit = async(data) => {

    if(data.status==="Pending"){
      data.paymentStatus="UnPaid";
      data.recievedTo="None";
      data.recievedAmount=0;
    }
    const formDatab = new FormData();
    for (const key in data) {
      formDatab.append(key, data[key]);
    }
    formDatab.append("order_created_by",order.orderCreatedBy);
    try{
        const res= await api.put(`/user/order/update_order/${id}`,data)
        fetch(
          "https://script.google.com/macros/s/AKfycbx1DtOQq3yMfqzZz64uBsUpAp-hcpBLP8r11opBUPzfRoAMDFTNsQUSQ1TW1-C8U-WU/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log("Form submitted successfully:", result);
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
          });

        console.log(res); 
        dispatch(fetchOrders())
    }
    catch(error){
      console.log(error)
    }

    console.log(data);
    reset();
    navigate("/orders")
  };

  const [isPendingOrder, setIsPendingOrder] = useState(false);

  useEffect(() => {
    if (order) {
      // Set initial form values using setValue
      setValue('name', order.name);
      setValue('location', order.location);
      setValue('status', order.status);
      setValue('date', order.date);
      setValue('materialType', order.materialType);
      setValue('rate', parseInt(order.rate)); // Ensure it's a number
      setValue('paymentStatus', order.paymentStatus);
      setValue('recievedTo', order.recievedTo);
      setValue('recievedAmount', parseInt(order.recievedAmount));      
      setValue('filling', parseInt(order.filling)); // Ensure it's a number
      setValue('fillingBy', order.fillingBy);

      //recieved to
      
    
      setIsPendingOrder(order.status === 'Completed');
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
              {...register('name', { required: 'Customer Name is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter customer name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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
              {...register('materialType', { required: 'Type of material is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter type of material"
            />
            {errors.materialType && <p className="text-red-500 text-sm mt-1">{errors.materialType.message}</p>}
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
              {...register('filling', { required: 'Order fill rate is required', min: 0 })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter order fill rate"
            />
            {errors.filling && <p className="text-red-500 text-sm mt-1">{errors.filling.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Order Filled By</label>
            <select 
              {...register('fillingBy', { required: 'Order filled by is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter who filled the order"
            >
              <option value="select">Select Option</option>
              <option value="Pinu">Pinu Dada</option>
              <option value="Yogi">Yogi</option>
              <option value="Satyam">Satyam</option>
            </select>
            {errors.fillingBy && <p className="text-red-500 text-sm mt-1">{errors.fillingBy.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Order Status</label>
            <select 
              {...register('status', { required: 'Order status is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handlePending}
            >
              <option value="select">Select Option</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
          </div>

           {/* Conditionally show payment fields when order status is "Completed" */}
           {isPendingOrder && (
            <>
              <div>
                <label className="block text-gray-600 font-medium">Payment Status</label>
                <select 
                  {...register('paymentStatus', { required: 'Payment status is required' })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="select">Select Option</option>
                  <option value="Paid">Paid</option>
                  <option value="UnPaid">UnPaid</option>
                  <option value="Credit">Credit</option>
                </select>
                {errors.paymentStatus && <p className="text-red-500 text-sm mt-1">{errors.paymentStatus.message}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Received Amount</label>
                <input 
                  type="number" 
                  {...register('recievedAmount', { required: 'Received amount is required', min: 0 })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter received amount"
                />
                {errors.recievedAmount && <p className="text-red-500 text-sm mt-1">{errors.recievedAmount.message}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Payment Received To</label>
                <select 
                  {...register('recievedTo', { required: 'Select who received the payment' })}
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
