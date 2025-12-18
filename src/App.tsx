import CompanyHero from './assets/three-dogs-pet-hero.jpg';
import EmeraldEmployeesWithDogs from './assets/emerald-resort-employees-with-dogs.jpg';
import CatBoarding from './assets/cat-boarding-accommodation.jpg';
import DogBoarding from './assets/dog-boarding-accommodation.jpg';
import DogGrooming from './assets/dog-grooming.jpg';
import DogDaycare from './assets/dog-daycare.jpg';

function App() {
  return (
    <>
      {/* Hero */}
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${CompanyHero})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      {/* Company Info */}
      <section className="hero">
        <div>
          <div className="hero-content flex-col gap-4 pt-4 pb-8 self-start w-full">
            <img
              src={CompanyHero}
              className="rounded-lg shadow-2xl"
              alt="Three dogs sitting together"
            />
            <div className="lg:mx-12">
              <h1 className="font-bold text-center text-5xl">Welcome to Maraboon<br />Pet Resort</h1>
              <p className="pt-4 text-center">
                Emerald's state of the art pet boarding and grooming facility. We offer top-notch daycare and boarding experiences for your furry friends while you're away.
              </p>
            </div>
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
              <p className="py-4 text-center">
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
          <div className="flex justify-evenly flex-wrap gap-12">
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
