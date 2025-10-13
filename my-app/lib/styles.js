export const sectionStyle = "rounded-2xl border border-gray-300 shadow-md p-8 bg-gradient-to-br from-white to-blue-50";

export const labelStyle = "block mb-3 text-md font-bold text-blue-900";

const baseInputStyle = "w-full rounded-xl px-5 py-4 border-2 shadow-md focus:outline-none focus:ring-4 bg-white text-blue-900 placeholder-blue-400 transition transform hover:scale-[1.02] active:scale-[0.98]";

export const inputStyle = (hasError) => 
  `${baseInputStyle} ${hasError ? 'border-red-500 focus:ring-red-400' : 'border-blue-700 focus:ring-yellow-400'}`;

export const selectStyle = (hasError) => 
  `${inputStyle(hasError)} pr-12`;

export const textareaStyle = (hasError) => 
  `${inputStyle(hasError)} resize-none`;
