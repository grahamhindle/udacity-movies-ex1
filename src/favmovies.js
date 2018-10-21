import React, { Component } from 'react';


class ListFavouriteMovie extends Component {
    render () {
        console.log('Props', this.props)
      return(
           <ol className = 'favmovies'>
        		{this.props.profiles.map((profile)=>{
        			const name = this.props.users[profile.userID].name;
        			const movieName = this.props.movies[profile.favoriteMovieID].name;
        		return(
               	<li key = {profile.id}>
					<div>
                   		<p>{`${name}'s favorite movie is ${movieName} `}</p>
					</div>
				</li>
      			);
      			})}
            </ol> 
		)
    }
}

export default ListFavouriteMovie