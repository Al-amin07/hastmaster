
import { PiArrowArcLeftLight, PiArrowArcRightLight } from "react-icons/pi";

const steps = [
  {
    number: '01',
    title: 'Sample Development',
    description: 'Developing sample is the primary issue to start any order.',
  },
  {
    number: '02',
    title: 'Factory sourcing',
    description: 'A good factory is always a prerequisite for quality production.',
  },
  {
    number: '03',
    title: 'Final quality checking',
    description: 'When goods is ready to export, a final inspection help buyer know how is the goods condition',
  },
  {
    number: '04',
    title: 'Exporting goods',
    description: 'After finishing goods we can export the goods to our customer as well with your own export docs',
  },
];
export default function SolutionProcess() {

  return (
    <div className="py-16 bg-white text-center">
      <div className="text-blue-500 uppercase text-sm font-semibold tracking-widest mb-2">Work Process</div>
      <h2 className="text-3xl font-bold mb-12">Our Solution Process</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 max-w-7xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col cursor-pointer group items-center text-center space-y-4 relative">
            {/* Circle Number */}
            <div className="w-28 h-28 relative group-hover:bg-red-500 group-hover:text-white transition-colors duration-500 rounded-full   flex items-center justify-center text-red-600 text-4xl font-bold">
              <div className=" absolute animate-spin duration-[50000] h-full w-full  rounded-full border-[3px]  border-gray-400 border-dashed">

              </div>
              {step.number}
            </div>
            {/* Text */}
            <h4 className="font-bold text-xl">{step.title}</h4>
            <p className="text-base text-gray-600 w-3/4 md:w-full mx-auto">{step.description}</p>

            {/* Arrows */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 right-[-32px]">
                {
                    index % 2 === 0 ? <PiArrowArcRightLight className="translate-1.5 " size={60} /> : 
                <PiArrowArcLeftLight className=" rotate-180 " size={60} />
                }
                
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
