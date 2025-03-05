import React from 'react'

export default function ProfileCard() {
  return (
    <section>
      <div className="development-flex-box">
        {/* <img src={profilePhoto} alt="photograph of joseph schenk" className="profile-photo"></img>
         */}
        <h1>Software Engineering</h1>
        <p className="margin-top-20">
          Having studied Mechanical Engineering and written a thesis paper on computer vision in
          Matlab, I made the decision to requalify as a Software Developer I enrolled in a three
          month bootcamp in December of 2020. This was the first step into the world of full-stack
          web development.
        </p>
        <p className="margin-top-20">
          Looking for a role where I could take my prior experience and skills and build on them
          with development learning opportunities I took a job as a Software engineer at Livingdocs
          AG. Here I became the second member of the Customer Solutions Team, wearing the hats of
          Requirements Engineer, Account Manager and Software Developer.
        </p>
        <p className="margin-top-20">
          Writin front end code in Vue.js coming from experience in React and in migrating from
          Angular I had the opportunity to touch multiple frameworks and understand the benefits and
          drawbacks of each.
        </p>
        <p className="margin-top-20">
          In the back-end, utilising NodeJs and Express to build REST APIs that query PostgreSQL
          indexed with ElasticSearch, queued with Redis and deployed and containerised on Kubernetes
          with Docker, Flux and Terraform has given me the opportunity to learn many things in many
          contexts.
        </p>
        <p className="margin-top-20">
          Ultimately, getting to learn and write and deploy full-stack solutions gives me the
          capacity to design and ship the best possible solutions. As a generalist in development I
          can pick up new products quickly and understand how best to deliver the best possible work
          for both team members and customers.
        </p>
      </div>
    </section>
  )
}
