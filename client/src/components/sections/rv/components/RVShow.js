import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/RVShow.css"

class RVShow extends Component {

   static propTypes = {
      /* Passed down from Beer.js
         Used here to show all the data for one selected BEER */
      data: PropTypes.object
   }

   render() {

      const { name, streetAddress, city, state, zip, phone, image,
         website, reviewWebsite, reviewWebsiteRating, siteId, electricalHookup,
         water, sewerHookup, dumpStation, pullThroughSite, rate, petsAllowed,
         petRestrictions, restrooms, showers, myRating, notes } = this.props.data

      const address = `${city}, ${state} ${zip}`

      return (
         <div className="RVShow-main-container">
            <div className="RVShow-upper-container">
               <div className="RVShow-left-container">
                  <h1>{name}</h1>
                  <p>{streetAddress}</p>
                  <p>
                     <span>{address}</span>
                  </p>
                  <p>{phone}</p>
                  {website === "N/A" ? "" :
                     <a href={website} target="_blank" rel="noopener noreferrer">Website:{" "}{name}</a>}
                  {reviewWebsite === "N/A" ? "" :
                     <a href={reviewWebsite} target="_blank" rel="noopener noreferrer">Review Website URL</a>}
                  <p><strong>Review Website Rating:</strong>{" "}{reviewWebsiteRating}</p>
                  <p><strong>Site Id:</strong>{" "}{siteId}</p>
                  <p><strong>Site Electrical Hookup:</strong>{" "}{electricalHookup}</p>
                  <p><strong>Site Water Hookup:</strong>{" "}{water}</p>
                  <p><strong>Site Sewer Hookup:</strong>{" "}{sewerHookup}</p>
                  <p><strong>Campground Dump Station:</strong>{" "}{dumpStation}</p>
                  <p><strong>Pull-through Site:</strong>{" "}{pullThroughSite}</p>
                  <p><strong>Price:</strong>{" "}{rate}</p>
                  <p><strong>Pets Allowed:</strong>{" "}{petsAllowed}</p>
                  <p><strong>Pets Restrictions:</strong>{" "}{petRestrictions}</p>
                  <p><strong>Campground Restrooms:</strong>{" "}{restrooms}</p>
                  <p><strong>Campground Showers:</strong>{" "}{showers}</p>
                  <p><strong>My Rating:</strong>{" "}{myRating}</p>
               </div>
               <div className="RVShow-right-container">
                  <img src={image} alt={name} className="RVShow-img" />
               </div>
            </div>
            <div className="RVShow-lower-container">
               <p><strong>Notes:</strong>{" "}{notes}</p>
            </div>
         </div>
      )
   }
}

export default RVShow