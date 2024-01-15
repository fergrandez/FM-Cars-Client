import './appointmentInfo.css'
import { format } from 'date-fns'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const AppointmentInfo = ({formData, setFormData}) => {
    const initialValues = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        comments: formData.comments,
        carYear: formData.carYear,
        carMake: formData.carMake,
        carModel: formData.carModel
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone number is required').min(10, 'Invalid phone number').max(10),
        email: Yup.string().email().required('Email is required'),
        comments: Yup.string().required('Comment is required'),
        carYear: Yup.string().required('Year is required'),
        carMake: Yup.string().required('Make is required'),
        carModel: Yup.string().required('Model is required')
    })

    return (
        <div className='rada'>
            <div className='appointmentInfoHeader'>
                Appointment for {format(formData.dateTime.date, 'PPPP')} at {format(formData.dateTime.time, 'h:mm a')}
            </div>

            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form className='bookingDetails'>
                    <div className='detailsSectionContainer'>
                        <div className='detailsSectionSubtitle'>Personal Information</div>
                        <ErrorMessage className='err-msg' name='name' component='span' />
                        <Field id='nameInput' name='name' placeholder='Name' onInput={(e) => setFormData({...formData, name: e.target.value})} />

                        <ErrorMessage className='err-msg' name='phone' component='span' />
                        <Field id='phoneInput' name='phone' placeholder='Phone' onInput={(e) => setFormData((prev) => ({...prev, phone: e.target.value}))} />

                        <ErrorMessage className='err-msg' name='email' component='span' />
                        <Field type='email' id='emailInput' name='email' placeholder='Email' onInput={(e) => setFormData((prev) => ({...prev, email: e.target.value}))} />
                    </div>
                    
                    <div className='detailsSectionContainer'>
                        <div className='detailsSectionSubtitle'>Vehicle Information</div>

                        <ErrorMessage className='err-msg' name='carYear' component='span' />
                        <Field id='carYearInput' name='carYear' placeholder='Year' onInput={(e) => setFormData((prev) => ({...prev, carYear: e.target.value}))} />

                        <ErrorMessage className='err-msg' name='carMake' component='span' />
                        <Field id='carMakeInput' name='carMake' placeholder='Make' onInput={(e) => setFormData((prev) => ({...prev, carMake: e.target.value}))} />

                        <ErrorMessage className='err-msg' name='carModel' component='span' />
                        <Field id='carModelInput' name='carModel' placeholder='Model' onInput={(e) => setFormData((prev) => ({...prev, carModel: e.target.value}))} />
                    </div>

                    <div className='detailsSectionContainer'>
                        <div className='detailsSectionSubtitle'>What Type of Service Do You Need?</div>

                        <ErrorMessage className='err-msg' name='comments' component='span' />
                        <Field component='textarea' cols='30' rows='10' id='commentsInput' name='comments' placeholder='Comments' onInput={(e) => setFormData((prev) => ({...prev, comments: e.target.value}))} />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}