// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Calgary's Premier Construction Company",
  description: "Z Double B Construction provides high-quality construction services in Calgary, Alberta. Specializing in commercial and residential construction.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <Image
            src="/images/construction-hero.jpg"
            alt="Z Double B Construction - Building Calgary's Future"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center md:text-left pt-20">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Building Calgary's</span>
              <span className="block text-blue-400">Future Together</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mx-0">
              Quality construction services with a focus on client satisfaction, craftsmanship, and timely delivery.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive construction solutions for your needs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/commercial-construction.jpg"
                  alt="Commercial Construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Commercial Construction</h3>
                <p className="mt-2 text-gray-500">
                  Building spaces where businesses thrive with attention to detail and quality craftsmanship.
                </p>
                <div className="mt-4">
                  <Link href="/services/commercial" className="text-blue-600 hover:text-blue-500">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/residential-construction.jpg"
                  alt="Residential Construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Residential Construction</h3>
                <p className="mt-2 text-gray-500">
                  Creating beautiful, functional homes that meet your exact specifications and exceed expectations.
                </p>
                <div className="mt-4">
                  <Link href="/services/residential" className="text-blue-600 hover:text-blue-500">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/images/renovation-remodeling.jpg"
                  alt="Renovation & Remodeling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Renovation & Remodeling</h3>
                <p className="mt-2 text-gray-500">
                  Transforming existing spaces into modern, functional areas tailored to your needs.
                </p>
                <div className="mt-4">
                  <Link href="/services/renovation" className="text-blue-600 hover:text-blue-500">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Z Double B Construction
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                With years of experience in the Calgary construction industry, we've built our reputation on quality workmanship, timely project completion, and exceptional customer service.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Experienced Team</h3>
                    <p className="mt-2 text-gray-500">Our skilled professionals bring expertise to every project.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Quality Craftsmanship</h3>
                    <p className="mt-2 text-gray-500">We never compromise on materials or workmanship.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">On-Time Delivery</h3>
                    <p className="mt-2 text-gray-500">We respect deadlines and your timeline.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about" className="text-blue-600 font-medium hover:text-blue-500">
                  Learn more about us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="relative rounded-lg shadow-md overflow-hidden h-64 lg:h-96">
                <Image
                  src="/images/construction-team.jpg"
                  alt="Z Double B Construction Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-500">
              Take a look at some of our recent work
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project1.jpg"
                  alt="Downtown Office Building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Downtown Office Building</h3>
                <p className="mt-2 text-gray-500">
                  A modern 10-story commercial space in Calgary's business district.
                </p>
                <div className="mt-4">
                  <Link href="/projects/downtown-office-building" className="text-blue-600 hover:text-blue-500">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project2.jpg"
                  alt="Luxury Home Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Luxury Home Development</h3>
                <p className="mt-2 text-gray-500">
                  A collection of custom-designed homes in an exclusive Calgary neighborhood.
                </p>
                <div className="mt-4">
                  <Link href="/projects/luxury-home-development" className="text-blue-600 hover:text-blue-500">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project3.jpg"
                  alt="Restaurant Renovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Restaurant Renovation</h3>
                <p className="mt-2 text-gray-500">
                  Complete interior transformation of a popular local eatery.
                </p>
                <div className="mt-4">
                  <Link href="/projects/restaurant-renovation" className="text-blue-600 hover:text-blue-500">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-500">
              Don't just take our word for it
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">John Smith</h4>
                  <p className="text-gray-500">Commercial Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Z Double B Construction delivered our office renovation project on time and on budget. Their attention to detail and quality of work exceeded our expectations."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500">Residential Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We couldn't be happier with our new home. The Z Double B team was professional, responsive, and truly cared about bringing our vision to life."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Michael Brown</h4>
                  <p className="text-gray-500">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The renovation of our restaurant was completed with minimal disruption to our business. The quality of work was exceptional and our customers love the new space."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-blue-300">Contact us today for a free quote.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get in touch
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}