// import React from 'react';
// import banner1 from '../assets/images/banner-01.jpg';
// import banner2 from '../assets/images/banner-02.jpg';
// import banner3 from '../assets/images/banner-03.jpg';
// import banner4 from '../assets/images/banner1.jpg';
// import banner5 from '../assets/images/banner2.jpg';
// import banner6 from '../assets/images/banner3.jpg';
// const FeatureGrid = () => {
//   const features = [
//     {
//       id: 1,
//       title: "New Arrivals",
//       description: "Check out our latest collection",
//       image: banner1,
//       span: false
//     },
//     {
//       id: 2,
//       title: "Summer Sale",
//       description: "Up to 50% off on summer collection",
//       image: banner2,
//       span: false
//     },
//     {
//       id: 3,
//       title: "Accessories",
//       description: "Complete your look with our accessories",
//       image: banner3,
//       span: false
//     },
//     {
//       id: 4,
//       title: "Winter Collection",
//       description: "Stay warm and stylish this winter",
//       image: banner4,
//       span: true
//     },
//     {
//       id: 5,
//       title: "Special Offers",
//       description: "Limited time deals on selected items",
//       image: banner5,
//       span: true
//     },
//     {
//       id: 6,
//       title: "Special Offers",
//       description: "Limited time deals on selected items",
//       image: banner6,
//       span: true
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[800px]">
//         {features.map((feature) => (
//           <div 
//             key={feature.id}
//             className={`relative group overflow-hidden rounded-lg ${
//               feature.span ? 'lg:col-span-1 md:col-span-2' : ''
//             }`}
//           >
//             {/* Image */}
//             <img 
//               src={feature.image} 
//               alt={feature.title}
//               className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//             />
            
//             {/* Default Title Overlay */}
//             <div className="absolute inset-0 bg-black/30 transition-opacity duration-500">
//               <div className="absolute bottom-6 left-6">
//                 <h3 className="text-white text-2xl font-semibold">
//                   {feature.title}
//                 </h3>
//               </div>
//             </div>

//             {/* Hover Content Overlay */}
//             <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                 <h3 className="text-white text-2xl font-semibold mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-white/90 text-lg">
//                   {feature.description}
//                 </p>
//                 {/* <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
//                   Shop Now
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureGrid;