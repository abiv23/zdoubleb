// src/app/services/page.js
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Construction Services in Calgary",
  description: "Z Double B Construction offers comprehensive construction services including commercial construction, residential construction, and renovation services in Calgary.",
};

// This would typically come from a CMS or API in a production site
const services = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    shortDescription: 'Building spaces where businesses thrive with attention to detail and quality craftsmanship.',
    description: 'We specialize in creating functional, appealing commercial spaces that meet the unique needs of your business. From office buildings to retail spaces, restaurants to warehouses, our team has the expertise to deliver outstanding results.',
    features: [
      'Custom office build-outs',
      'Retail store construction',
      'Restaurant construction',
      'Warehouse and industrial facilities',
      'Medical and healthcare facilities',
      'Project management and consulting'
    ],
    image: '/images/commercial-construction.jpg',
    imageAlt: 'Commercial Construction Services'
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    shortDescription: 'Creating beautiful, functional homes that meet your exact specifications and exceed expectations.',
    description: 'Our residential construction services focus on building high-quality homes that reflect your personal style and meet your family's needs. Whether you're looking to build a custom home or a spec home for resale, we have the expertise to bring your vision to life.',
    features: [
      'Custom home construction',
      'Spec home building',
      'Multi-family developments',
      'Basement development',
      'Home additions',
      'Energy-efficient home design'
    ],
    image: '/images/residential-construction.jpg',
    imageAlt: 'Residential Construction Services'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    shortDescription: 'Transforming existing spaces into modern, functional areas tailored to your needs.',
    description: 'Give your home or commercial space a fresh look with our comprehensive renovation and remodeling services. From minor updates to complete overhauls, we have the skills and experience to transform your space into something special.',
    features: [
      'Kitchen remodeling',
      'Bathroom renovations',
      'Office renovations',
      'Restaurant remodeling',
      'Historic renovations',
      'Whole-house remodels'
    ],
    image: '/images/renovation-remodeling.jpg',
    imageAlt: 'Renovation and Remodeling Services'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-blue-700 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Our Services</h1>
          <p className="mt-2 text-xl text-blue-200">
            Comprehensive construction solutions for your needs
          </p>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Expert Construction Services in Calgary
            </p>
            <p className="mt-4 text-lg text-gray-500">
              At Z Double B Construction, we offer a wide range of construction services to meet your needs. 
              From commercial and residential construction to renovations and remodeling, our experienced team 
              is dedicated to delivering high-quality results that exceed your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                  index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative">
                  <div className="relative h-80 overflow-hidden rounded-lg shadow-lg lg:h-auto">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-gray-500">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-gray-900">Services include:</h3>
                      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base text-gray-700">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-blue-300">Contact us today for a free consultation.</span>
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
          </div>
        </div>
      </div>
    </>
  );
}