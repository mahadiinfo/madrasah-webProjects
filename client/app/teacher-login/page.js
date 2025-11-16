import React from 'react'

const TeacherLoginPage = () => {
  return (
    <div>
    <div className="min-h-screen  from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">শিক্ষক লগইন</h1>
            
            <form className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">ফোন নম্বর</label>
                    <input 
                        type="tel" 
                        placeholder="আপনার ফোন নম্বর" 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">পাসওয়ার্ড</label>
                    <input 
                        type="password" 
                        placeholder="আপনার পাসওয়ার্ড" 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200">
                    লগইন করুন
                </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default TeacherLoginPage
