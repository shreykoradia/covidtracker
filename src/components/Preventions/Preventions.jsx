import React from 'react'
import styles from './preventions.module.css'

function Preventions() {
    return (
        <div className ={styles.container}>
            <h4>To prevent the spread of COVID-19 :</h4>
            <p>Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.</p>
            <p>Wear a mask in public, especially indoors or when physical distancing is not possible.</p>
            <p>Choose open, well-ventilated spaces over closed ones. Open a window if indoors.</p>
            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
            <p>Get vaccinated when it’s your turn. Follow local guidance about vaccination.</p>
            <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</p>
            <p>Stay home if you feel unwell.</p>
            <p>If you have a fever, cough and difficulty breathing, seek medical attention. 
                 Call in advance so your healthcare provider can direct you to the right health facility. 
                  This protects you, and prevents the spread of viruses and other infections.</p>
            <h4>Masks :</h4>
            <p>Properly fitted masks can help prevent the spread of the virus from the person wearing the mask to others.
                 Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene.
                  Follow the advice provided by your local health authority.</p>
        </div>
    )
}

export default Preventions