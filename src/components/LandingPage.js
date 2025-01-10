// src/components/LandingPage.js
import React, { useState } from 'react';

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mental Health Companion</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Mental Health Companion Platform</h2>
          <p className="text-lg mb-8">Your journey to better mental health starts here.</p>
          <div className="space-x-4">
            <button onClick={handleLoginClick} className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-100">Login</button>
            <button onClick={handleSignupClick} className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-100">Signup</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Mindfulness Exercises</h3>
              <p className="text-gray-600">Practice mindfulness with guided exercises.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Mood Tracking</h3>
              <p className="text-gray-600">Track your mood and emotions over time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Support Community</h3>
              <p className="text-gray-600">Connect with a supportive community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"This platform has been a game-changer for my mental health."</p>
              <p className="text-right mt-4">- Jane Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"I feel more connected and supported than ever before."</p>
              <p className="text-right mt-4">- John Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">Have questions or need support? Reach out to us.</p>
          <a href="mailto:support@mentalhealthcompanion.com" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Mental Health Companion. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Form */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform scale-100 opacity-100 transition-all duration-300 w-full max-w-md">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Login</button>
              <p className="text-center mt-4 text-gray-600">Don't have an account? <button onClick={handleSignupClick} className="text-blue-500 hover:underline">Create Account</button></p>
            </form>
          </div>
        </div>
      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform scale-100 opacity-100 transition-all duration-300 w-full max-w-md">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6">Signup</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Create Password</label>
                <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Signup</button>
              <p className="text-center mt-4 text-gray-600">Already have an account? <button onClick={handleLoginClick} className="text-blue-500 hover:underline">Login</button></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
