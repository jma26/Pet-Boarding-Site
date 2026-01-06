import EmeraldEmployeesWithDogs from './assets/emerald-resort-employees-with-dogs.jpg';
import CatBoarding from './assets/cat-boarding-accommodation.jpg';
import DogBoarding from './assets/dog-boarding-accommodation.jpg';
import DogGrooming from './assets/dog-grooming.jpg';
import DogDaycare from './assets/dog-daycare.jpg';
import { useRef, useState } from 'react';

function App() {
  const iframeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleVideo = () => {
    if (!iframeRef.current) return;

    iframeRef.current.contentWindow.postMessage(
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
        <div className="mx-auto max-w-5xl px-4 py-8 text-center">
          <h1 className="font-bold text-center text-5xl">Maraboon Pet Resort</h1>
          <p className="mt-4">Best of care, safety, and comfort for your pets while you're away</p>
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
          <div className="hero-content flex-col gap-4 pt-4 pb-8 w-full">
            <img
              src={EmeraldEmployeesWithDogs}
              className="rounded-lg shadow-2xl"
              alt="Emerald employees with dogs outside"
            />
            <div className="lg:mx-12">
              <h1 className="font-bold text-center text-5xl">Our Services</h1>
              <p className="max-w-2xl mx-auto py-4 text-center">
                Our brand new accommodation has been specifically designed to ensure all of our furry friends have the safest and most comfortable stay with us while you’re away
              </p>
              <ul className="list-disc list-inside max-w-fit mx-auto">
                <li>State of the art indoor/outdoor runs</li>
                <li>Climate control accommodations</li>
                <li>Large outdoor play yards</li>
                <li>24/7 staff monitoring</li>
                <li>Live webcams</li>
              </ul>
            </div>
          </div>
          {/* Service Cards */}
          <div className="flex justify-evenly flex-wrap gap-12 max-w-7xl mx-auto">
            <div className="card bg-base-100 p-4 w-full shadow-sm">
              <figure>
                <img
                  src={DogBoarding}
                  alt="Dog sitting in front entrance of dog boarding kennel house" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Dog Boarding</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 p-4 w-full shadow-sm">
              <figure>
                <img
                  src={DogDaycare}
                  alt="Two dogs playing with toys outside" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Dog Daycare</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 p-4 w-full shadow-sm">
              <figure>
                <img
                  src={CatBoarding}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Cat Boarding</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 p-4 w-full shadow-sm">
              <figure>
                <img
                  src={DogGrooming}
                  alt="Dog with a towel on its head about to groom" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Grooming</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
