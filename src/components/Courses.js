import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Courses = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl  font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight py-5">Available Courses</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Explore our comprehensive collection of programming courses
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-600 w-64"
              />
            </div>
            <details className="relative">
              <summary className="flex items-center space-x-2 cursor-pointer bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-indigo-600">
                <span>Filter</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </summary>
              <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg p-4 w-48 z-10">
                <label className="block mb-2">
                  <input type="checkbox" className="mr-2" />
                  Beginner
                </label>
                <label className="block mb-2">
                  <input type="checkbox" className="mr-2" />
                  Intermediate
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  Advanced
                </label>
              </div>
            </details>
          </div>
        </header>

        {/* Courses Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Python Fundamentals", desc: "Learn Python basics including syntax, data types, and control structures.", level: "Beginner", icon: "code" },
            { title: "Advanced Java", desc: "Master advanced Java concepts including multithreading and design patterns.", level: "Advanced", icon: "data_object" },
            { title: "C++ Programming", desc: "Learn object-oriented programming with C++ from scratch.", level: "Intermediate", icon: "terminal" }
          ].map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <span className={`material-symbols-outlined text-5xl mb-4 text-indigo-600`}>{course.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-center">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{course.desc}</p>
              <div className="flex items-center justify-between w-full">
                <span className={`bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm`}>{course.level}</span>
                <button className="text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-full transition-colors">Start Learning</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};