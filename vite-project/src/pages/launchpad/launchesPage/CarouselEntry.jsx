/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import {NavLink, useSearchParams} from 'react-router-dom'

// IMPORTING CSS FILE
import './CarouselEntry.css'

// EXPORTING DEFAULT CAROUSELENTRY FUNCTION
export default function CarouselEntry(props){
    // OBTAINING THE QUERY PARAMETERS TO DIRECT TO SINGLE LAUNCHPAD PAGE
    const [searchParams, setSearchParams] = useSearchParams()
    searchParams.set('carouselCollectionID', props.id)

    return(
        <div>
            <div className="carousel_entry_container">
                <img 
                    src={`${props.image}`} 
                    alt="card-image"
                    title="card-image"
                    loading="lazy"
                    width={200}
                    height={200}
                />
                
                <div className="carousel_entry_container__description">
                    <li className="carousel_entry_container__description--banner">live</li>
                    <h1 className="carousel_entry_container__description--title">{props.heading}</h1>
                    <p className="carousel_entry_container__description--paragraph">{props.description}</p>
    
                    <div>
                        <div className="carousel_entry_container__description--buttons">
                            <span className="description--buttons--calender">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C11.3284 0 12 0.61992 12 1.38462V2.76923H27V1.38462C27 0.61992 27.6717 0 28.5 0C29.3283 0 30 0.61992 30 1.38462V2.76923H34.5C36.9852 2.76923 39 4.62896 39 6.92308V31.8462C39 34.1402 36.9852 36 34.5 36H4.5C2.01471 36 0 34.1402 0 31.8462V6.92308C0 4.62896 2.01471 2.76923 4.5 2.76923H9V1.38462C9 0.61992 9.67158 0 10.5 0ZM27 5.53846V6.92308C27 7.68777 27.6717 8.30769 28.5 8.30769C29.3283 8.30769 30 7.68777 30 6.92308V5.53846H34.5C35.3283 5.53846 36 6.15838 36 6.92308V11.0769H3V6.92308C3 6.15838 3.67158 5.53846 4.5 5.53846H9V6.92308C9 7.68777 9.67158 8.30769 10.5 8.30769C11.3284 8.30769 12 7.68777 12 6.92308V5.53846H27ZM3 13.8462V31.8462C3 32.6107 3.67158 33.2308 4.5 33.2308H34.5C35.3283 33.2308 36 32.6107 36 31.8462V13.8462H3ZM18 18C18 17.2353 18.6716 16.6154 19.5 16.6154C20.3284 16.6154 21 17.2353 21 18C21 18.7647 20.3284 19.3846 19.5 19.3846C18.6716 19.3846 18 18.7647 18 18ZM25.5 16.6154C24.6716 16.6154 24 17.2353 24 18C24 18.7647 24.6716 19.3846 25.5 19.3846C26.3284 19.3846 27 18.7647 27 18C27 17.2353 26.3284 16.6154 25.5 16.6154ZM30 18C30 17.2353 30.6717 16.6154 31.5 16.6154C32.3283 16.6154 33 17.2353 33 18C33 18.7647 32.3283 19.3846 31.5 19.3846C30.6717 19.3846 30 18.7647 30 18ZM31.5 22.1538C30.6717 22.1538 30 22.7738 30 23.5385C30 24.3032 30.6717 24.9231 31.5 24.9231C32.3283 24.9231 33 24.3032 33 23.5385C33 22.7738 32.3283 22.1538 31.5 22.1538ZM24 23.5385C24 22.7738 24.6716 22.1538 25.5 22.1538C26.3284 22.1538 27 22.7738 27 23.5385C27 24.3032 26.3284 24.9231 25.5 24.9231C24.6716 24.9231 24 24.3032 24 23.5385ZM19.5 22.1538C18.6716 22.1538 18 22.7738 18 23.5385C18 24.3032 18.6716 24.9231 19.5 24.9231C20.3284 24.9231 21 24.3032 21 23.5385C21 22.7738 20.3284 22.1538 19.5 22.1538ZM12 23.5385C12 22.7738 12.6716 22.1538 13.5 22.1538C14.3284 22.1538 15 22.7738 15 23.5385C15 24.3032 14.3284 24.9231 13.5 24.9231C12.6716 24.9231 12 24.3032 12 23.5385ZM7.5 22.1538C6.67158 22.1538 6 22.7738 6 23.5385C6 24.3032 6.67158 24.9231 7.5 24.9231C8.32842 24.9231 9 24.3032 9 23.5385C9 22.7738 8.32842 22.1538 7.5 22.1538ZM6 29.0769C6 28.3123 6.67158 27.6923 7.5 27.6923C8.32842 27.6923 9 28.3123 9 29.0769C9 29.8415 8.32842 30.4615 7.5 30.4615C6.67158 30.4615 6 29.8415 6 29.0769ZM13.5 27.6923C12.6716 27.6923 12 28.3123 12 29.0769C12 29.8415 12.6716 30.4615 13.5 30.4615C14.3284 30.4615 15 29.8415 15 29.0769C15 28.3123 14.3284 27.6923 13.5 27.6923ZM18 29.0769C18 28.3123 18.6716 27.6923 19.5 27.6923C20.3284 27.6923 21 28.3123 21 29.0769C21 29.8415 20.3284 30.4615 19.5 30.4615C18.6716 30.4615 18 29.8415 18 29.0769ZM25.5 27.6923C24.6716 27.6923 24 28.3123 24 29.0769C24 29.8415 24.6716 30.4615 25.5 30.4615C26.3284 30.4615 27 29.8415 27 29.0769C27 28.3123 26.3284 27.6923 25.5 27.6923Z" fill="#F5F3F7"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C11.3284 0 12 0.61992 12 1.38462V2.76923H27V1.38462C27 0.61992 27.6717 0 28.5 0C29.3283 0 30 0.61992 30 1.38462V2.76923H34.5C36.9852 2.76923 39 4.62896 39 6.92308V31.8462C39 34.1402 36.9852 36 34.5 36H4.5C2.01471 36 0 34.1402 0 31.8462V6.92308C0 4.62896 2.01471 2.76923 4.5 2.76923H9V1.38462C9 0.61992 9.67158 0 10.5 0ZM27 5.53846V6.92308C27 7.68777 27.6717 8.30769 28.5 8.30769C29.3283 8.30769 30 7.68777 30 6.92308V5.53846H34.5C35.3283 5.53846 36 6.15838 36 6.92308V11.0769H3V6.92308C3 6.15838 3.67158 5.53846 4.5 5.53846H9V6.92308C9 7.68777 9.67158 8.30769 10.5 8.30769C11.3284 8.30769 12 7.68777 12 6.92308V5.53846H27ZM3 13.8462V31.8462C3 32.6107 3.67158 33.2308 4.5 33.2308H34.5C35.3283 33.2308 36 32.6107 36 31.8462V13.8462H3ZM18 18C18 17.2353 18.6716 16.6154 19.5 16.6154C20.3284 16.6154 21 17.2353 21 18C21 18.7647 20.3284 19.3846 19.5 19.3846C18.6716 19.3846 18 18.7647 18 18ZM25.5 16.6154C24.6716 16.6154 24 17.2353 24 18C24 18.7647 24.6716 19.3846 25.5 19.3846C26.3284 19.3846 27 18.7647 27 18C27 17.2353 26.3284 16.6154 25.5 16.6154ZM30 18C30 17.2353 30.6717 16.6154 31.5 16.6154C32.3283 16.6154 33 17.2353 33 18C33 18.7647 32.3283 19.3846 31.5 19.3846C30.6717 19.3846 30 18.7647 30 18ZM31.5 22.1538C30.6717 22.1538 30 22.7738 30 23.5385C30 24.3032 30.6717 24.9231 31.5 24.9231C32.3283 24.9231 33 24.3032 33 23.5385C33 22.7738 32.3283 22.1538 31.5 22.1538ZM24 23.5385C24 22.7738 24.6716 22.1538 25.5 22.1538C26.3284 22.1538 27 22.7738 27 23.5385C27 24.3032 26.3284 24.9231 25.5 24.9231C24.6716 24.9231 24 24.3032 24 23.5385ZM19.5 22.1538C18.6716 22.1538 18 22.7738 18 23.5385C18 24.3032 18.6716 24.9231 19.5 24.9231C20.3284 24.9231 21 24.3032 21 23.5385C21 22.7738 20.3284 22.1538 19.5 22.1538ZM12 23.5385C12 22.7738 12.6716 22.1538 13.5 22.1538C14.3284 22.1538 15 22.7738 15 23.5385C15 24.3032 14.3284 24.9231 13.5 24.9231C12.6716 24.9231 12 24.3032 12 23.5385ZM7.5 22.1538C6.67158 22.1538 6 22.7738 6 23.5385C6 24.3032 6.67158 24.9231 7.5 24.9231C8.32842 24.9231 9 24.3032 9 23.5385C9 22.7738 8.32842 22.1538 7.5 22.1538ZM6 29.0769C6 28.3123 6.67158 27.6923 7.5 27.6923C8.32842 27.6923 9 28.3123 9 29.0769C9 29.8415 8.32842 30.4615 7.5 30.4615C6.67158 30.4615 6 29.8415 6 29.0769ZM13.5 27.6923C12.6716 27.6923 12 28.3123 12 29.0769C12 29.8415 12.6716 30.4615 13.5 30.4615C14.3284 30.4615 15 29.8415 15 29.0769C15 28.3123 14.3284 27.6923 13.5 27.6923ZM18 29.0769C18 28.3123 18.6716 27.6923 19.5 27.6923C20.3284 27.6923 21 28.3123 21 29.0769C21 29.8415 20.3284 30.4615 19.5 30.4615C18.6716 30.4615 18 29.8415 18 29.0769ZM25.5 27.6923C24.6716 27.6923 24 28.3123 24 29.0769C24 29.8415 24.6716 30.4615 25.5 30.4615C26.3284 30.4615 27 29.8415 27 29.0769C27 28.3123 26.3284 27.6923 25.5 27.6923Z" fill="black" fillOpacity="0.2"/>
                                </svg>
                            </span>
    
                            <NavLink 
                                className="description--buttons--link"
                                to={`/launchpad/launch details/?${searchParams}`}
                                onClick={() => setSearchParams(searchParams)}
                            >Go To launchpad</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}