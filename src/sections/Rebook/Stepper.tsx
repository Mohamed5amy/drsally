

const Stepper = ({ currentStep , bookings } : {currentStep : number , bookings : number}) => {
  const steps = [
    { number: 1, title: 'Edit Service' },
    { number: 2, title: 'Date & Time' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto relative mb-8 sm:mb-20">
      {/* Background dashed line */}
      <div className={`absolute left-1/2 -translate-x-1/2 top-3 transform w-[95%] sm:w-[65%]`}>
        <div className="border-t-2 border-dashed border-gray-300 mx-12"></div>
      </div>
      
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
           return (
            <div key={step.number} className="flex items-center justify-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">

              <div data-aos="fade-left" data-aos-delay={index * 200} className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  currentStep >= step.number
                      ? 'bg-primary ring-4 ring-[rgba(100,156,159,0.40)]'
                      : 'bg-[#C8DCD7]'
                }`}
              />
                
                {/* Step Title */}
                <span data-aos="fade-left" data-aos-delay={(index * 200) + 100}
                  className={`mt-3 hidden sm:block text-sm font-medium text-center px-2 transition-colors duration-300 ${
                    currentStep >= step.number
                      ? 'text-primary'
                      : 'text-secondaryText'
                  }`}
                >
                  {step.title}
                </span>

              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
};

export default Stepper;