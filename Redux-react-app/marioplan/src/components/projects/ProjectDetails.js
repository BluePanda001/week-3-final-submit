import React from 'react'

const ProjectDetails =(props)=>{
    const id= props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ab consectetur rem at tenetur, ad inventore, provident nulla assumenda harum officia deleniti nam doloremque nisi voluptatum saepe, sed nihil ut.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By ....</div>
                    <div>22/11</div>
                </div>
            </div>
        </div>

    )
}
export default ProjectDetails

