// import React from 'react';
// import { 
//   UserGroupIcon, 
//   ClockIcon, 
//   CalendarIcon, 
//   ChartBarIcon 
// } from '@heroicons/react/24/outline';

// const features = [
//   {
//     name: 'Easy Appointments',
//     description: 'Schedule appointments online with just a few clicks',
//     icon: CalendarIcon,
//   },
//   {
//     name: '24/7 Support',
//     description: 'Round-the-clock medical support for emergencies',
//     icon: ClockIcon,
//   },
//   {
//     name: 'Expert Doctors',
//     description: 'Qualified and experienced medical professionals',
//     icon: UserGroupIcon,
//   },
//   {
//     name: 'Digital Records',
//     description: 'Secure digital health records and history',
//     icon: ChartBarIcon,
//   },
// ];

// const Features = () => {
//   return (
//     <div className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-xl text-gray-500">
//             We provide comprehensive healthcare services with modern facilities
//           </p>
//         </div>

//         <div className="mt-10">
//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature) => (
//               <div key={feature.name} className="pt-6">
//                 <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//                   <div className="-mt-6">
//                     <div>
//                       <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
//                         <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
//                       </span>
//                     </div>
//                     <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
//                       {feature.name}
//                     </h3>
//                     <p className="mt-5 text-base text-gray-500">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;