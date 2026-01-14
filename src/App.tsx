import CatBoarding from './assets/cat-boarding-accommodation.jpg';
import DogGrooming from './assets/dog-grooming.jpg';
import DogDaycare from './assets/dog-daycare.jpg';
import KennelIcon from './assets/icons/kennel-icon.svg';
import GroomingIcon from './assets/icons/grooming-icon.svg';
import PawsIcon from './assets/icons/paws-icon.svg';
import TennisBallIcon from './assets/icons/tennis-ball-icon.svg';
import HealthSafetyIcon from './assets/icons/health-and-safety-icon.svg';
import ClockIcon from './assets/icons/clock-icon.svg';
import AssignmentIcon from './assets/icons/assignment-icon.svg';  
import ThreeDogsImage from './assets/three-dogs-pet-hero.jpg';
import { useRef, useState } from 'react';

function App() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleVideo = () => {
    if (!iframeRef.current) return;

    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        method: isPaused ? "play" : "pause",
      }),
      "*"
    );
    setIsPaused((prev) => !prev);
  }
  return (
    <>
      {/* Hero Video */}
      <section className="max-w-7xl mx-auto w-full">
        {/* Video */}
        <div
          id="video-wrapper"
          className="relative aspect-video w-full overflow-hidden"
        >
          <iframe
            ref={iframeRef}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            src="https://player.vimeo.com/video/835607413?h=043d2f293f&background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0"
            allow="autoplay"
            title="Background video"
          ></iframe>
        </div>
        {/* Hero CTA */}
        <div className="mx-auto p-8 text-center">
          <h1 className="font-bold text-center text-5xl">A Pawfect Home Away From Home</h1>
          <p className="italic mt-4 text-2xl">Best of care, safety, and comfort for your pets while you're away</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="btn btn-primary">Make a Reservation</button>
            <button className="btn btn-outline" onClick={toggleVideo} aria-pressed={isPaused}>
              {isPaused ? "Play video" : "Pause video"}
            </button>
          </div>
        </div>
      </section>
      {/* Services  */}
      <section className="hero">
        <div>
          <div className="hero-content flex-col gap-8 p-8 w-full">
            <div className="w-full">
              <div className="flex place-items-center">
                <hr className="flex-2 border-[var(--color-base-300)] border-1" />
                <h2 className="grow-1 font-bold color-neutral text-center text-4xl">Our Services</h2>
                <hr className="flex-2 border-[var(--color-base-300)] border-1" />
              </div>
              <p className="max-w-2xl mx-auto py-4 text-center text-2xl italic">We offer the best care for your pets!</p>
            </div>
            {/* Service Cards */}
            <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4">
              <div className="card card-border bg-base-100 cursor-pointer group transition-all duration-250 ease-in shadow-sm hover:shadow-lg">
                <figure>
                  <img
                    src={DogDaycare}
                    alt="Dog sitting in front entrance of dog boarding kennel house" />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">Pet Boarding</h3>
                  <hr className="border-1 w-full transition-all duration-250 ease-in scale-x-50 group-hover:scale-x-100" />
                  <p>Cozy and secure accommodations for dogs & cats</p>
                  <img className="w-[56px]" src={KennelIcon} alt=""/>
                </div>
              </div>
              <div className="card card-border bg-base-100 cursor-pointer group transition-all duration-250 ease-in shadow-sm hover:shadow-lg">
                <figure>
                  <img
                    src={DogDaycare}
                    alt="Two dogs playing with toys outside" />
                </figure>
                <div className="card-body gap-4 items-center text-center">
                  <h3 className="card-title text-2xl">Doggy Daycare</h3>
                  <hr className="border-1 w-full transition-all duration-250 ease-in scale-x-50 group-hover:scale-x-100" />
                  <p>Fun-filled playtime & socialization</p>
                  <img className="w-[56px] rotate-24" src={TennisBallIcon} alt=""/>
                </div>
              </div>
              <div className="card card-border bg-base-100 cursor-pointer group transition-all duration-250 ease-in shadow-sm hover:shadow-lg">
                <figure>
                  <img
                    src={CatBoarding}
                    alt="Shoes" />
                </figure>
                <div className="card-body gap-4 items-center text-center">
                  <h3 className="card-title text-2xl">Grooming Services</h3>
                  <hr className="border-1 w-full transition-all duration-250 ease-in scale-x-50 group-hover:scale-x-100" />
                  <p>Bathing, trimming, & pampering</p>
                  <img className="w-[56px]" src={GroomingIcon} alt=""/>
                </div>
              </div>
              <div className="card card-border bg-base-100 cursor-pointer group transition-all duration-250 ease-in shadow-sm hover:shadow-lg">
                <figure>
                  <img
                    src={DogGrooming}
                    alt="Dog with a towel on its head about to groom" />
                </figure>
                <div className="card-body gap-4 items-center text-center">
                  <h3 className="card-title text-2xl">Grooming</h3>
                  <hr className="border-1 w-full transition-all duration-250 ease-in scale-x-50 group-hover:scale-x-100" />
                  <p>Professional obedience training</p>
                  <img className="w-[56px] rotate-24" src={PawsIcon} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="hero">
        <div className="hero-content flex-col-reverse gap-8 p-8 w-full xl:flex-row xl:gap-16">
          <img
            src={ThreeDogsImage}
            className="max-w-2xl rounded-lg shadow-sm w-full"
          />
          <div className="flex flex-col">
            <h2 className="color-neutral font-bold py-8 text-center text-4xl">Why Choose Us?</h2>
            <div className="flex flex-col gap-4">
              <div className="grid max-w-xl">
                <img className="col-span-1 col-start-1 row-span-full mr-2 w-[48px]" src={PawsIcon} alt=""/>
                <div className="col-start-2">
                  <p className="font-semibold text-lg">Safe & secure facility</p>
                  <span className="italic text-sm">Our facility is fully fenced, climate-controlled, and designed with your pet's safety in mind - so you can relax knowing they're protected at all times.</span>
                </div>
              </div>
              <div className="grid max-w-xl">
                <img className="col-span-1 col-start-1 row-span-full mr-2 w-[48px]" src={HealthSafetyIcon} alt=""/>
                <div className="col-start-2">
                  <p className="font-semibold text-lg">Experienced & caring staff</p>
                  <span className="italic text-sm">Our trained, animal-loving team treats every pet like family, providing attentive care, comfort, and plenty of affection throughout their stay.</span>
                </div>
              </div>
              <div className="grid max-w-xl">
                <img className="col-span-1 col-start-1 row-span-full mr-2 w-[48px]" src={ClockIcon} alt=""/>
                <div className="col-start-2">
                  <p className="font-semibold text-lg">24/7 supervision</p>
                  <span className=" italic text-sm">Pets are monitored around the clock by our on-site staff, ensuring immediate attention, safety, and peace of mind day and night.</span>
                </div>
              </div>
              <div className="grid max-w-xl">
                <img className="col-span-1 col-start-1 row-span-full mr-2 w-[48px]" src={AssignmentIcon} alt=""/>
                <div className="col-start-2">
                  <p className="font-semibold text-lg">Personalized attention</p>
                  <span className="italic text-sm">Each pet receives individualized care tailored to their specific needs, ensuring they feel comfortable and well-cared for during their stay.</span>
                </div>
              </div>
              <button className="btn btn-wide btn-primary mt-4 self-center">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
