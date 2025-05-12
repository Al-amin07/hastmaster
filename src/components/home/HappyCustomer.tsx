import Image from 'next/image';
import logo1 from '@/assets/happy-client/1.avif'
import c1 from '@/assets/certificate/1.jpg'
import p1 from '@/assets/certificate/p.jpeg'
export default function TestimonialsPage() {
  const happyPartner = [
    { logo: logo1, alt: "logo-1" },
    { logo: logo1, alt: "logo-2" },
    { logo: logo1, alt: "logo-3" },
    { logo: logo1, alt: "logo-4" },
    { logo: logo1, alt: "logo-5" },
    { logo: logo1, alt: "logo-6" },
    { logo: logo1, alt: "logo-1" },
    { logo: logo1, alt: "logo-2" },
    { logo: logo1, alt: "logo-3" },
    { logo: logo1, alt: "logo-4" },
    { logo: logo1, alt: "logo-5" },
    { logo: logo1, alt: "logo-6" },
  ]
  const certifications = [
    { logo: c1, alt: "logo-1" },
    { logo: c1, alt: "logo-2" },
    { logo: c1, alt: "logo-3" },

  ]
  const testimonials = [
    {
      name: 'Vanessa',
      text: 'The customer service at ZYCAPS is just the best! Their products are really very good at a reasonable price. I’ve been custom our own brand hats for 10 years now and I was never even once disappointed! Keep it up ZYCAPS!',
      img: p1,
    },
    {
      name: 'Ran C.',
      text: "We just give the logo to the seller and tell him about my idea for the caps. Then he designs about 4 caps out, we just choose one and make about 1000 pcs per year. High quality, really nice hat manufacturer.",
      img: p1,
    },
    {
      name: 'Nalie',
      text: "I’m quite hesitant to order from this page since the product is coming from overseas. I thought it would arrive out of the due date. I was wrong…shipping was quick, and I sold all my hats in no time. I’ll definitely order again. Let ud pick up zycaps hat manufacturer togther, they wont let you down!",
      img: p1,
    },
  ]
  return (
    <div className=' flex justify-center py-24'>
      <div className="bg-white shadow-2xl space-y-24 rounded-xl max-w-5xl py-16 px-4 md:px-10 text-center">
        {/* Happy Customers */}
        <section className=" text-black/80">
          <h2 className="text-3xl md:text-4xl font-semibold">Happy Customer</h2>
          <span className='w-12 h-[3px] inline-block bg-yellow-400'></span>
          <p className="text-lg text-[#FDB467] mt-4 uppercase tracking-widest font-semibold">
            Don&apos;t take it from us, hear from
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto mb-6">
            The good quality of our caps have recognized by many clients, who have rich choice and use experience to provide you with the most suitable caps.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-center">
            {happyPartner?.map((logo, i) => (
              <div key={i} className="relative w-full h-32">
                <Image src={logo.logo} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className=" mx-auto  text-black/80">
          <h2 className="text-3xl md:text-4xl text-center font-semibold mb-10">Our Certifications
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div key={i} className="relative h-40 rounded-full">
                <Image src={cert.logo} alt={cert.alt} height={300}
                  width={400}
                  className="object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Trusted Partners */}
        <section className='text-black/80'>
          <h2 className="text-3xl md:text-4xl font-semibold">Trusted Partners
          </h2>
          <span className='w-12 h-[3px] inline-block bg-yellow-400'></span>

          <p className="text-gray-700 max-w-4xl mx-auto my-6">
            Satisfying our clients is our core business. This is why in addition to providing superior quality custom headwear, we also attach particular attention to the service we offer in order de build a win-win relationship..
          </p>
          <div className="grid md:grid-cols-3 z gap-8">
            {testimonials.map((partner, i) => (
              <div key={i} className=" p-6 rounded-lg   text-left">
                <div className="flex flex-col  items-center gap-4 mb-4">
                  <div className="relative   rounded-full ">
                    <Image src={partner.img} alt={partner.name} height={400} width={200} className=" rounded-full" />
                  </div>
                  <div className="font-semibold">{partner?.name}</div>
                </div>
                <p className="text-gray-700">{partner.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}