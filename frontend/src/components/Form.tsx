import { ReactNode } from 'react';

const Form = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Form Title</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Form;
