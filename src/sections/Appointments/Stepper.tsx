import { getTranslations } from "next-intl/server";

const Stepper = async ({ currentStep, bookings }: { currentStep: number; bookings: number }) => {
  const t = await getTranslations();

  const steps = [
    { number: 1, title: t('step_select_appointment') },
    { number: 2, title: t('step_date_time') },
    { number: 3, title: t('step_information') },
    { number: 4, title: t('step_payment') },
    { number: 5, title: t('step_confirmation') },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto relative mb-8 sm:mb-20">
      {/* Background dashed line */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-3 transform ${
          bookings === 0 ? 'w-[95%] sm:w-[90%]' : 'w-[90%] sm:w-[85%]'
        }`}
      >
        <div className="border-t-2 border-dashed border-gray-300 mx-12"></div>
      </div>

      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          if (step.number === 3 && bookings > 0) return null;

          return (
            <div key={step.number} className="flex items-center justify-center flex-1">
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  data-aos="fade-left"
                  data-aos-delay={index * 200}
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-primary ring-4 ring-[rgba(100,156,159,0.40)]'
                      : 'bg-[#C8DCD7]'
                  }`}
                />
                {/* Step Title */}
                <span
                  data-aos="fade-left"
                  data-aos-delay={index * 200 + 100}
                  className={`mt-3 hidden sm:block text-sm font-medium text-center px-2 transition-colors duration-300 ${
                    currentStep >= step.number ? 'text-primary' : 'text-secondaryText'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
