'use client'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Footer from '@/components/footer';

export default function BankPage() {
  // List of banks
  const banks = ['Bank of America', 'Chase Bank', 'Wells Fargo', 'Citibank', 'HSBC'];

  // State to manage popup visibility, selected bank, and form data
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [submittedBank, setSubmittedBank] = useState<string | null>(null);
  const [form, setForm] = useState({ fullName: '', accountNumber: '' });

  // Handle input changes in the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle card click to open form popup
  const handleCardClick = (bank: string) => {
    setSelectedBank(bank);
    setIsOpen(true);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedBank(selectedBank); // Set the submitted bank to track it visually
    console.log(`Full Name: ${form.fullName}, Account Number: ${form.accountNumber} for ${selectedBank}`);
    setIsOpen(false);
  };

  return (
    <div>  
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Select Your Bank</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {banks.map((bank) => (
          <div
            key={bank}
            className={`relative bg-blue-200 hover:bg-blue-300 text-center p-6 rounded-lg cursor-pointer shadow-lg ${
              submittedBank === bank ? 'border-4 border-green-500' : ''
            }`}
            onClick={() => handleCardClick(bank)}
          >
            <h2 className="text-xl font-semibold">{bank}</h2>
            {/* Show right check mark on the selected bank card */}
            {submittedBank === bank && (
              <div className="absolute top-2 right-2 text-green-600 font-bold text-2xl">✔</div>
            )}
          </div>
        ))}
      </div>

      {/* Pop-up form dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          {/* Custom overlay */}
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

          {/* Dialog panel */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm mx-auto z-10">
            <Dialog.Title className="text-2xl font-bold mb-4">{`Enter Details for ${selectedBank}`}</Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium">Account Number</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={form.accountNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
    <Footer/>
    </div>
  );
}
