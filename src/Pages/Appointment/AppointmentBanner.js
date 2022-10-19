import dentistChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section>
            <div className="hero min-h-screen bg-banner-section-backImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dentistChair} alt="" className="lg:max-w-sm rounded-lg shadow-2xl lg:ml-20" />
                    <div className='lg:pr-10'>
                        <DayPicker
                            mode="single"
                            date={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;